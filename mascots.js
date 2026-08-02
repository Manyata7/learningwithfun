/* ----------------------------------------------------
   Mascot Controller - Interactive Companion Assistant
   ---------------------------------------------------- */

class MascotController {
  constructor() {
    this.mascots = {
      hoot: {
        name: 'Professor Hoot',
        emoji: '🦉',
        tips: [
          "Did you know? Reading out loud helps your brain remember words faster!",
          "Great job exploring! Earn stars by finishing stories and quizzes! ⭐",
          "Hoot hoot! Practice makes perfect in Maths and English!",
          "Take a deep breath and have fun learning today!"
        ]
      },
      bear: {
        name: 'Barnaby Bear',
        emoji: '🐻',
        tips: [
          "Hi buddy! Sharing with friends makes everyone happy!",
          "Don't worry if you make a mistake, that's how we learn!",
          "High five! You are super smart today! ✋",
          "Times tables are super easy once you practice tap-to-reveal!"
        ]
      },
      bot: {
        name: 'Sparky Bot',
        emoji: '🤖',
        tips: [
          "BEEP BOOP! Calculating... You are 100% AWESOME!",
          "Sparky loves science and water cycle explainers!",
          "Keep collecting stars! You're breaking learning records!",
          "Sentence building is like assembling cool robot blocks!"
        ]
      },
      teacher: {
        name: 'Miss Lily',
        emoji: '👩‍🏫',
        tips: [
          "Welcome to our safe, happy digital classroom!",
          "Every lesson is a magical story waiting to be opened.",
          "Remember to take short rest breaks for your eyes!",
          "You are doing wonderful work. Keep shining bright!"
        ]
      }
    };

    this.currentMascot = 'hoot';
  }

  switchMascot(key) {
    if (this.mascots[key]) {
      this.currentMascot = key;
      const avatarEmoji = document.getElementById('mascot-avatar-emoji');
      if (avatarEmoji) avatarEmoji.textContent = this.mascots[key].emoji;
      
      this.showTip(`Switched companion to ${this.mascots[key].name}!`);
      audioEngine.playSparkle();
    }
  }

  interact() {
    const mascot = this.mascots[this.currentMascot];
    const randomTip = mascot.tips[Math.floor(Math.random() * mascot.tips.length)];
    this.showTip(randomTip);
    audioEngine.speak(`${mascot.name} says: ${randomTip}`);
    audioEngine.playSparkle();
  }

  showTip(text) {
    const bubble = document.getElementById('mascot-speech-bubble');
    const speechText = document.getElementById('mascot-speech-text');

    if (bubble && speechText) {
      speechText.textContent = text;
      bubble.style.display = 'flex';
      bubble.style.animation = 'floatMascot 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
  }

  hideSpeech() {
    const bubble = document.getElementById('mascot-speech-bubble');
    if (bubble) bubble.style.display = 'none';
  }
}

const mascotController = new MascotController();
