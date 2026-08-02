/* ----------------------------------------------------
   Audio Engine - Speech Synthesis Narration & Sound Effects
   ---------------------------------------------------- */

class AudioEngine {
  constructor() {
    this.soundEnabled = true;
    this.synth = window.speechSynthesis || null;
    this.currentUtterance = null;
    
    // Web Audio API context for sound effects
    this.audioCtx = null;
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const btnIcon = document.getElementById('sound-icon');
    const btnLabel = document.getElementById('sound-label');

    if (!this.soundEnabled) {
      this.stopSpeech();
      if (btnIcon) btnIcon.textContent = '🔇';
      if (btnLabel) btnLabel.textContent = 'Audio OFF';
    } else {
      if (btnIcon) btnIcon.textContent = '🔊';
      if (btnLabel) btnLabel.textContent = 'Audio ON';
      this.speak("Audio narration is turned on!");
    }
  }

  speak(text, lang = 'en-US') {
    if (!this.soundEnabled || !this.synth) return;

    this.stopSpeech(); // Stop previous
    this.playSoftChime(); // Play gentle cute chime before speaking

    // Split long text into manageable sentences to prevent browser TTS limits
    const sentences = text.match(/[^.!?।]+[.!?।]+/g) || [text];

    let voices = this.synth.getVoices();
    if (!voices.length) {
      voices = window.speechSynthesis.getVoices();
    }

    let selectedVoice = null;
    if (lang.startsWith('hi')) {
      selectedVoice = voices.find(v => (v.lang.includes('hi') || v.name.includes('Hindi')) && (v.name.includes('Female') || v.name.includes('Kalpana') || v.name.includes('Google') || v.name.includes('Heera') || v.name.includes('Veena')))
        || voices.find(v => v.lang.includes('hi') || v.name.includes('Hindi'));
    } else {
      selectedVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('Natural') || v.name.includes('Zira') || v.name.includes('Samantha') || v.name.includes('Victoria') || v.name.includes('Google')));
    }

    sentences.forEach((sentence) => {
      const cleanSentence = sentence.trim();
      if (!cleanSentence) return;

      const utterance = new SpeechSynthesisUtterance(cleanSentence);
      utterance.lang = lang;
      utterance.rate = 0.72; // Calmer, slower, ultra-clear storytelling pace for young kids
      utterance.pitch = 1.35; // Cute, sweet, high-pitched soft voice!
      utterance.volume = 1.0;
      if (selectedVoice) utterance.voice = selectedVoice;

      this.synth.speak(utterance);
    });
  }

  playSoftChime() {
    if (!this.soundEnabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(659.25, now); // E5 soft bell
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  stopSpeech() {
    if (this.synth && this.synth.speaking) {
      this.synth.cancel();
    }
  }

  // Play synthesized sparkle / chime sound using Web Audio API
  playSparkle() {
    if (!this.soundEnabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio

    freqs.forEach((f, idx) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.value = f;

      gain.gain.setValueAtTime(0.1, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  }

  // Play celebration fanfare
  playFanfare() {
    if (!this.soundEnabled) return;
    this.initAudioContext();
    if (!this.audioCtx) return;

    const now = this.audioCtx.currentTime;
    const notes = [
      { f: 523.25, d: 0.15 }, // C5
      { f: 659.25, d: 0.15 }, // E5
      { f: 783.99, d: 0.15 }, // G5
      { f: 1046.50, d: 0.4 }  // C6 long
    ];

    let t = now;
    notes.forEach(n => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.value = n.f;

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(t);
      osc.stop(t + n.d);
      t += n.d * 0.8;
    });
  }
}

const audioEngine = new AudioEngine();
