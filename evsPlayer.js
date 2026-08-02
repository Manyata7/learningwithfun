/* ----------------------------------------------------
   EVS Explainer Video Player Component
   ---------------------------------------------------- */

class EVSExplainerPlayer {
  constructor() {
    this.currentTopic = null;
    this.currentSceneIdx = 0;
    this.isPlaying = false;
    this.timer = null;
  }

  loadTopic(topic) {
    this.currentTopic = topic;
    this.currentSceneIdx = 0;
    this.isPlaying = false;
    this.render();
  }

  render() {
    const container = document.getElementById('evs-player-root');
    if (!container || !this.currentTopic) return;

    const scene = this.currentTopic.scenes[this.currentSceneIdx];
    const totalScenes = this.currentTopic.scenes.length;

    container.innerHTML = `
      <div class="evs-video-player">
        <!-- Animated Screen -->
        <div class="evs-screen">
          <div class="evs-illustration" id="evs-screen-emoji">${scene.emoji}</div>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 12px;">${scene.title}</h3>
          <div class="evs-narration-box">
            <p id="evs-narration-text">"${scene.text}"</p>
          </div>
        </div>

        <!-- Controls Bar -->
        <div class="evs-controls-bar">
          <button class="evs-btn" onclick="evsPlayer.prevScene()" ${this.currentSceneIdx === 0 ? 'disabled style="opacity:0.4;"' : ''}>
            ⏮️ Prev
          </button>
          
          <button class="evs-btn" onclick="evsPlayer.togglePlay()">
            ${this.isPlaying ? '⏸️ Pause' : '▶️ Play Scene'}
          </button>

          <span style="font-family: var(--font-heading); font-weight:700; color: var(--primary-yellow);">
            Scene ${this.currentSceneIdx + 1} of ${totalScenes}
          </span>

          <button class="evs-btn" onclick="evsPlayer.nextScene()" ${this.currentSceneIdx === totalScenes - 1 ? 'disabled style="opacity:0.4;"' : ''}>
            Next ⏭️
          </button>
        </div>
      </div>
    `;

    // Speak narration
    audioEngine.speak(`${scene.title}. ${scene.text}`);
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.playNextLoop();
    } else {
      if (this.timer) clearTimeout(this.timer);
    }
    this.render();
  }

  playNextLoop() {
    if (!this.isPlaying) return;

    const scene = this.currentTopic.scenes[this.currentSceneIdx];
    audioEngine.speak(`${scene.title}. ${scene.text}`);

    this.timer = setTimeout(() => {
      if (this.currentSceneIdx < this.currentTopic.scenes.length - 1) {
        this.currentSceneIdx++;
        this.render();
        this.playNextLoop();
      } else {
        this.isPlaying = false;
        confettiEngine.fire();
        audioEngine.playFanfare();
        app.addStar(5);
        this.render();
      }
    }, 6000); // 6 seconds per scene for gentle slow pace
  }

  nextScene() {
    if (this.currentSceneIdx < this.currentTopic.scenes.length - 1) {
      this.currentSceneIdx++;
      this.render();
    }
  }

  prevScene() {
    if (this.currentSceneIdx > 0) {
      this.currentSceneIdx--;
      this.render();
    }
  }
}

const evsPlayer = new EVSExplainerPlayer();
