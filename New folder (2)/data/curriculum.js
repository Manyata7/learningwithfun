/* ----------------------------------------------------
   Curriculum Data - Classes 1 to 5 Content Specifications
   ---------------------------------------------------- */

const CURRICULUM_DATA = {
  classes: [
    {
      id: 1,
      nameEn: "Class 1",
      nameHi: "कक्षा 1",
      taglineEn: "Little Explorers",
      taglineHi: "नन्हे खोजकर्ता",
      color: "var(--class1-color)",
      badgeColor: "#FF5964",
      icon: "🌱",
      descriptionEn: "Alphabet phonics, numbers 1-50, Hindi Varnamala & basic EVS animal friends!",
      descriptionHi: "वर्णमाला, 1-50 तक गिनती, हिन्दी स्वर-व्यंजन व शरीर के अंग!"
    },
    {
      id: 2,
      nameEn: "Class 2",
      nameHi: "कक्षा 2",
      taglineEn: "Curious Learners",
      taglineHi: "जिज्ञासु शिक्षार्थी",
      color: "var(--class2-color)",
      badgeColor: "#35A7FF",
      icon: "🎨",
      descriptionEn: "Fun addition, 2-letter Hindi words, plant parts & family relations!",
      descriptionHi: "जोड़ का मज़ा, दो अक्षर के शब्द, पौधे के भाग व परिवार!"
    },
    {
      id: 3,
      nameEn: "Class 3",
      taglineEn: "Young Scholars",
      taglineHi: "बाल विद्वान",
      color: "var(--class3-color)",
      badgeColor: "#FFC107",
      icon: "🚀",
      descriptionEn: "Sentence formation, 1-100 subtraction, times tables & transportation!",
      descriptionHi: "वाक्य निर्माण, 1-100 घटाव, पहाड़े (1-12) व यातायात के साधन!"
    },
    {
      id: 4,
      nameEn: "Class 4",
      taglineEn: "Smart Champions",
      taglineHi: "स्मार्ट चैंपियंस",
      color: "var(--class4-color)",
      badgeColor: "#2E7D32",
      icon: "🌟",
      descriptionEn: "Multiplication, Hindi sentences, cooking methods & water resources!",
      descriptionHi: "गुणा व भाग, हिन्दी वाक्य रचना, जल संसाधन व आवास के प्रकार!"
    },
    {
      id: 5,
      nameEn: "Class 5",
      taglineEn: "Future Geniuses",
      taglineHi: "भावी प्रतिभाएँ",
      color: "var(--class5-color)",
      badgeColor: "#9C27B0",
      icon: "🎓",
      descriptionEn: "Fractions & decimals, advanced sentence creation, water cycle & landforms!",
      descriptionHi: "भिन्न व दशमलव, उन्नत वाक्य रचना, जल चक्र व भू-आकृतियाँ!"
    }
  ],

  // Subjects mapping per class
  classSubjects: {
    1: [
      { id: 'english', nameEn: 'English ABCs', nameHi: 'अंग्रेजी वर्णमाला', icon: '🔤', color: '#FF6B6B', topicCountEn: '26 Phonic Letters', topicCountHi: '26 अक्षर व ध्वनियाँ' },
      { id: 'maths', nameEn: 'Maths 1-50', nameHi: 'गणित 1-50', icon: '🔢', color: '#4EA8DE', topicCountEn: 'Visual Counting & Games', topicCountHi: 'गिनती व चित्र खेल' },
      { id: 'tables', nameEn: 'Times Tables', nameHi: 'पहाड़े', icon: '✖️', color: '#FF9F1C', topicCountEn: 'Tables 1 to 12', topicCountHi: 'पहाड़े 1 से 12' },
      { id: 'hindi', nameEn: 'Hindi Varnamala', nameHi: 'हिन्दी वर्णमाला', icon: '🇮🇳', color: '#06D6A0', topicCountEn: 'All Swar & Vyanjan', topicCountHi: 'स्वर, व्यंजन व संयुक्त' },
      { id: 'evs', nameEn: 'EVS Explainer', nameHi: 'पर्यावरण अध्ययन', icon: '🌍', color: '#9D4EDD', topicCountEn: 'Body Parts & Animals', topicCountHi: 'शरीर के अंग व पशु' }
    ],
    2: [
      { id: 'english', nameEn: 'English Fun', nameHi: 'अंग्रेजी शब्द', icon: '🔤', color: '#FF6B6B', topicCountEn: 'Phonics & Words', topicCountHi: 'ध्वनियाँ व शब्द' },
      { id: 'maths', nameEn: 'Maths Addition', nameHi: 'गणित जोड़', icon: '➕', color: '#4EA8DE', topicCountEn: 'Numbers 1-50 + Sums', topicCountHi: 'संख्याएँ व जोड़' },
      { id: 'tables', nameEn: 'Times Tables', nameHi: 'पहाड़े', icon: '✖️', color: '#FF9F1C', topicCountEn: 'Tables 1 to 12', topicCountHi: 'पहाड़े 1 से 12' },
      { id: 'hindi', nameEn: 'Hindi 2-Letter Words', nameHi: 'दो अक्षर के शब्द', icon: '🇮🇳', color: '#06D6A0', topicCountEn: '2-Letter Words', topicCountHi: 'न+ल = नल, घ+र = घर' },
      { id: 'evs', nameEn: 'EVS Explainer', nameHi: 'पर्यावरण अध्ययन', icon: '🌱', color: '#9D4EDD', topicCountEn: 'Plant Parts & Family', topicCountHi: 'पौधे के भाग व परिवार' }
    ],
    3: [
      { id: 'english', nameEn: 'Sentence Builder', nameHi: 'वाक्य रचना', icon: '📝', color: '#FF6B6B', topicCountEn: 'Sentence Formation', topicCountHi: 'वाक्य बनाना' },
      { id: 'maths', nameEn: 'Maths Subtraction', nameHi: 'गणित घटाव', icon: '➖', color: '#4EA8DE', topicCountEn: 'Counting 1-100 & Minus', topicCountHi: '1-100 गिनती व घटाव' },
      { id: 'tables', nameEn: 'Times Tables', nameHi: 'पहाड़े', icon: '✖️', color: '#FF9F1C', topicCountEn: 'Tables 1 to 12', topicCountHi: 'पहाड़े 1 से 12' },
      { id: 'hindi', nameEn: 'Hindi Reading', nameHi: 'हिन्दी पठन', icon: '🇮🇳', color: '#06D6A0', topicCountEn: 'Words & Sentences', topicCountHi: 'शब्द व वाक्य' },
      { id: 'evs', nameEn: 'EVS Explainer', nameHi: 'पर्यावरण अध्ययन', icon: '🚗', color: '#9D4EDD', topicCountEn: 'Food & Transport', topicCountHi: 'भोजन व यातायात' }
    ],
    4: [
      { id: 'english', nameEn: 'Sentence Builder', nameHi: 'वाक्य रचना', icon: '✍️', color: '#FF6B6B', topicCountEn: 'Intermediate Sentences', topicCountHi: 'मध्यम वाक्य' },
      { id: 'maths', nameEn: 'Mult & Division', nameHi: 'गुणा व भाग', icon: '✖️', color: '#4EA8DE', topicCountEn: 'Grids & Sharing Games', topicCountHi: 'गुणा व भाग खेल' },
      { id: 'tables', nameEn: 'Times Tables', nameHi: 'पहाड़े', icon: '🔢', color: '#FF9F1C', topicCountEn: 'Tables 1 to 20', topicCountHi: 'पहाड़े 1 से 20' },
      { id: 'hindi', nameEn: 'Hindi Sentence', nameHi: 'वाक्य बनाना', icon: '🇮🇳', color: '#06D6A0', topicCountEn: 'Sentence Making', topicCountHi: 'वाक्य निर्माण' },
      { id: 'evs', nameEn: 'EVS Explainer', nameHi: 'पर्यावरण अध्ययन', icon: '🏠', color: '#9D4EDD', topicCountEn: 'Water & Houses', topicCountHi: 'जल व आवास' }
    ],
    5: [
      { id: 'english', nameEn: 'Advanced Sentences', nameHi: 'उन्नत वाक्य', icon: '📚', color: '#FF6B6B', topicCountEn: 'Complex Builders', topicCountHi: 'जटिल वाक्य' },
      { id: 'maths', nameEn: 'Fractions & Decimals', nameHi: 'भिन्न व दशमलव', icon: '🍕', color: '#4EA8DE', topicCountEn: 'Pie Slicers & Decimals', topicCountHi: 'पिज़्ज़ा भिन्न व दशमलव' },
      { id: 'tables', nameEn: 'Times Tables', nameHi: 'पहाड़े', icon: '⚡', color: '#FF9F1C', topicCountEn: 'Tables 1 to 20', topicCountHi: 'पहाड़े 1 से 20' },
      { id: 'hindi', nameEn: 'Hindi Master', nameHi: 'हिन्दी मास्टर', icon: '🇮🇳', color: '#06D6A0', topicCountEn: 'Grammar & Sentences', topicCountHi: 'व्याकरण व वाक्य' },
      { id: 'evs', nameEn: 'EVS Explainer', nameHi: 'पर्यावरण अध्ययन', icon: '🌊', color: '#9D4EDD', topicCountEn: 'Water Cycle & Landforms', topicCountHi: 'जल चक्र व भू-आकृतियाँ' }
    ]
  },

  // English Phonics Alphabet for Class 1
  alphabet: [
    { letter: 'A', word: 'Apple', emoji: '🍎', sound: 'A is for Apple, crisp and red!' },
    { letter: 'B', word: 'Bear', emoji: '🐻', sound: 'B is for Bear, fluffy and big!' },
    { letter: 'C', word: 'Cat', emoji: '🐱', sound: 'C is for Cat, saying meow meow!' },
    { letter: 'D', word: 'Dog', emoji: '🐶', sound: 'D is for Dog, wagging its tail!' },
    { letter: 'E', word: 'Elephant', emoji: '🐘', sound: 'E is for Elephant, with a long trunk!' },
    { letter: 'F', word: 'Fish', emoji: '🐟', sound: 'F is for Fish, swimming in water!' },
    { letter: 'G', word: 'Giraffe', emoji: '🦒', sound: 'G is for Giraffe, tall up high!' },
    { letter: 'H', word: 'House', emoji: '🏠', sound: 'H is for House, warm and sweet!' },
    { letter: 'I', word: 'Ice Cream', emoji: '🍦', sound: 'I is for Ice Cream, yummy and cool!' },
    { letter: 'J', word: 'Juice', emoji: '🧃', sound: 'J is for Juice, fruity and fresh!' },
    { letter: 'K', word: 'Kite', emoji: '🪁', sound: 'K is for Kite, flying in the sky!' },
    { letter: 'L', word: 'Lion', emoji: '🦁', sound: 'L is for Lion, king of the jungle!' },
    { letter: 'M', word: 'Monkey', emoji: '🐒', sound: 'M is for Monkey, swinging on trees!' },
    { letter: 'N', word: 'Nest', emoji: '🪹', sound: 'N is for Nest, home for little birds!' },
    { letter: 'O', word: 'Owl', emoji: '🦉', sound: 'O is for Owl, wise and kind!' },
    { letter: 'P', word: 'Pencil', emoji: '✏️', sound: 'P is for Pencil, drawing happy art!' },
    { letter: 'Q', word: 'Queen', emoji: '👑', sound: 'Q is for Queen, wearing a sparkly crown!' },
    { letter: 'R', word: 'Rainbow', emoji: '🌈', sound: 'R is for Rainbow, colorful and bright!' },
    { letter: 'S', word: 'Sun', emoji: '☀️', sound: 'S is for Sun, shining with joy!' },
    { letter: 'T', word: 'Tree', emoji: '🌳', sound: 'T is for Tree, with green fluttering leaves!' },
    { letter: 'U', word: 'Umbrella', emoji: '☂️', sound: 'U is for Umbrella, keeping rain away!' },
    { letter: 'V', word: 'Violin', emoji: '🎻', sound: 'V is for Violin, playing sweet music!' },
    { letter: 'W', word: 'Whale', emoji: '🐋', sound: 'W is for Whale, splashing in the ocean!' },
    { letter: 'X', word: 'Xylophone', emoji: '🎼', sound: 'X is for Xylophone, ding ding dong!' },
    { letter: 'Y', word: 'Yacht', emoji: '⛵', sound: 'Y is for Yacht, sailing on waves!' },
    { letter: 'Z', word: 'Zebra', emoji: '🦓', sound: 'Z is for Zebra, with cool black & white stripes!' }
  ],

  // Sentence Formation Exercises (Class 3, 4, 5)
  sentenceExercises: {
    3: [
      { jumbled: ['The', 'cat', 'sat', 'on', 'the', 'mat'], correct: 'The cat sat on the mat', hint: 'Where did the cat sit?' },
      { jumbled: ['I', 'love', 'to', 'read', 'books'], correct: 'I love to read books', hint: 'What do you love to do?' },
      { jumbled: ['Sun', 'shines', 'bright', 'in', 'sky'], correct: 'Sun shines bright in sky', hint: 'What does the sun do?' }
    ],
    4: [
      { jumbled: ['Trees', 'give', 'us', 'clean', 'air', 'and', 'shade'], correct: 'Trees give us clean air and shade', hint: 'What do trees provide?' },
      { jumbled: ['Birds', 'build', 'nests', 'on', 'high', 'branches'], correct: 'Birds build nests on high branches', hint: 'Where do birds make homes?' },
      { jumbled: ['We', 'should', 'eat', 'fresh', 'fruits', 'daily'], correct: 'We should eat fresh fruits daily', hint: 'What healthy habit is this?' }
    ],
    5: [
      { jumbled: ['Water', 'evaporates', 'to', 'form', 'fluffy', 'white', 'clouds'], correct: 'Water evaporates to form fluffy white clouds', hint: 'How are clouds formed?' },
      { jumbled: ['Honesty', 'is', 'the', 'most', 'valuable', 'human', 'virtue'], correct: 'Honesty is the most valuable human virtue', hint: 'What moral value is great?' },
      { jumbled: ['Solar', 'energy', 'comes', 'directly', 'from', 'the', 'sun'], correct: 'Solar energy comes directly from the sun', hint: 'Where does solar energy originate?' }
    ]
  },

  // Complete Hindi Varnamala (स्वर, व्यंजन व संयुक्त व्यंजन)
  hindiVarnmala: {
    swar: [
      { char: 'अ', word: 'अनार', emoji: '🍎', english: 'Anar (Pomegranate)' },
      { char: 'आ', word: 'आम', emoji: '🥭', english: 'Aam (Mango)' },
      { char: 'इ', word: 'इमली', emoji: '🟤', english: 'Imli (Tamarind)' },
      { char: 'ई', word: 'ईख', emoji: '🌾', english: 'Eekh (Sugarcane)' },
      { char: 'उ', word: 'उल्लू', emoji: '🦉', english: 'Ullu (Owl)' },
      { char: 'ऊ', word: 'ऊन', emoji: '🧶', english: 'Oon (Wool)' },
      { char: 'ऋ', word: 'ऋषि', emoji: '🧘', english: 'Rishi (Sage)' },
      { char: 'ए', word: 'एड़ी', emoji: '🦶', english: 'Eedi (Heel)' },
      { char: 'ऐ', word: 'ऐनक', emoji: '👓', english: 'Ainak (Spectacles)' },
      { char: 'ओ', word: 'ओखली', emoji: '🥣', english: 'Okhli (Mortar)' },
      { char: 'औ', word: 'औरत', emoji: '👩', english: 'Aurat (Woman)' },
      { char: 'अं', word: 'अंगूर', emoji: '🍇', english: 'Angoor (Grapes)' },
      { char: 'अः', word: 'प्रातः', emoji: '🌅', english: 'Praataḥ (Morning)' }
    ],
    vyanjan: [
      // क वर्ग
      { char: 'क', word: 'कमल', emoji: '🪷', english: 'Kamal (Lotus)' },
      { char: 'ख', word: 'खरगोश', emoji: '🐰', english: 'Khargosh (Rabbit)' },
      { char: 'ग', word: 'गमला', emoji: '🪴', english: 'Gamla (Flowerpot)' },
      { char: 'घ', word: 'घर', emoji: '🏠', english: 'Ghar (House)' },
      { char: 'ङ', word: 'खाली', emoji: '⚪', english: 'Khali (Empty)' },
      // च वर्ग
      { char: 'च', word: 'चम्मच', emoji: '🥄', english: 'Chamach (Spoon)' },
      { char: 'छ', word: 'छतरी', emoji: '☂️', english: 'Chhatri (Umbrella)' },
      { char: 'ज', word: 'जग', emoji: '🥛', english: 'Jag (Jug)' },
      { char: 'झ', word: 'झंडा', emoji: '🚩', english: 'Jhanda (Flag)' },
      { char: 'ञ', word: 'खाली', emoji: '⚪', english: 'Khali (Empty)' },
      // ट वर्ग
      { char: 'ट', word: 'टमाटर', emoji: '🍅', english: 'Tamatar (Tomato)' },
      { char: 'ठ', word: 'ठठेरा', emoji: '🔨', english: 'Thathera (Tinker)' },
      { char: 'ड', word: 'डमरू', emoji: '🪘', english: 'Damru (Drum)' },
      { char: 'ढ', word: 'ढक्कन', emoji: '🪅', english: 'Dhakkan (Lid)' },
      { char: 'ण', word: 'बाण', emoji: '🏹', english: 'Baan (Arrow)' },
      // त वर्ग
      { char: 'त', word: 'तरबूज', emoji: '🍉', english: 'Tarbooz (Watermelon)' },
      { char: 'थ', word: 'थर्मस', emoji: '🧪', english: 'Thermos (Flask)' },
      { char: 'द', word: 'दवात', emoji: '🖋️', english: 'Dawaat (Inkpot)' },
      { char: 'ध', word: 'धनुष', emoji: '🏹', english: 'Dhanush (Bow)' },
      { char: 'न', word: 'नल', emoji: '🚰', english: 'Nal (Water Tap)' },
      // प वर्ग
      { char: 'प', word: 'पतंग', emoji: '🪁', english: 'Patang (Kite)' },
      { char: 'फ', word: 'फल', emoji: '🍎', english: 'Fal (Fruit)' },
      { char: 'ब', word: 'बत्तख', emoji: '🦆', english: 'Battakh (Duck)' },
      { char: 'भ', word: 'भालू', emoji: '🐻', english: 'Bhalu (Bear)' },
      { char: 'म', word: 'मछली', emoji: '🐟', english: 'Machhli (Fish)' },
      // अंतस्थ
      { char: 'य', word: 'यज्ञ', emoji: '🧘', english: 'Yagya (Sacred Fire)' },
      { char: 'र', word: 'रथ', emoji: '🛞', english: 'Rath (Chariot)' },
      { char: 'ल', word: 'लट्टू', emoji: '🪀', english: 'Lattu (Spinning Top)' },
      { char: 'व', word: 'वक', emoji: '🦢', english: 'Vak (Crane)' },
      // ऊष्म
      { char: 'श', word: 'शलजम', emoji: '🫛', english: 'Shaljam (Turnip)' },
      { char: 'ष', word: 'षट्कोण', emoji: '🔷', english: 'Shatkon (Hexagon)' },
      { char: 'स', word: 'सेब', emoji: '🍎', english: 'Seb (Apple)' },
      { char: 'ह', word: 'हाथी', emoji: '🐘', english: 'Hathi (Elephant)' },
      // संयुक्त व्यंजन
      { char: 'क्ष', word: 'क्षत्रिय', emoji: '⚔️', english: 'Kshatriya (Warrior)' },
      { char: 'त्र', word: 'त्रिशूल', emoji: '🔱', english: 'Trishul (Trident)' },
      { char: 'ज्ञ', word: 'ज्ञानी', emoji: '🧠', english: 'Gyani (Scholar)' },
      { char: 'श्र', word: 'श्रमिक', emoji: '👷', english: 'Shramik (Worker)' }
    ]
  },

  hindiTwoLetterWords: [
    { parts: ['न', 'ल'], word: 'नल', emoji: '🚰', meaning: 'Water Tap' },
    { parts: ['घ', 'र'], word: 'घर', emoji: '🏠', meaning: 'House' },
    { parts: ['क', 'प'], word: 'कप', emoji: '☕', meaning: 'Cup' },
    { parts: ['ज', 'ल'], word: 'जल', emoji: '💧', meaning: 'Water' },
    { parts: ['फ', 'ल'], word: 'फल', emoji: '🍎', meaning: 'Fruit' },
    { parts: ['ब', 'स'], word: 'बस', emoji: '🚌', meaning: 'Bus' }
  ],

  hindiClass4Sentences: [
    { words: ['राम', 'घर', 'चल'], sentence: 'राम घर चल।', meaning: 'Ram, walk home.' },
    { words: ['सब', 'फल', 'चख'], sentence: 'सब फल चख।', meaning: 'Taste all fruits.' },
    { words: ['अचकन', 'पहिन', 'कर', 'चल'], sentence: 'अचकन पहिन कर चल।', meaning: 'Wear coat and go.' }
  ],

  // EVS Animated Explainer Topics per Class
  evsTopics: {
    1: [
      {
        id: 'body_parts',
        title: 'My Wonderful Body Parts',
        icon: '🧒',
        description: 'Learn about eyes, ears, hands, and feet!',
        scenes: [
          { emoji: '👁️', title: 'Our Eyes See', text: 'Eyes help us see bright colors, sunny skies, and big picture books!' },
          { emoji: '👂', title: 'Our Ears Hear', text: 'Ears help us listen to happy music, bird chirps, and teacher stories.' },
          { emoji: '🖐️', title: 'Our Hands Touch', text: 'Hands allow us to clap, write with pencils, and hold warm hands.' },
          { emoji: '🦶', title: 'Our Feet Walk', text: 'Feet help us run, jump on grass, and dance with joy!' }
        ]
      },
      {
        id: 'animals',
        title: 'Types of Animals',
        icon: '🐶',
        description: 'Domestic animals, wild animals, and water friends.',
        scenes: [
          { emoji: '🐕', title: 'Pet Animals', text: 'Dogs and cats live near us and are friendly companion pets.' },
          { emoji: '🦁', title: 'Wild Animals', text: 'Lions and elephants live freely in vast green forests.' },
          { emoji: '🐬', title: 'Water Animals', text: 'Fishes and dolphins swim gracefully in deep blue oceans.' }
        ]
      }
    ],
    2: [
      {
        id: 'plant_parts',
        title: 'Parts of a Green Plant',
        icon: '🪴',
        description: 'Explore Roots, Stem, Leaves, and Flowers!',
        scenes: [
          { emoji: '🌱', title: 'The Roots', text: 'Roots grow underground and sip water from the soil.' },
          { emoji: '🪴', title: 'The Stem', text: 'The stem stands tall like a trunk to hold up leaves and branches.' },
          { emoji: '🍃', title: 'The Green Leaves', text: 'Leaves use sunshine to cook delicious plant food!' },
          { emoji: '🌸', title: 'Bright Flowers', text: 'Flowers bloom with pretty petals and turn into sweet fruits.' }
        ]
      },
      {
        id: 'family',
        title: 'Family & Relations',
        icon: '👨‍👩‍👧‍👦',
        description: 'Parents, Grandparents, Sibling care & love.',
        scenes: [
          { emoji: '🏡', title: 'Loving Home', text: 'A family is made of people who love and care for each other.' },
          { emoji: '👵👴', title: 'Grandparents', text: 'Grandpa and Grandma tell comforting stories and share wisdom.' },
          { emoji: '👧👦', title: 'Siblings & Friends', text: 'Brothers and sisters share toys, play games, and grow together.' }
        ]
      }
    ],
    3: [
      {
        id: 'transport',
        title: 'Types of Transportation',
        icon: '🚀',
        description: 'Land, Water, and Air vehicles.',
        scenes: [
          { emoji: '🚌', title: 'Land Transport', text: 'Buses, cars, and trains move on roads and steel rails.' },
          { emoji: '🚢', title: 'Water Transport', text: 'Ships and boats float across rivers and oceans.' },
          { emoji: '✈️', title: 'Air Transport', text: 'Aeroplanes and helicopters zoom fast across high clouds!' }
        ]
      },
      {
        id: 'food_types',
        title: 'Healthy Food Choices',
        icon: '🥗',
        description: 'Energy-giving, body-building, and protective foods.',
        scenes: [
          { emoji: '🍚', title: 'Energy Foods', text: 'Rice, bread, and potatoes give us energy to play and study.' },
          { emoji: '🥛', title: 'Body Building Foods', text: 'Milk, cheese, and pulses build strong muscles and bones.' },
          { emoji: '🍎', title: 'Protective Foods', text: 'Fresh fruits and green veggies protect us from falling sick!' }
        ]
      }
    ],
    4: [
      {
        id: 'water_resources',
        title: 'Water Resources & Conservation',
        icon: '💧',
        description: 'Rain, Rivers, Lakes, and saving every drop!',
        scenes: [
          { emoji: '🌧️', title: 'Rain Water', text: 'Rain is the main fresh water source filling rivers and lakes.' },
          { emoji: '🌊', title: 'Rivers & Dams', text: 'Rivers flow down mountains to supply water to towns and farms.' },
          { emoji: '🚰', title: 'Save Every Drop', text: 'Never leave taps running — clean water is precious life!' }
        ]
      },
      {
        id: 'houses',
        title: 'Types of Cooking & Houses',
        icon: '🛖',
        description: 'Kutcha houses, Pucca houses, and healthy cooking.',
        scenes: [
          { emoji: '🛖', title: 'Kutcha Houses', text: 'Built with mud, straw, and bamboo — cool in hot summers!' },
          { emoji: '🏢', title: 'Pucca Houses', text: 'Built with strong bricks, cement, and steel for durability.' },
          { emoji: '🍲', title: 'Cooking Methods', text: 'Boiling, baking, and steaming keep nutrients healthy!' }
        ]
      }
    ],
    5: [
      {
        id: 'water_cycle',
        title: 'The Amazing Water Cycle',
        icon: '🌊',
        description: 'Evaporation, Condensation, and Precipitation!',
        scenes: [
          { emoji: '☀️🌊', title: '1. Evaporation', text: 'Hot sunshine turns ocean water into invisible water vapor rising up.' },
          { emoji: '☁️', title: '2. Condensation', text: 'Vapor cools high up in the sky and gathers into fluffy clouds.' },
          { emoji: '🌧️', title: '3. Precipitation', text: 'Clouds get heavy with droplets and rain falls down to earth!' },
          { emoji: '🏞️', title: '4. Collection', text: 'Rainwater rivers flow back into the ocean, completing the cycle!' }
        ]
      },
      {
        id: 'landforms',
        title: 'Earth Landforms & Health',
        icon: '🏔️',
        description: 'Mountains, Valleys, Plains, and Clean Environment.',
        scenes: [
          { emoji: '🏔️', title: 'Mountains & Valleys', text: 'High rocky peaks and low green valleys create beautiful landscapes.' },
          { emoji: '🌾', title: 'Flat Plains', text: 'Broad flat plains are rich in fertile soil for growing crops.' },
          { emoji: '🌳', title: 'Clean Environment', text: 'Planting green trees keeps our air fresh and earth happy!' }
        ]
      }
    ]
  }
};
