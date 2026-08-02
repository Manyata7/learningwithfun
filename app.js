const UI_TRANSLATIONS = {
  en: {
    siteTitle: 'Learning Made Fun',
    siteSubtitle: "Created by Shivram Gawale",
    navHome: '🏠 Home',
    navClasses: '🎒 Classes 1-5',
    navStories: '📖 Story Corner',
    navParents: '👨‍👩‍👧 For Parents',
    heroTagline: '✨ Interactive Kid\'s Portal • Created by Shivram Gawale',
    heroTitle1: 'Learning Made ',
    heroTitle2: 'Fun!',
    heroDesc: 'Welcome to a colorful storybook classroom! Choose your class to explore interactive lessons, games, phonics, times tables, and inspiring moral stories.',
    heroBtnClasses: '🎒 Pick Your Class (1-5)',
    heroBtnStories: '📖 Be Kind Story Corner',
    teacherName: 'Miss Lily',
    teacherRole: 'Head Teacher Companion',
    teacherSpeech: '"Hello little superstar! Ready for an exciting learning adventure today?"',
    sectionGradeBadge: 'Grade Selector',
    sectionGradeTitle: 'Choose Your Class',
    sectionGradeSubtitle: 'Select your grade level to unlock fun interactive subjects!',
    featuredTag: '✨ Featured Section',
    featuredTitle: 'Little Stories, Big Lessons',
    featuredDesc: 'Short, delightful illustrated tales that teach honesty, kindness, courage, and sharing with positive moral takeaways.',
    featuredBtn: '📖 Read Stories Now',
    backHome: '⬅️ Back to Home',
    backSubjects: '⬅️ Back to Subjects',
    backStories: '⬅️ Back to Stories'
  },
  hi: {
    siteTitle: 'सीखना हुआ मज़ेदार',
    siteSubtitle: 'शिवराम गवाले द्वारा निर्मित',
    navHome: '🏠 मुख्य पृष्ठ',
    navClasses: '🎒 कक्षा 1 से 5',
    navStories: '📖 कहानियाँ',
    navParents: '👨‍👩‍👧 अभिभावकों हेतु',
    heroTagline: '✨ बच्चों का जादुई शिक्षण पोर्टल • शिवराम गवाले द्वारा निर्मित',
    heroTitle1: 'सीखना हुआ ',
    heroTitle2: 'मज़ेदार!',
    heroDesc: 'रंग-बिरंगी कहानियों वाली कक्षा में आपका स्वागत है! अपनी कक्षा चुनें और मज़ा लें खेल-खेल में पढ़ाई का।',
    heroBtnClasses: '🎒 अपनी कक्षा चुनें (1-5)',
    heroBtnStories: '📖 प्यारी कहानियों का कोना',
    teacherName: 'मिस लिली',
    teacherRole: 'मुख्य अध्यापिका मार्गदर्शक',
    teacherSpeech: '"नमस्ते प्यारे बच्चे! क्या आप आज सीखने की नई यात्रा के लिए तैयार हैं?"',
    sectionGradeBadge: 'कक्षा का चयन',
    sectionGradeTitle: 'अपनी कक्षा चुनें',
    sectionGradeSubtitle: 'रोमांचक विषय और पाठ खोजने के लिए अपनी कक्षा पर क्लिक करें!',
    featuredTag: '✨ विशेष अनुभाग',
    featuredTitle: 'छोटी कहानियाँ, बड़ी सीख',
    featuredDesc: 'ईमानदारी, दया, साहस और बाँटने की भावना सिखाने वाली प्रेरणादायक सुंदर कहानियाँ।',
    featuredBtn: '📖 कहानियाँ अभी पढ़ें',
    backHome: '⬅️ मुख्य पृष्ठ पर जाएँ',
    backSubjects: '⬅️ विषयों पर जाएँ',
    backStories: '⬅️ कहानियों पर जाएँ'
  }
};

class App {
  constructor() {
    this.currentView = 'home';
    this.selectedClassId = 1;
    this.selectedSubjectId = null;
    this.selectedStoryId = null;
    this.globalLang = 'en'; // 'en' or 'hi'
    this.storyLang = 'en';
    this.starsCount = parseInt(localStorage.getItem('learning_portal_stars') || '15', 10);

    // Sentence builder state
    this.currentSentenceIdx = 0;
    this.builtWords = [];

    // Math state
    this.selectedTableNum = 2;
    this.revealedTableAns = {};

    this.init();
  }

  init() {
    this.updateStarsUI();
    this.navigateTo('home');
  }

  toggleGlobalLanguage() {
    this.globalLang = (this.globalLang === 'hi') ? 'en' : 'hi';
    this.storyLang = this.globalLang;
    
    const isHi = this.globalLang === 'hi';
    const labelEl = document.getElementById('global-lang-label');
    if (labelEl) labelEl.textContent = isHi ? '🇬🇧 English' : '🇮🇳 हिन्दी';

    const navHome = document.getElementById('nav-home');
    if (navHome) navHome.innerHTML = `<span class="nav-icon">🏠</span> ${isHi ? 'मुख्य पृष्ठ' : 'Home'}`;

    const navClasses = document.getElementById('nav-classes');
    if (navClasses) navClasses.innerHTML = `<span class="nav-icon">🎒</span> ${isHi ? 'कक्षा 1-5' : 'Classes 1-5'}`;

    const navStories = document.getElementById('nav-stories');
    if (navStories) navStories.innerHTML = `<span class="nav-icon">📖</span> ${isHi ? 'कहानियाँ' : 'Story Corner'}`;

    const navParents = document.getElementById('nav-parents');
    if (navParents) navParents.innerHTML = `<span class="nav-icon">👨‍👩‍👧</span> ${isHi ? 'अभिभावकों हेतु' : 'For Parents'}`;

    const msg = isHi ? "भाषा बदलकर हिन्दी कर दी गई है!" : "Language switched to English!";
    audioEngine.speak(msg, isHi ? 'hi-IN' : 'en-US');
    confettiEngine.fire(20);

    this.navigateTo(this.currentView);
  }

  addStar(amount = 1) {
    this.starsCount += amount;
    localStorage.setItem('learning_portal_stars', this.starsCount);
    this.updateStarsUI();
    audioEngine.playSparkle();
  }

  updateStarsUI() {
    const starsEl = document.getElementById('total-stars-count');
    if (starsEl) starsEl.textContent = this.starsCount;
  }

  navigateTo(viewName) {
    this.currentView = viewName;
    this.updateNavButtons(viewName);

    const root = document.getElementById('app-root');
    if (!root) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    switch (viewName) {
      case 'home':
        this.renderHome(root);
        break;
      case 'classes':
        this.renderClassSelector(root);
        break;
      case 'subjects':
        this.renderSubjectGrid(root);
        break;
      case 'lesson':
        this.renderLessonView(root);
        break;
      case 'stories':
        this.renderStoriesCorner(root);
        break;
      case 'story_detail':
        this.renderStoryDetail(root);
        break;
      case 'parents':
        this.renderParentsGuide(root);
        break;
      default:
        this.renderHome(root);
    }
  }

  updateNavButtons(viewName) {
    ['home', 'classes', 'stories', 'parents'].forEach(name => {
      const btn = document.getElementById(`nav-${name}`);
      if (btn) {
        if (name === viewName || (viewName === 'subjects' && name === 'classes') || (viewName === 'lesson' && name === 'classes')) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });
  }

  selectClass(classId) {
    this.selectedClassId = classId;
    this.navigateTo('subjects');
  }

  selectSubject(subjectId) {
    this.selectedSubjectId = subjectId;
    this.navigateTo('lesson');
  }

  /* --- Render Home View --- */
  renderHome(container) {
    const isHi = this.globalLang === 'hi';
    const t = UI_TRANSLATIONS[this.globalLang];

    container.innerHTML = `
      <!-- Hero Banner -->
      <section class="hero-banner">
        <div class="hero-text-content">
          <div class="hero-tagline">
            <span>${t.heroTagline}</span>
          </div>
          <h1 class="hero-main-title ${isHi ? 'hindi-text' : ''}">
            ${t.heroTitle1}<span class="highlight-text">${t.heroTitle2}</span>
          </h1>
          <p class="hero-description ${isHi ? 'hindi-text' : ''}">
            ${t.heroDesc}
          </p>
          <div class="hero-action-buttons">
            <button class="btn-primary-big" onclick="app.navigateTo('classes')">
              <span>${t.heroBtnClasses}</span>
            </button>
            <button class="btn-secondary-big" onclick="app.navigateTo('stories')">
              <span>${t.heroBtnStories}</span>
            </button>
          </div>
        </div>

        <div class="hero-mascot-card">
          <span class="teacher-illustration">👩‍🏫</span>
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #2D3748; margin-bottom: 6px;">${t.teacherName}</h3>
          <p style="font-size: 0.85rem; color: var(--primary-blue); font-weight:700; margin-bottom: 12px;">${t.teacherRole}</p>
          <div class="teacher-speech-bubble ${isHi ? 'hindi-text' : ''}">
            ${t.teacherSpeech}
          </div>
        </div>
      </section>

      <!-- Choose Your Class Section -->
      <section>
        <div class="section-header">
          <span class="section-badge">${t.sectionGradeBadge}</span>
          <h2 class="section-title ${isHi ? 'hindi-text' : ''}">${t.sectionGradeTitle}</h2>
          <p class="section-subtitle ${isHi ? 'hindi-text' : ''}">${t.sectionGradeSubtitle}</p>
        </div>

        <div class="classes-grid">
          ${CURRICULUM_DATA.classes.map(cls => {
            const clsName = isHi ? cls.nameHi : cls.nameEn;
            const clsDesc = isHi ? cls.descriptionHi : cls.descriptionEn;
            return `
              <div class="class-card class-card-${cls.id}" onclick="app.selectClass(${cls.id})">
                <div class="class-number-badge">${cls.id}</div>
                <h3 class="class-title ${isHi ? 'hindi-text' : ''}">${clsName}</h3>
                <p class="class-desc ${isHi ? 'hindi-text' : ''}">${clsDesc}</p>
                <div class="class-subject-tags">
                  <span class="tag-pill">🔤 English</span>
                  <span class="tag-pill">🔢 Maths</span>
                  <span class="tag-pill">🇮🇳 Hindi</span>
                  <span class="tag-pill">🌍 EVS</span>
                </div>
                <button class="class-explore-btn ${isHi ? 'hindi-text' : ''}">${isHi ? 'कक्षा' : 'Start Class'} ${cls.id} ➔</button>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Featured Stories Banner -->
      <section style="background: white; border-radius: var(--border-radius-lg); border: 4px solid var(--primary-purple); padding: 36px; box-shadow: var(--shadow-soft); display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;">
        <div>
          <span class="story-value-tag">${t.featuredTag}</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #2D3748; margin-bottom: 8px;" class="${isHi ? 'hindi-text' : ''}">${t.featuredTitle}</h2>
          <p style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px;" class="${isHi ? 'hindi-text' : ''}">
            ${t.featuredDesc}
          </p>
        </div>
        <button class="btn-primary-big" style="background: var(--primary-purple); box-shadow: 0 6px 0 #7B2CBF;" onclick="app.navigateTo('stories')">
          <span>${t.featuredBtn}</span>
        </button>
      </section>
    `;
  }

  /* --- Render Class Selector View --- */
  renderClassSelector(container) {
    this.renderHome(container);
  }

  /* --- Render Subject Grid View --- */
  renderSubjectGrid(container) {
    const isHi = this.globalLang === 'hi';
    const t = UI_TRANSLATIONS[this.globalLang];
    const classData = CURRICULUM_DATA.classes.find(c => c.id === this.selectedClassId);
    const subjects = CURRICULUM_DATA.classSubjects[this.selectedClassId] || [];
    const className = isHi ? classData.nameHi : classData.nameEn;
    const tagline = isHi ? classData.taglineHi : classData.taglineEn;

    container.innerHTML = `
      <div class="lesson-header" style="border:none; padding-bottom: 0;">
        <button class="back-btn" onclick="app.navigateTo('home')">${t.backHome}</button>
        <div class="lesson-title-box">
          <h2 class="lesson-title ${isHi ? 'hindi-text' : ''}">${className}</h2>
          <p class="lesson-subtitle ${isHi ? 'hindi-text' : ''}">${tagline} • ${isHi ? 'पढ़ने के लिए विषय चुनें' : 'Choose a subject to begin'}</p>
        </div>
        <div></div>
      </div>

      <div class="subject-grid" style="margin-top: 32px;">
        ${subjects.map(sub => {
          const subName = isHi ? sub.nameHi : sub.nameEn;
          const topicCount = isHi ? sub.topicCountHi : sub.topicCountEn;
          return `
            <div class="subject-card" style="--subject-color: ${sub.color}; --subject-bg: ${sub.color}22;" onclick="app.selectSubject('${sub.id}')">
              <div class="subject-icon-box">${sub.icon}</div>
              <h3 class="subject-name ${isHi ? 'hindi-text' : ''}">${subName}</h3>
              <p class="subject-topic-count ${isHi ? 'hindi-text' : ''}">${topicCount}</p>
              <button class="subject-start-btn ${isHi ? 'hindi-text' : ''}">${isHi ? 'पाठ देखें' : 'Explore Lessons'} ➔</button>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  /* --- Render Subject Interactive Lesson --- */
  renderLessonView(container) {
    const classData = CURRICULUM_DATA.classes.find(c => c.id === this.selectedClassId);
    const subjects = CURRICULUM_DATA.classSubjects[this.selectedClassId];
    const subjectInfo = subjects.find(s => s.id === this.selectedSubjectId);

    let lessonContentHTML = '';

    if (this.selectedSubjectId === 'english') {
      if (this.selectedClassId === 1) {
        lessonContentHTML = this.getEnglishABCContent();
      } else {
        lessonContentHTML = this.getSentenceBuilderContent();
      }
    } else if (this.selectedSubjectId === 'maths') {
      lessonContentHTML = this.getMathsLessonContent();
    } else if (this.selectedSubjectId === 'tables') {
      lessonContentHTML = this.getTimesTablesContent();
    } else if (this.selectedSubjectId === 'hindi') {
      lessonContentHTML = this.getHindiLessonContent();
    } else if (this.selectedSubjectId === 'evs') {
      lessonContentHTML = `<div id="evs-player-root"></div>`;
    }

    container.innerHTML = `
      <div class="lesson-container">
        <div class="lesson-header">
          <button class="back-btn" onclick="app.navigateTo('subjects')">⬅️ Back to Subjects</button>
          <div class="lesson-title-box">
            <h2 class="lesson-title">${subjectInfo.name}</h2>
            <p class="lesson-subtitle">${classData.name} Interactive Activity</p>
          </div>
          <button class="action-pill star-pill" onclick="app.addStar(1)">⭐ +1 Star</button>
        </div>

        <div id="lesson-body-area">
          ${lessonContentHTML}
        </div>
      </div>
    `;

    // If EVS topic, load player
    if (this.selectedSubjectId === 'evs') {
      const topics = CURRICULUM_DATA.evsTopics[this.selectedClassId] || CURRICULUM_DATA.evsTopics[1];
      evsPlayer.loadTopic(topics[0]);
    }
  }

  /* --- English ABC Phonics --- */
  getEnglishABCContent() {
    return `
      <div style="text-align:center; margin-bottom: 24px;">
        <p style="font-size: 1.2rem; color: var(--text-muted);">Tap any letter card to hear phonics pronunciation & cheerful mascot guidance!</p>
      </div>

      <div class="alphabet-grid">
        ${CURRICULUM_DATA.alphabet.map(item => `
          <div class="abc-card" onclick="audioEngine.speak('${item.sound}'); mascotController.showTip('${item.letter} is for ${item.word}! ${item.emoji}'); confettiEngine.fire(20);">
            <div class="abc-letter">${item.letter}</div>
            <div style="font-size: 1.8rem; margin: 4px 0;">${item.emoji}</div>
            <div class="abc-word">${item.word}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  /* --- Sentence Builder --- */
  getSentenceBuilderContent() {
    const exercises = CURRICULUM_DATA.sentenceExercises[this.selectedClassId] || CURRICULUM_DATA.sentenceExercises[3];
    const currentEx = exercises[this.currentSentenceIdx % exercises.length];

    return `
      <div class="sentence-builder-card">
        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #2D3748; margin-bottom: 8px;">
          Build the Sentence! 🧩
        </h3>
        <p style="font-size: 1.1rem; color: var(--primary-blue); font-weight:700; margin-bottom: 20px;">
          Hint: ${currentEx.hint}
        </p>

        <!-- Sentence Drop Target -->
        <div class="sentence-target-area" id="sentence-target">
          ${this.builtWords.map((w, idx) => `
            <span class="word-tile" onclick="app.removeWord(${idx})">${w} ✖</span>
          `).join('')}
          ${this.builtWords.length === 0 ? '<span style="color:#A0AEC0; font-weight:600;">Click word tiles below in order to build your sentence!</span>' : ''}
        </div>

        <!-- Word Pool -->
        <div class="word-pool">
          ${currentEx.jumbled.map(w => `
            <span class="word-tile ${this.builtWords.includes(w) ? 'used' : ''}" onclick="app.addWord('${w}')">${w}</span>
          `).join('')}
        </div>

        <div style="display:flex; justify-content:center; gap: 16px;">
          <button class="btn-primary-big" onclick="app.checkSentence('${currentEx.correct}')">
            <span>✨ Check Sentence</span>
          </button>
          <button class="btn-secondary-big" onclick="app.resetSentence()">
            <span>🔄 Reset</span>
          </button>
        </div>
      </div>
    `;
  }

  addWord(word) {
    this.builtWords.push(word);
    this.renderLessonView(document.getElementById('app-root'));
    audioEngine.speak(word);
  }

  removeWord(idx) {
    this.builtWords.splice(idx, 1);
    this.renderLessonView(document.getElementById('app-root'));
  }

  resetSentence() {
    this.builtWords = [];
    this.renderLessonView(document.getElementById('app-root'));
  }

  checkSentence(correctSentence) {
    const userBuilt = this.builtWords.join(' ');
    if (userBuilt.trim().toLowerCase() === correctSentence.trim().toLowerCase()) {
      confettiEngine.fire(90);
      audioEngine.playFanfare();
      audioEngine.speak(`Outstanding job! ${correctSentence}`);
      mascotController.showTip(`🎉 YOU DID IT! "${correctSentence}" is 100% correct! +5 Stars!`);
      this.addStar(5);
      this.currentSentenceIdx++;
      this.builtWords = [];
      setTimeout(() => this.renderLessonView(document.getElementById('app-root')), 2000);
    } else {
      audioEngine.speak("Almost there! Try rearranging the words!");
      mascotController.showTip("Oops! Keep trying, superstar! You're so close!");
    }
  }

  /* --- Maths Lesson Content & Multi-Section Learning Hub --- */
  getMathsLessonContent() {
    const isHi = this.globalLang === 'hi';
    const subTab = this.selectedMathTab || 'tab1';

    if (this.selectedClassId === 1) {
      // Class 1 Maths Hub
      return `
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 2rem; color:#2D3748;">
            🔢 Class 1 Maths Kingdom • ${isHi ? 'गणित का राज्य' : 'Numbers 1-50'}
          </h3>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:16px;">
            <button class="nav-btn ${subTab === 'tab1' ? 'active' : ''}" onclick="app.setMathTab('tab1')">🍎 ${isHi ? 'गिनती 1-50' : 'Visual Counter 1-50'}</button>
            <button class="nav-btn ${subTab === 'tab2' ? 'active' : ''}" onclick="app.setMathTab('tab2')">⚖️ ${isHi ? 'बड़ा संख्या खेल' : 'Bigger Number Quiz'}</button>
          </div>
        </div>

        ${subTab === 'tab1' ? `
          <div class="sentence-builder-card" style="margin-bottom: 24px;">
            <h4 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--primary-pink); margin-bottom:12px;">
              ${isHi ? 'सेब और गुब्बारे गिनें (टैप करें)' : 'Tap objects to count out loud!'}
            </h4>
            <div class="math-counter-box">
              ${Array.from({ length: 10 }, (_, i) => i + 1).map(num => `<span class="count-object" onclick="audioEngine.speak('${num}', '${isHi?'hi-IN':'en-US'}'); confettiEngine.fire(15);">🍎</span>`).join('')}
            </div>
          </div>

          <div style="text-align:center; margin-bottom:16px;">
            <h4 style="font-family:var(--font-heading); font-size:1.4rem; color:var(--primary-blue);">
              ${isHi ? '1 से 50 संख्या तालिका (क्लिक करें)' : 'Interactive 1 to 50 Number Grid'}
            </h4>
          </div>
          <div class="tables-selector">
            ${Array.from({ length: 50 }, (_, i) => i + 1).map(num => `
              <button class="table-num-btn" onclick="audioEngine.speak('${num}', '${isHi?'hi-IN':'en-US'}'); mascotController.showTip('${num} = ${Math.floor(num/10)} Tens + ${num%10} Ones ⭐'); confettiEngine.fire(10);">${num}</button>
            `).join('')}
          </div>
        ` : `
          <div class="sentence-builder-card" style="border-color:var(--primary-purple);">
            <h4 style="font-family:var(--font-heading); font-size:1.6rem; margin-bottom:12px;">
              ${isHi ? 'कौन सी संख्या बड़ी है?' : 'Which Number is Greater?'} ⚖️
            </h4>
            <div style="font-size:3.5rem; margin-bottom:20px;">15 🆚 32</div>
            <div style="display:flex; justify-content:center; gap:20px;">
              <button class="btn-primary-big" onclick="app.checkMathAns(15, 32)">15</button>
              <button class="btn-primary-big" style="background:var(--primary-green);" onclick="app.checkMathAns(32, 32)">32 ⭐</button>
            </div>
          </div>
        `}
      `;
    } else if (this.selectedClassId === 2) {
      // Class 2 Maths Hub: Addition & Frog Number Line
      return `
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 2rem; color:#2D3748;">
            ➕ Class 2 Addition & Number Line • ${isHi ? 'जोड़ और संख्या रेखा' : 'Maths Playground'}
          </h3>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:16px;">
            <button class="nav-btn ${subTab === 'tab1' ? 'active' : ''}" onclick="app.setMathTab('tab1')">🍎 ${isHi ? 'चित्र जोड़' : 'Visual Addition'}</button>
            <button class="nav-btn ${subTab === 'tab2' ? 'active' : ''}" onclick="app.setMathTab('tab2')">🐸 ${isHi ? 'मेंढक संख्या रेखा' : 'Frog Number Line'}</button>
          </div>
        </div>

        ${subTab === 'tab1' ? `
          <div class="sentence-builder-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color:var(--primary-pink); margin-bottom:12px;">
              ${isHi ? 'सेब जोड़ें और सही उत्तर चुनें' : 'Count the items & select the sum!'}
            </h4>
            <div style="font-size: 3rem; margin-bottom: 16px;">
              🍎🍎🍎🍎 + 🍎🍎🍎 = ❓
            </div>
            <div style="display:flex; justify-content:center; gap: 16px;">
              <button class="btn-primary-big" onclick="app.checkMathAns(7, 7)">7 ${isHi ? 'सेब' : 'Apples'}</button>
              <button class="btn-primary-big" style="background:var(--primary-blue);" onclick="app.checkMathAns(6, 7)">6 ${isHi ? 'सेब' : 'Apples'}</button>
              <button class="btn-primary-big" style="background:var(--primary-pink);" onclick="app.checkMathAns(8, 7)">8 ${isHi ? 'सेब' : 'Apples'}</button>
            </div>
          </div>
        ` : `
          <div class="sentence-builder-card" style="border-color:var(--primary-green);">
            <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color:var(--primary-green); margin-bottom:12px;">
              🐸 ${isHi ? 'मेंढक की संख्या रेखा छलांग (4 + 3 = 7)' : 'Frog Jump on Number Line: 4 + 3'}
            </h4>
            <div style="font-size:3rem; margin-bottom:16px;">🐸 ➔ 🪷 🪷 🪷 🪷 | 🪷 🪷 🪷</div>
            <div style="display:flex; justify-content:space-between; background:white; padding:16px; border-radius:var(--border-radius-pill); border:3px solid var(--primary-green); font-family:var(--font-heading); font-size:1.3rem; font-weight:700;">
              ${[0,1,2,3,4,5,6,7,8,9,10].map(n => `<span style="color:${n===7?'#06D6A0':(n<=4?'#4EA8DE':'#A0AEC0')}">${n}</span>`).join('')}
            </div>
            <p style="font-size:1.2rem; color:var(--primary-green); font-weight:700; margin-top:16px;">
              ${isHi ? 'मेंढक 4 से शुरू करके 3 कदम आगे कूदा और 7 पर पहुँचा!' : 'Frog starts at 4, jumps 3 steps forward, and lands on 7! ⭐'}
            </p>
          </div>
        `}
      `;
    } else if (this.selectedClassId === 3) {
      // Class 3 Maths Hub: Subtraction Balloon Popping & Shape Explorer
      return `
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 2rem; color:#2D3748;">
            ➖ Class 3 Subtraction & Shapes • ${isHi ? 'घटाव और आकृतियाँ' : 'Maths Lab'}
          </h3>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:16px;">
            <button class="nav-btn ${subTab === 'tab1' ? 'active' : ''}" onclick="app.setMathTab('tab1')">🎈 ${isHi ? 'गुब्बारा घटाव खेल' : 'Balloon Subtraction'}</button>
            <button class="nav-btn ${subTab === 'tab2' ? 'active' : ''}" onclick="app.setMathTab('tab2')">🔺 ${isHi ? 'आकार व आकृतियाँ' : '2D & 3D Shapes'}</button>
          </div>
        </div>

        ${subTab === 'tab1' ? `
          <div class="sentence-builder-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color:var(--primary-pink); margin-bottom:12px;">
              🎈 ${isHi ? 'गुब्बारों को फोड़कर घटाव करें (10 - 4 = ?)' : 'Pop 4 balloons to calculate 10 - 4!'}
            </h4>
            <div style="display:flex; justify-content:center; gap:12px; font-size:3rem; margin-bottom:20px; flex-wrap:wrap;">
              ${Array.from({length:10}, (_, i) => `
                <span style="cursor:pointer; transition:transform 0.2s;" onclick="this.style.opacity='0.2'; this.innerText='💥'; audioEngine.speak('Pop!'); confettiEngine.fire(10);">🎈</span>
              `).join('')}
            </div>
            <p style="font-size:1.2rem; font-weight:700; color:var(--primary-purple);">
              ${isHi ? '10 गुब्बारों में से 4 फोड़े = 6 बचे!' : '10 Balloons minus 4 popped = 6 Balloons remaining! ⭐'}
            </p>
          </div>
        ` : `
          <div class="tables-selector" style="justify-content:center; gap:16px;">
            ${[
              { nameEn:'Circle', nameHi:'वृत्त (गोला)', emoji:'🔴', descEn:'No corners, round like a wheel!', descHi:'बिना कोने का गोल पहिया!' },
              { nameEn:'Square', nameHi:'वर्ग (चौकोर)', emoji:'🟦', descEn:'4 equal sides and 4 corners!', descHi:'4 बराबर भुजाएँ और 4 कोने!' },
              { nameEn:'Triangle', nameHi:'त्रिभुज', emoji:'🔺', descEn:'3 straight sides and 3 corners!', descHi:'3 भुजाएँ और 3 कोने!' },
              { nameEn:'Cube', nameHi:'घन (3D)', emoji:'🧊', descEn:'3D box with 6 square faces!', descHi:'6 चौकोर सतह वाला डिब्बा!' }
            ].map(shape => `
              <div class="table-card" style="background:white; border-color:var(--primary-blue);" onclick="audioEngine.speak('${isHi?shape.nameHi:shape.nameEn}. ${isHi?shape.descHi:shape.descEn}', '${isHi?'hi-IN':'en-US'}'); mascotController.showTip('${isHi?shape.descHi:shape.descEn}'); confettiEngine.fire(20);">
                <div style="font-size:3.5rem;">${shape.emoji}</div>
                <div style="font-family:var(--font-heading); font-size:1.3rem; font-weight:700; margin-top:8px;">${isHi?shape.nameHi:shape.nameEn}</div>
                <div style="font-size:0.85rem; color:#718096; margin-top:4px;">${isHi?shape.descHi:shape.descEn}</div>
              </div>
            `).join('')}
          </div>
        `}
      `;
    } else if (this.selectedClassId === 4) {
      // Class 4 Maths Hub: Multiplication Array Grid & Currency Counter
      return `
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 2rem; color:#2D3748;">
            ✖️ Class 4 Mult & Division • ${isHi ? 'गुणा, भाग व मुद्रा' : 'Maths Master'}
          </h3>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:16px;">
            <button class="nav-btn ${subTab === 'tab1' ? 'active' : ''}" onclick="app.setMathTab('tab1')">🌟 ${isHi ? 'गुणा मैट्रिक्स (Array)' : 'Multiplication Array'}</button>
            <button class="nav-btn ${subTab === 'tab2' ? 'active' : ''}" onclick="app.setMathTab('tab2')">💵 ${isHi ? 'भारतीय मुद्रा (रुपये)' : 'Money Counter'}</button>
          </div>
        </div>

        ${subTab === 'tab1' ? `
          <div class="sentence-builder-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color:var(--primary-purple); margin-bottom:12px;">
              🌟 ${isHi ? 'गुणा मैट्रिक्स (4 पंक्तियाँ × 5 तारे = 20 तारे)' : 'Visual Array: 4 Rows × 5 Stars = 20 Total Stars'}
            </h4>
            <div style="background:white; padding:20px; border-radius:var(--border-radius-md); border:3px dashed var(--primary-purple); display:inline-block; margin-bottom:16px;">
              ${Array.from({length:4}, () => `<div style="font-size:2rem;">⭐ ⭐ ⭐ ⭐ ⭐</div>`).join('')}
            </div>
            <p style="font-size:1.25rem; font-weight:700; color:var(--primary-purple);">
              4 × 5 = 20 ⭐
            </p>
          </div>
        ` : `
          <div class="sentence-builder-card" style="border-color:var(--primary-green);">
            <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color:var(--primary-green); margin-bottom:12px;">
              💵 ${isHi ? 'भारतीय नोट व सिक्के जोड़ें' : 'Indian Currency Note Counter'}
            </h4>
            <div style="font-size:3.5rem; margin-bottom:16px;">💵 ₹50 + 💵 ₹20 + 🪙 ₹10 = ❓</div>
            <div style="display:flex; justify-content:center; gap:16px;">
              <button class="btn-primary-big" style="background:var(--primary-green);" onclick="app.checkMathAns(80, 80)">₹80</button>
              <button class="btn-primary-big" style="background:var(--primary-blue);" onclick="app.checkMathAns(70, 80)">₹70</button>
              <button class="btn-primary-big" style="background:var(--primary-pink);" onclick="app.checkMathAns(90, 80)">₹90</button>
            </div>
          </div>
        `}
      `;
    } else {
      // Class 5 Maths Hub: Fraction Slicer, Decimals & Geometry Angle Explorer
      const currentFrac = this.selectedFraction || '1/2';
      const fracData = {
        '1/2': { name: 'Half (1 out of 2)', slices: '🍕⬜', pct: '50%', dec: '0.5', text: 'One half means 1 slice out of 2 equal slices! That is 50% or 0.5.' },
        '1/3': { name: 'One Third (1 out of 3)', slices: '🍕⬜⬜', pct: '33.3%', dec: '0.33', text: 'One third means 1 slice out of 3 equal slices! That is 33.3%.' },
        '1/4': { name: 'One Quarter (1 out of 4)', slices: '🍕⬜⬜⬜', pct: '25%', dec: '0.25', text: 'One quarter means 1 slice out of 4 equal slices! That is 25% or 0.25.' },
        '3/4': { name: 'Three Quarters (3 out of 4)', slices: '🍕🍕🍕⬜', pct: '75%', dec: '0.75', text: 'Three quarters means 3 slices out of 4 equal slices! That is 75% or 0.75.' },
        '2/5': { name: 'Two Fifths (2 out of 5)', slices: '🍕🍕⬜⬜⬜', pct: '40%', dec: '0.4', text: 'Two fifths means 2 slices out of 5 equal slices! That is 40% or 0.4.' }
      }[currentFrac];

      return `
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 2rem; color:#2D3748;">
            🍕 Class 5 Fractions, Decimals & Geometry • ${isHi ? 'भिन्न, दशमलव व कोण' : 'Maths Genius'}
          </h3>
          <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:16px;">
            <button class="nav-btn ${subTab === 'tab1' ? 'active' : ''}" onclick="app.setMathTab('tab1')">🍕 ${isHi ? 'पिज़्ज़ा भिन्न प्रयोगशाला' : 'Fraction Slicer'}</button>
            <button class="nav-btn ${subTab === 'tab2' ? 'active' : ''}" onclick="app.setMathTab('tab2')">📐 ${isHi ? 'कोण मार्गदर्शक (Angles)' : 'Geometry Angles'}</button>
          </div>
        </div>

        ${subTab === 'tab1' ? `
          <!-- Fraction Selector Buttons -->
          <div style="display:flex; justify-content:center; flex-wrap:wrap; gap: 12px; margin-bottom: 24px;">
            ${['1/2', '1/3', '1/4', '3/4', '2/5'].map(f => `
              <button class="nav-btn ${f === currentFrac ? 'active' : ''}" style="font-size: 1.2rem; padding: 12px 24px;" onclick="app.selectFraction('${f}')">
                🍕 ${f}
              </button>
            `).join('')}
          </div>

          <!-- Visual Pizza Display Card -->
          <div class="sentence-builder-card" style="background: linear-gradient(135deg, #FFFDF6 0%, #FFF5F5 100%); border-color: var(--primary-pink); margin-bottom: 28px;">
            <div style="font-size: 5rem; margin-bottom: 12px;">${fracData.slices}</div>
            <h4 style="font-family: var(--font-heading); font-size: 1.8rem; color: var(--primary-pink); margin-bottom: 8px;">
              ${isHi ? 'भिन्न' : 'Fraction'}: ${currentFrac} (${fracData.name})
            </h4>

            <!-- Decimal & Percent Visual Bar -->
            <div style="max-width: 600px; margin: 0 auto 20px; background: white; border-radius: var(--border-radius-pill); border: 3px solid var(--primary-blue); padding: 8px; display:flex; justify-content:space-around; font-family:var(--font-heading); font-size: 1.2rem; font-weight:700; color:var(--primary-blue);">
              <span>📊 ${isHi ? 'दशमलव' : 'Decimal'}: ${fracData.dec}</span>
              <span>⚡ ${isHi ? 'प्रतिशत' : 'Percentage'}: ${fracData.pct}</span>
            </div>

            <p style="font-size: 1.15rem; color:#4A5568; max-width: 650px; margin: 0 auto;">
              "${fracData.text}"
            </p>
          </div>

          <!-- Interactive Fraction Quiz -->
          <div class="sentence-builder-card" style="border-color: var(--primary-purple);">
            <h4 style="font-family: var(--font-heading); font-size: 1.6rem; color:#2D3748; margin-bottom: 12px;">
              🧩 ${isHi ? 'भिन्न पहेली प्रतियोगिता' : 'Fraction Quiz Challenge!'}
            </h4>
            <p style="font-size: 1.2rem; color: var(--primary-purple); font-weight:700; margin-bottom: 20px;">
              ${isHi ? 'प्रश्न: यदि पिज़्ज़ा के 4 टुकड़ों में से 3 खा लिए जाएँ, तो कितना भिन्न बचेगा?' : 'Question: If a pizza has 4 slices and you eat 3 slices, what fraction did you eat?'}
            </p>
            <div style="font-size: 3.5rem; margin-bottom: 16px;">🍕 🍕 🍕 ⬜</div>

            <div style="display:flex; justify-content:center; gap: 16px; flex-wrap:wrap;">
              <button class="btn-primary-big" style="background:var(--primary-purple);" onclick="app.checkFractionQuiz('3/4', '3/4')">
                🍕 3 / 4
              </button>
              <button class="btn-primary-big" style="background:var(--primary-blue);" onclick="app.checkFractionQuiz('1/4', '3/4')">
                🍕 1 / 4
              </button>
              <button class="btn-primary-big" style="background:var(--primary-pink);" onclick="app.checkFractionQuiz('1/2', '3/4')">
                🍕 1 / 2
              </button>
            </div>
          </div>
        ` : `
          <!-- Geometry Angles Explorer -->
          <div class="tables-selector" style="justify-content:center; gap:20px;">
            ${[
              { nameEn:'Acute Angle (<90°)', nameHi:'न्यून कोण (<90°)', emoji:'📐', descEn:'Sharp & small angle like a slice of pizza!', descHi:'90 अंश से छोटा तीखा कोण!' },
              { nameEn:'Right Angle (90°)', nameHi:'समकोण (90°)', emoji:'📐', descEn:'Perfect L-shape corner like a book edge!', descHi:'किताब के कोने जैसा 90° का कोण!' },
              { nameEn:'Obtuse Angle (>90°)', nameHi:'अधिक कोण (>90°)', emoji:'📐', descEn:'Wide open angle like a reclining chair!', descHi:'90° से बड़ा फैला हुआ कोण!' }
            ].map(ang => `
              <div class="table-card" style="background:white; border-color:var(--primary-purple); padding:24px;" onclick="audioEngine.speak('${isHi?ang.nameHi:ang.nameEn}. ${isHi?ang.descHi:ang.descEn}', '${isHi?'hi-IN':'en-US'}'); mascotController.showTip('${isHi?ang.descHi:ang.descEn}'); confettiEngine.fire(25);">
                <div style="font-size:4rem;">${ang.emoji}</div>
                <div style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700; margin-top:8px;">${isHi?ang.nameHi:ang.nameEn}</div>
                <div style="font-size:0.95rem; color:#718096; margin-top:6px;">${isHi?ang.descHi:ang.descEn}</div>
              </div>
            `).join('')}
          </div>
        `}
      `;
    }
  }

  setMathTab(tabId) {
    this.selectedMathTab = tabId;
    this.renderLessonView(document.getElementById('app-root'));
  }

  selectFraction(fracKey) {
    this.selectedFraction = fracKey;
    const data = {
      '1/2': 'One half is 1 slice out of 2 equal parts. That is 0.5 or 50 percent!',
      '1/3': 'One third is 1 slice out of 3 equal parts. That is 33.3 percent!',
      '1/4': 'One quarter is 1 slice out of 4 equal parts. That is 0.25 or 25 percent!',
      '3/4': 'Three quarters is 3 slices out of 4 equal parts. That is 0.75 or 75 percent!',
      '2/5': 'Two fifths is 2 slices out of 5 equal parts. That is 0.4 or 40 percent!'
    }[fracKey];

    this.renderLessonView(document.getElementById('app-root'));
    audioEngine.speak(data);
    confettiEngine.fire(20);
  }

  checkFractionQuiz(userChoice, correctChoice) {
    if (userChoice === correctChoice) {
      confettiEngine.fire(80);
      audioEngine.playFanfare();
      audioEngine.speak("Superb job! 3 out of 4 slices equals 3 quarters!");
      mascotController.showTip("🎉 Outstanding! You are a Fraction Master! +5 Stars!");
      this.addStar(5);
    } else {
      audioEngine.speak("Count the eaten pizza slices again!");
      mascotController.showTip("Try again! 3 slices out of 4 equal parts is 3/4!");
    }
  }

  checkMathAns(userVal, correctVal) {
    if (userVal === correctVal) {
      confettiEngine.fire();
      audioEngine.playFanfare();
      audioEngine.speak("Correct! 4 plus 3 equals 7!");
      this.addStar(3);
    } else {
      audioEngine.speak("Try counting the apples again!");
    }
  }

  /* --- Times Tables View --- */
  getTimesTablesContent() {
    const maxTable = (this.selectedClassId >= 4) ? 20 : 12;
    const tableNum = this.selectedTableNum;

    return `
      <div>
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color:#2D3748;">
            Animated Times Tables (1 to ${maxTable}) ✖️
          </h3>
          <p>Tap a table number below, then tap any card to reveal the answer!</p>
        </div>

        <div class="tables-selector">
          ${Array.from({ length: maxTable }, (_, i) => i + 1).map(num => `
            <button class="table-num-btn ${num === tableNum ? 'active' : ''}" onclick="app.selectTimesTable(${num})">${num}</button>
          `).join('')}
        </div>

        <div class="table-cards-grid">
          ${Array.from({ length: 10 }, (_, i) => i + 1).map(multiplier => {
            const key = `${tableNum}x${multiplier}`;
            const isRevealed = this.revealedTableAns[key];
            const ans = tableNum * multiplier;
            return `
              <div class="table-card" onclick="app.toggleTableAns('${key}', ${tableNum}, ${multiplier}, ${ans})">
                <div>${tableNum} × ${multiplier} =</div>
                <div class="table-ans ${isRevealed ? '' : 'hidden'}">
                  ${isRevealed ? ans : ' Tap to Reveal! ❓'}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  selectTimesTable(num) {
    this.selectedTableNum = num;
    this.renderLessonView(document.getElementById('app-root'));
  }

  toggleTableAns(key, n1, n2, ans) {
    this.revealedTableAns[key] = true;
    audioEngine.speak(`${n1} times ${n2} equals ${ans}`);
    confettiEngine.fire(15);
    this.addStar(1);
    this.renderLessonView(document.getElementById('app-root'));
  }

  /* --- Hindi Lesson Content --- */
  getHindiLessonContent() {
    if (this.selectedClassId === 1) {
      return `
        <div style="text-align:center; margin-bottom: 20px;">
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem;">हिन्दी वर्णमाला (Varnmala) 🇮🇳</h3>
          <p>स्वर एवं व्यंजन सीखें! कार्ड पर क्लिक करके उच्चारण सुनें।</p>
        </div>

        <h4 style="font-family: var(--font-heading); margin-bottom: 12px; color: var(--primary-pink);">स्वर (Vowels)</h4>
        <div class="hindi-grid" style="margin-bottom: 32px;">
          ${CURRICULUM_DATA.hindiVarnmala.swar.map(item => `
            <div class="hindi-card" onclick="audioEngine.speak('${item.char} से ${item.word}', 'hi-IN'); confettiEngine.fire(15);">
              <div class="hindi-char">${item.char}</div>
              <div style="font-size: 1.5rem;">${item.emoji}</div>
              <div class="hindi-word-sub">${item.word}</div>
            </div>
          `).join('')}
        </div>

        <h4 style="font-family: var(--font-heading); margin-bottom: 12px; color: var(--primary-blue);">व्यंजन (Consonants)</h4>
        <div class="hindi-grid">
          ${CURRICULUM_DATA.hindiVarnmala.vyanjan.map(item => `
            <div class="hindi-card" style="border-color:var(--primary-blue);" onclick="audioEngine.speak('${item.char} से ${item.word}', 'hi-IN'); confettiEngine.fire(15);">
              <div class="hindi-char">${item.char}</div>
              <div style="font-size: 1.5rem;">${item.emoji}</div>
              <div class="hindi-word-sub">${item.word}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      return `
        <div style="text-align:center; margin-bottom: 24px;">
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem;">दो अक्षर के शब्द (Two-Letter Words) 🇮🇳</h3>
          <p>अक्षरों को जोड़कर शब्द बनाएं!</p>
        </div>

        <div class="table-cards-grid">
          ${CURRICULUM_DATA.hindiTwoLetterWords.map(item => `
            <div class="table-card" style="background:#FFF5F5; border-color:var(--primary-pink);" onclick="audioEngine.speak('${item.word}', 'hi-IN'); confettiEngine.fire(20);">
              <div style="font-size: 2.2rem; font-family:var(--font-hindi); font-weight:700;">${item.parts[0]} + ${item.parts[1]} = ${item.word}</div>
              <div style="font-size: 2.5rem; margin: 8px 0;">${item.emoji}</div>
              <div style="font-size: 0.95rem; color:#718096;">${item.meaning}</div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  /* --- Render Stories Corner --- */
  renderStoriesCorner(container) {
    if (!this.storyLang) this.storyLang = 'en';

    container.innerHTML = `
      <div class="section-header">
        <span class="section-badge">Be Kind Corner • प्यारी कहानियाँ</span>
        <h2 class="section-title">Little Stories, Big Lessons 📖</h2>
        <p class="section-subtitle">Heartwarming moral tales in English & Hindi teaching honesty, kindness, courage, and sharing.</p>
        
        <!-- Language Switcher Bar -->
        <div style="display:flex; justify-content:center; gap: 12px; margin-top: 16px;">
          <button class="nav-btn ${this.storyLang === 'en' ? 'active' : ''}" onclick="app.setStoryLang('en')">🇬🇧 Read in English</button>
          <button class="nav-btn ${this.storyLang === 'hi' ? 'active' : ''}" onclick="app.setStoryLang('hi')">🇮🇳 हिन्दी में पढ़ें</button>
        </div>
      </div>

      <div class="stories-corner-grid">
        ${STORIES_DATA.map(story => {
          const isHi = this.storyLang === 'hi';
          const title = isHi ? story.titleHi : story.titleEn;
          const tag = isHi ? story.valueTagHi : story.valueTagEn;
          const summary = isHi ? story.summaryHi : story.summaryEn;
          const moral = isHi ? story.moralHi : story.moralEn;

          return `
            <div class="story-card">
              <div class="story-banner-emoji">${story.emojiBanner}</div>
              <span class="story-value-tag">${tag}</span>
              <h3 class="story-title ${isHi ? 'hindi-text' : ''}">${title}</h3>
              <p style="color:var(--text-muted); font-size: 0.95rem; margin-bottom: 16px;" class="${isHi ? 'hindi-text' : ''}">${summary}</p>
              <div class="story-moral-callout ${isHi ? 'hindi-text' : ''}">${moral}</div>

              <button class="btn-primary-big" style="background:var(--primary-purple); box-shadow: 0 4px 0 #7B2CBF; width:100%; margin-top:auto;" onclick="app.openStory('${story.id}')">
                <span>📖 ${isHi ? 'कहानी पढ़ें' : 'Read Story'} (${story.readTime})</span>
              </button>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  setStoryLang(lang) {
    this.storyLang = lang;
    this.renderStoriesCorner(document.getElementById('app-root'));
  }

  openStory(storyId) {
    this.selectedStoryId = storyId;
    this.currentStorySceneIdx = 0;
    this.isStoryAutoPlaying = false;
    if (this.storyTimer) clearTimeout(this.storyTimer);
    this.navigateTo('story_detail');
  }

  readStoryAloud() {
    const story = STORIES_DATA.find(s => s.id === this.selectedStoryId) || STORIES_DATA[0];
    const isHi = this.storyLang === 'hi';
    const title = isHi ? story.titleHi : story.titleEn;
    const langCode = isHi ? 'hi-IN' : 'en-US';

    if (story.scenes) {
      const scene = story.scenes[this.currentStorySceneIdx || 0];
      const sceneTitle = isHi ? scene.titleHi : scene.titleEn;
      const sceneText = isHi ? scene.textHi : scene.textEn;
      audioEngine.speak(`${sceneTitle}. ${sceneText}`, langCode);
    } else {
      const moral = isHi ? story.moralHi : story.moralEn;
      audioEngine.speak(`${title}. ${moral}`, langCode);
    }
  }

  changeStoryScene(newIdx) {
    const story = STORIES_DATA.find(s => s.id === this.selectedStoryId) || STORIES_DATA[0];
    if (story.scenes && newIdx >= 0 && newIdx < story.scenes.length) {
      if (this.isStoryAutoPlaying) {
        this.isStoryAutoPlaying = false;
        if (this.storyTimer) clearTimeout(this.storyTimer);
      }
      this.currentStorySceneIdx = newIdx;
      this.renderStoryDetail(document.getElementById('app-root'));
      this.readStoryAloud();
    }
  }

  toggleStoryAutoPlay() {
    this.isStoryAutoPlaying = !this.isStoryAutoPlaying;
    if (this.isStoryAutoPlaying) {
      const story = STORIES_DATA.find(s => s.id === this.selectedStoryId) || STORIES_DATA[0];
      if (this.currentStorySceneIdx >= (story.scenes?.length || 1) - 1) {
        this.currentStorySceneIdx = 0;
      }
      this.playStoryLoop();
    } else {
      if (this.storyTimer) clearTimeout(this.storyTimer);
      audioEngine.stopSpeech();
      this.renderStoryDetail(document.getElementById('app-root'));
    }
  }

  playStoryLoop() {
    if (!this.isStoryAutoPlaying) return;

    const story = STORIES_DATA.find(s => s.id === this.selectedStoryId) || STORIES_DATA[0];
    const isHi = this.storyLang === 'hi';
    const scenes = story.scenes || [];

    if (this.currentStorySceneIdx < scenes.length) {
      this.renderStoryDetail(document.getElementById('app-root'));
      this.readStoryAloud();

      const currentScene = scenes[this.currentStorySceneIdx];
      const text = isHi ? currentScene.textHi : currentScene.textEn;
      const displayDuration = Math.max(7500, text.length * 85); // Smooth time for kids to watch & listen

      this.storyTimer = setTimeout(() => {
        if (!this.isStoryAutoPlaying) return;

        if (this.currentStorySceneIdx < scenes.length - 1) {
          this.currentStorySceneIdx++;
          this.playStoryLoop();
        } else {
          // Finished full story!
          this.isStoryAutoPlaying = false;
          confettiEngine.fire(90);
          audioEngine.playFanfare();
          this.addStar(5);
          mascotController.showTip(isHi ? "🎉 शाबाश! आपने पूरी कहानी देख ली! +5 Stars!" : "🎉 Awesome! You watched the whole animated story! +5 Stars!");
          this.renderStoryDetail(document.getElementById('app-root'));
        }
      }, displayDuration);
    }
  }

  renderStoryDetail(container) {
    const story = STORIES_DATA.find(s => s.id === this.selectedStoryId) || STORIES_DATA[0];
    if (!this.storyLang) this.storyLang = 'en';
    if (typeof this.currentStorySceneIdx !== 'number') this.currentStorySceneIdx = 0;

    const isHi = this.storyLang === 'hi';
    const title = isHi ? story.titleHi : story.titleEn;
    const tag = isHi ? story.valueTagHi : story.valueTagEn;
    const moral = isHi ? story.moralHi : story.moralEn;
    const scenes = story.scenes || [];
    const currentScene = scenes[this.currentStorySceneIdx] || scenes[0];
    const totalScenes = scenes.length;

    const sceneTitle = isHi ? currentScene.titleHi : currentScene.titleEn;
    const sceneText = isHi ? currentScene.textHi : currentScene.textEn;

    container.innerHTML = `
      <div class="lesson-container">
        <div class="lesson-header">
          <button class="back-btn" onclick="app.navigateTo('stories')">⬅️ Back to Stories</button>
          <div class="lesson-title-box">
            <span class="story-value-tag">${tag}</span>
            <h2 class="lesson-title ${isHi ? 'hindi-text' : ''}">${title}</h2>
          </div>
          <div style="display:flex; gap: 8px;">
            <button class="action-pill sound-pill" onclick="app.setStoryLang('${isHi ? 'en' : 'hi'}'); app.renderStoryDetail(document.getElementById('app-root'));">
              🌐 ${isHi ? 'Switch to English' : 'हिंदी में बदलें'}
            </button>
            <button class="action-pill sound-pill" style="background:var(--primary-purple); color:white; border-color:var(--primary-purple);" onclick="app.toggleStoryAutoPlay()">
              ${this.isStoryAutoPlaying ? '⏸️ Pause Video' : '▶️ Play Full Video Story'}
            </button>
          </div>
        </div>

        <!-- Animated Story Video Player Container -->
        <div class="story-video-container">
          <div class="story-video-stage">
            <div class="story-video-animation">${currentScene.emoji}</div>
            <h3 class="story-scene-title ${isHi ? 'hindi-text' : ''}">${sceneTitle}</h3>
          </div>

          <div class="evs-controls-bar">
            <button class="evs-btn" onclick="app.changeStoryScene(${this.currentStorySceneIdx - 1})" ${this.currentStorySceneIdx === 0 ? 'disabled style="opacity:0.4;"' : ''}>
              ⏮️ Prev Scene
            </button>

            <!-- Play / Pause Center Button -->
            <button class="evs-btn" style="background:var(--primary-pink); color:white;" onclick="app.toggleStoryAutoPlay()">
              ${this.isStoryAutoPlaying ? '⏸️ Pause Story' : '▶️ Play Animated Story'}
            </button>

            <!-- Step Dots -->
            <div class="scene-step-bar">
              ${scenes.map((_, idx) => `
                <span class="scene-step-dot ${idx === this.currentStorySceneIdx ? 'active' : ''}" onclick="app.changeStoryScene(${idx})"></span>
              `).join('')}
            </div>

            <button class="evs-btn" onclick="app.changeStoryScene(${this.currentStorySceneIdx + 1})" ${this.currentStorySceneIdx === totalScenes - 1 ? 'disabled style="opacity:0.4;"' : ''}>
              Next Scene ⏭️
            </button>
          </div>
        </div>

        <!-- Written Text Box for Current Scene -->
        <div class="scene-written-text-box ${isHi ? 'hindi-text' : ''}">
          <p style="font-weight:700; color:var(--primary-purple); margin-bottom: 6px;">📖 Written Part (${this.currentStorySceneIdx + 1} of ${totalScenes}):</p>
          <p>${sceneText}</p>
        </div>

        <!-- Moral Callout Box -->
        <div class="story-moral-callout ${isHi ? 'hindi-text' : ''}" style="max-width: 800px; margin: 0 auto 36px; font-size: 1.3rem; text-align:center;">
          ${moral}
        </div>

        <!-- Sentiment Reaction Picker -->
        <div style="text-align:center; max-width: 600px; margin: 0 auto; background: #F7FAFC; border-radius: var(--border-radius-md); padding: 24px; border: 2px dashed #E2E8F0;">
          <h4 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 12px; color: #2D3748;">
            ${isHi ? 'यह कहानी आपको कैसी लगी?' : 'How did this story make you feel?'} 😊
          </h4>
          <div class="emoji-reaction-bar">
            <button class="emoji-btn" onclick="app.reactStory('😍', '${isHi ? 'प्रेरणादायक!' : 'Inspired!'}')" title="Inspired!">😍</button>
            <button class="emoji-btn" onclick="app.reactStory('😊', '${isHi ? 'खुशी!' : 'Happy!'}')" title="Happy!">😊</button>
            <button class="emoji-btn" onclick="app.reactStory('🤔', '${isHi ? 'विचारशील!' : 'Thoughtful!'}')" title="Thoughtful!">🤔</button>
            <button class="emoji-btn" onclick="app.reactStory('❤️', '${isHi ? 'प्यारा!' : 'Loving!'}')" title="Loving!">❤️</button>
          </div>
        </div>
      </div>
    `;
  }

  reactStory(emoji, text) {
    confettiEngine.fire(60);
    audioEngine.playFanfare();
    audioEngine.speak(`Thank you! You felt ${text}!`);
    mascotController.showTip(`You earned +5 Stars for completing this story! ${emoji}`);
    this.addStar(5);
  }

  /* --- Render Parents Guide --- */
  renderParentsGuide(container) {
    container.innerHTML = `
      <div class="lesson-container">
        <div class="lesson-header">
          <button class="back-btn" onclick="app.navigateTo('home')">⬅️ Back to Home</button>
          <div class="lesson-title-box">
            <h2 class="lesson-title">For Parents & Educators 👨‍👩‍👧‍👦</h2>
            <p class="lesson-subtitle">Curriculum Alignment & Kid Safety Standards</p>
          </div>
          <div></div>
        </div>

        <div style="max-width: 850px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8; color: #4A5568;">
          <h3 style="font-family: var(--font-heading); color: #2D3748; font-size: 1.6rem; margin-bottom: 10px;">
            🛡️ 100% Safe & Ad-Free Learning Environment
          </h3>
          <p style="margin-bottom: 24px;">
            Our portal is designed specifically for early childhood learning (Classes 1 through 5). The entire platform is completely ad-free, secure, and built with child-friendly tap targets and positive reinforcement.
          </p>

          <h3 style="font-family: var(--font-heading); color: #2D3748; font-size: 1.6rem; margin-bottom: 10px;">
            📚 Age-Appropriate Curriculum Structure
          </h3>
          <ul style="margin-bottom: 24px; padding-left: 24px;">
            <li><strong>Class 1:</strong> Phonetic ABCs, numbers 1-50, Hindi Varnmala (स्वर/व्यंजन), and body parts.</li>
            <li><strong>Class 2:</strong> Addition with visual counters, 2-letter Hindi words, plant parts, and family relations.</li>
            <li><strong>Class 3:</strong> Sentence formation, subtraction, times tables 1-12, and transportation.</li>
            <li><strong>Class 4:</strong> Multiplication & division, Hindi sentence building, water resources, and housing types.</li>
            <li><strong>Class 5:</strong> Fractions & decimals, times tables 1-20, animated water cycle, landforms, and hygiene.</li>
          </ul>

          <h3 style="font-family: var(--font-heading); color: #2D3748; font-size: 1.6rem; margin-bottom: 10px;">
            ⭐ Motivational Rewards & Speech Audio
          </h3>
          <p>
            Children earn stars upon completing stories, solving sentence puzzles, and practicing multiplication tables. Web Speech API narration ensures children can listen and follow along independently!
          </p>
        </div>
      </div>
    `;
  }
}

const app = new App();
