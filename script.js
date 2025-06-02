const questions = [
    {
        questionText: 'Hvilken av disse overskriftene om teknologi er mest sannsynlig falsk?',
        options: [
            { text: "Ny app lar deg oversette bjeffing fra hunder til menneskespråk!", isCorrect: true, isFake: true },
            { text: "Lokalt IT-firma lanserer ny programvare for skoler.", isCorrect: false, isFake: false },
            { text: "Smarttelefoner får lengre batterilevetid med ny oppdatering.", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Helt riktig! En app som oversetter bjeffing er nok litt for godt til å være sant, og typisk for en fabrikkert nyhet.",
        feedbackIncorrect: "Ikke helt. Se etter påstander som virker teknologisk usannsynlige eller for fantastiske.",
        tipCategoryKey: 0
    },
    {
        questionText: "Her er tre bilder av kjente politikere som spiser is. Hvilket bilde virker mest sannsynlig manipulert?",
        options: [
            {  isCorrect: false, isFake: false, type: "image", src:"images/politician_normal_icecream.jpg" },
            {  isCorrect: true, isFake: true, type: "image", src:"images/politician_fake_giant_icecream.jpg" },
            { isCorrect: false, isFake: false, type: "image", src:"images/hot_day_background.jpg"} // BYTT UT: Generisk sommerbilde
        ],
        feedbackCorrect: "Korrekt! Isen virker urealistisk stor, politikeren ser litt glatt ut og lysforholdene er merkelige. Dette kan tyde på bildmanipulering.",
        feedbackIncorrect: "Se nøyere etter detaljer. Er det noe i bildet som virker unaturlig eller overdrevet?",
        tipCategoryKey: 2
    },
    {
        questionText: "En e-post hevder du har vunnet en stor lottogevinst du ikke husker å ha spilt på, og ber deg klikke en link for å hente premien. Hva er dette sannsynligvis?",
        options: [
            { text: "En hyggelig overraskelse!", isCorrect: false, isFake: false },
            { text: "Et forsøk på 'phishing' (nettfiske) for å lure fra deg informasjon.", isCorrect: true, isFake: true },
            { text: "En feilsendt e-post til feil person.", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Korrekt! Uventede meldinger om store gevinster er ofte svindelforsøk. Vær forsiktig med linker i slike e-poster.",
        feedbackIncorrect: "Vær skeptisk! Hvis noe virker for godt til å være sant, er det ofte det. Svindlere bruker ofte slike metoder.",
        tipCategoryKey: 0
    },
    {
        questionText: 'Hvilken av disse "vitenskapelige" påstandene på en blogg virker minst troverdig?',
        options: [
            { text: "Forskere har funnet en ny type sommerfugl i regnskogen.", isCorrect: false, isFake: false },
            { text: "Å drikke et glass vann med sitron hver morgen kurerer alle sykdommer.", isCorrect: true, isFake: true },
            { text: "Studier viser at regelmessig mosjon er bra for helsen.", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Helt riktig! Påstander om enkle kurer for alle sykdommer er nesten alltid falske og udokumenterte.",
        feedbackIncorrect: "Se etter overdrevne påstander som lover mirakelkurer eller enkle løsninger på komplekse problemer.",
        tipCategoryKey: 1
    },
    {
        questionText: "Identifiser det manipulerte bildet.",
        options: [
            {  isCorrect: false, isFake: false, type: "image", src:"images/real_image_A.jpg" },
            {  isCorrect: false, isFake: false, type: "image", src:"images/real_image_B.jpg" },
            {  isCorrect: true, isFake: true, type: "image", src:"images/fake_image_C.jpg" }
        ],
        feedbackCorrect: 'Godt observert! Det er faktisk en litt dårlig laget Tralalero Tralala!',
        feedbackIncorrect: "Ikke helt. Hvis du ser nøye etter, så vil du oppdage at en hai har på seg joggesko, som er typisk for Tralalero Tralala",
        tipCategoryKey: 2
    },
    {
        questionText: 'Hvilken av disse overskriftene virker mest som "clickbait" eller en fabrikkert nyhet?',
        options: [
            { text: "Lokal baker vant pris for byens beste kanelbolle", isCorrect: false, isFake: false },
            { text: "SJOKK: Forskere bekrefter at katter planlegger verdensherredømme!", isCorrect: true, isFake: true },
            { text: "Nytt turområde åpnet med offisiell snorklipping", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Helt riktig! Overskriften om kattene er overdrevet og usannsynlig, typisk for falske nyheter som vil ha klikk.",
        feedbackIncorrect: "Ikke helt. Se etter overskrifter som er for utrolige til å være sanne eller bruker veldig sterke, emosjonelle ord.",
        tipCategoryKey: 0
    },
    {
        questionText: "Hvilken av disse korte tekstene virker mest som den er skrevet av en KI (Kunstig Intelligens)?",
        options: [
            { text: "Jeg var på kino i går og så den nye superheltfilmen. Den var kjempekul, masse action!", isCorrect: false, isFake: false },
            { text: "Den observerte cinematografiske fremstillingen demonstrerte adekvat narrativ koherens og visuell appell, og oppfylte sjangerkonvensjonene.", isCorrect: true, isFake: true },
            { text: "Uff, jeg forsov meg i dag og rakk ikke bussen. Typisk mandag!", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Stemmer! Den andre teksten bruker et veldig formelt og litt stivt språk, noe som kan være et tegn på KI-generert innhold.",
        feedbackIncorrect: "Ikke helt. KI-tekster kan noen ganger mangle en naturlig, menneskelig 'stemme' og virke unødvendig kompliserte eller generiske.",
        tipCategoryKey: 3
    },
    {
        questionText: "En nettside publiserer en artikkel med tittelen: 'Ny studie: Å spise sjokolade hver dag gjør deg smartere!' Hva bør du sjekke først?",
        options: [
            { text: "Løpe til butikken for å kjøpe sjokolade.", isCorrect: false, isFake: false },
            { text: "Dele artikkelen med alle vennene dine umiddelbart.", isCorrect: false, isFake: false },
            { text: "Undersøke hvem som står bak studien og nettsiden, og om andre seriøse kilder melder det samme.", isCorrect: true, isFake: true }
        ],
        feedbackCorrect: "Helt riktig! Det er viktig å sjekke kilden og se om andre troverdige medier rapporterer det samme før du stoler på slike påstander.",
        feedbackIncorrect: "Vent litt! Før du endrer kostholdet eller deler, er det lurt å være kritisk. Sjekk alltid kilden og se etter bekreftelse fra andre steder.",
        tipCategoryKey: 0
    },
    {
        questionText: "Du ser en video på sosiale medier hvor en kjent politiker sier noe helt sjokkerende som du aldri har hørt før. Hva kan være et tegn på at videoen er en 'deepfake'?",
        options: [
            { text: "Politikeren ser litt anspent ut.", isCorrect: false, isFake: false },
            { text: "Munnbevegelsene stemmer ikke helt med lyden, eller ansiktet ser litt 'pålimt' ut.", isCorrect: true, isFake: true },
            { text: "Videoen er delt av mange mennesker.", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Bra observert! Unaturlige munnbevegelser, dårlig synkronisering mellom lyd og bilde, eller et ansikt som ser rart ut kan være tegn på en deepfake.",
        feedbackIncorrect: "Ikke nødvendigvis. At en video er mye delt eller at personen ser anspent ut, er ikke i seg selv klare tegn på deepfake. Se etter unaturlige detaljer i ansiktet og bevegelsene.",
        tipCategoryKey: 2
    },
    {
        questionText: "En artikkel hevder: '9 av 10 tannleger anbefaler DENNE nye tannkremen!' Hva er viktig å tenke på her?",
        options: [
            { text: "At tannkremen må være utrolig bra.", isCorrect: false, isFake: false },
            { text: "Hvor mange tannleger ble spurt? Hvem utførte undersøkelsen? Er det reklame?", isCorrect: true, isFake: true },
            { text: "At du bør bytte tannkrem med en gang.", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Smart tenkt! Slike påstander kan være misvisende. Det er viktig å vite mer om undersøkelsen, hvem som står bak, og om det er en objektiv kilde.",
        feedbackIncorrect: "Vær forsiktig med å stole blindt på tall. Spør deg selv hvem som presenterer informasjonen og hvorfor. Er det for å selge deg noe?",
        tipCategoryKey: 1
    }
    // Add more questions here
];

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

let currentQuestionIndex = 0;
let score = 0; // Initialize score
const questionArea = document.getElementById('question-area');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const feedbackArea = document.getElementById('feedback-area');
const nextButton = document.getElementById('next-question');
const playAgainBtn = document.getElementById('play-again-btn'); // Get the play again button

// Audio elements for feedback
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const startQuizSound = document.getElementById('start-quiz-sound'); // NY
const celebrateSound = document.getElementById('celebrate-sound'); // NY
const popSound = document.getElementById('pop-sound'); // NY: Pop sound for UI interactions

// Set default volume for sounds (0.0 to 1.0)
if (correctSound) correctSound.volume = 0.7;
if (wrongSound) wrongSound.volume = 0.7;
if (startQuizSound) startQuizSound.volume = 0.7; // NY: Sett volum
if (celebrateSound) celebrateSound.volume = 0.7; // NY: Sett volum
if (popSound) popSound.volume = 0.5; // NY: Sett volum for pop-lyd (litt lavere kanskje)

// Karusell-elementer for tips
const carouselSlides = document.querySelectorAll('#tips-modal .carousel-slide');
const prevSlideButton = document.querySelector('#tips-modal .carousel-prev');
const nextSlideButton = document.querySelector('#tips-modal .carousel-next');
let currentTipSlideIndex = 0;

// Nye elementer for introduksjonsskjerm
const introScreen = document.getElementById('intro-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.querySelector('.quiz-container');

// Definitions for the tips modal elements
const tipsModal = document.getElementById('tips-modal');
const showTipsButtons = document.querySelectorAll('.js-show-tips');
const closeBtn = document.querySelector('#tips-modal .close-btn'); // Targets the close button specifically within the tips modal

function loadQuestion(questionIndex) {
    const questionData = questions[questionIndex];
    questionArea.textContent = questionData.questionText;

    // Shuffle options to make it less predictable
    const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);

    const optionElements = [option1, option2, option3];
    optionElements.forEach((el, index) => {
        el.innerHTML = ''; // Clear previous content
        el.classList.remove('correct', 'incorrect', 'disabled');
        el.style.pointerEvents = 'auto'; // Re-enable clicks
        const optionData = shuffledOptions[index];
        el.dataset.isCorrect = optionData.isCorrect; // Store correctness in a data attribute

        if (optionData.type === "image") {
            const img = document.createElement('img');
            img.src = optionData.src; // Make sure you have these images in your project folder
            img.alt = optionData.text;
            img.style.maxWidth = '100%'; // Basic styling for images
            img.style.maxHeight = '150px';
            el.appendChild(img);
            const p = document.createElement('p');
            p.textContent = optionData.text;
            el.appendChild(p);
        } else {
            el.textContent = optionData.text;
        }
    });

    feedbackArea.textContent = '';
    nextButton.style.display = 'none';
}

function checkAnswer(selectedOptionElement) {
    const isCorrect = selectedOptionElement.dataset.isCorrect === 'true';
    const questionData = questions[currentQuestionIndex];
    const optionElements = [option1, option2, option3];

    optionElements.forEach(el => {
        el.style.pointerEvents = 'none'; // Disable further clicks on options
        el.classList.add('disabled');
        if (el.dataset.isCorrect === 'true') {
            el.classList.add('correct'); // Highlight the correct answer
        }
    });

    if (isCorrect) {
        selectedOptionElement.classList.add('correct');
        feedbackArea.textContent = questionData.feedbackCorrect;
        feedbackArea.style.color = 'green';
        score++; // Increment score
        if (correctSound) {
            correctSound.currentTime = 0; // Rewind to start
            correctSound.play();
        }
    } else {
        selectedOptionElement.classList.add('incorrect');
        feedbackArea.textContent = questionData.feedbackIncorrect;
        feedbackArea.style.color = 'red';
        if (wrongSound) {
            wrongSound.currentTime = 0; // Rewind to start
            wrongSound.play();
        }
    }
    nextButton.style.display = 'inline-block'; // Changed from 'block' to 'inline-block' for consistency
}

function loadNextQuestion() {
    currentQuestionIndex++;
    feedbackArea.classList.remove('quiz-finished-feedback'); // Remove animation class if present
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        questionArea.textContent = "Quizen er ferdig!";
        document.querySelector('.options-container').style.display = 'none';
        feedbackArea.innerHTML = `Du fikk ${score} av ${questions.length} riktige! <i class="ph-duotone ph-confetti" style="font-size:1.2em;"></i>`;
        feedbackArea.classList.add('quiz-finished-feedback'); // Add class for animation
        feedbackArea.style.color = '#28a745'; // Set final score color
        nextButton.style.display = 'none';
        playAgainBtn.style.display = 'inline-flex'; // Show play again button
        if (celebrateSound) { // NY: Spill av lyd for feiring
            celebrateSound.currentTime = 0;
            celebrateSound.play();
        }
    }
}

// Event Listener for å starte quizen (NY)
startQuizBtn.onclick = function() {
    if (startQuizSound) { // NY: Spill av start-lyd
        startQuizSound.currentTime = 0;
        startQuizSound.play();
    }
    introScreen.style.display = "none";
    quizContainer.style.display = "block";
    score = 0; // Reset score when starting
    currentQuestionIndex = 0; // Reset index
    shuffleArray(questions);
    if (questions.length > 0) {
        loadQuestion(currentQuestionIndex);
    } else {
        questionArea.textContent = "Ingen spørsmål lastet inn.";
        document.querySelector('.options-container').style.display = 'none';
        nextButton.style.display = 'none';
    }
    playAgainBtn.style.display = 'none'; // Ensure play again is hidden
    feedbackArea.classList.remove('quiz-finished-feedback'); // Ensure animation class is removed
    feedbackArea.style.color = 'initial'; // Reset feedback color
}

playAgainBtn.onclick = function() {
    if (startQuizSound) { // NY: Spill av start-lyd også ved "Spill Igjen"
        startQuizSound.currentTime = 0;
        startQuizSound.play();
    }
    score = 0;
    currentQuestionIndex = 0;
    shuffleArray(questions);
    document.querySelector('.options-container').style.display = 'flex'; // Or your original display type
    feedbackArea.textContent = '';
    feedbackArea.style.color = 'initial'; // Reset feedback color
    feedbackArea.classList.remove('quiz-finished-feedback');
    playAgainBtn.style.display = 'none';
    nextButton.style.display = 'none';
    loadQuestion(currentQuestionIndex);
};

// Funksjon for å vise riktig karusell-slide
function showTipSlide(index) {
    if (carouselSlides.length === 0) return; // Ikke gjør noe hvis det ikke er slides

    // Play pop sound only if the slide is actually changing
    if (currentTipSlideIndex !== index && popSound) {
        popSound.currentTime = 0;
        popSound.play();
    }

    carouselSlides.forEach((slide, i) => {
        slide.classList.toggle('active-slide', i === index);
    });
    currentTipSlideIndex = index;

    if (prevSlideButton && nextSlideButton) { // Sjekk at knappene finnes
        prevSlideButton.disabled = currentTipSlideIndex === 0;
        nextSlideButton.disabled = currentTipSlideIndex === carouselSlides.length - 1;
    }
}

if (prevSlideButton && nextSlideButton && carouselSlides.length > 0) {
    prevSlideButton.addEventListener('click', () => {
        if (currentTipSlideIndex > 0) {
            showTipSlide(currentTipSlideIndex - 1);
            // Pop sound is now handled within showTipSlide if index changes
        }
    });

    nextSlideButton.addEventListener('click', () => {
        if (currentTipSlideIndex < carouselSlides.length - 1) {
            showTipSlide(currentTipSlideIndex + 1);
            // Pop sound is now handled within showTipSlide if index changes
        }
    });
}

// NY implementering for flere knapper:
showTipsButtons.forEach(button => {
    button.onclick = function() {
        if (popSound) { // Play pop sound when opening tips
            popSound.currentTime = 0;
            popSound.play();
        }
        tipsModal.style.display = "flex"; // ENDRET FRA "block" TIL "flex"

        if (carouselSlides.length > 0) {
            const isIntroTipsButton = button.closest('#intro-screen') !== null;

            if (isIntroTipsButton) {
                // Hvis knappen er på introduksjonsskjermen, vis alltid første slide
                showTipSlide(0);
            } else {
                // Hvis knappen er inne i quizen, vis relevant slide
                const currentQuestionData = questions[currentQuestionIndex];
                if (currentQuestionData && typeof currentQuestionData.tipCategoryKey !== 'undefined') {
                    const relevantSlideIndex = currentQuestionData.tipCategoryKey;
                    // Sørg for at indeksen er gyldig
                    if (relevantSlideIndex >= 0 && relevantSlideIndex < carouselSlides.length) {
                        showTipSlide(relevantSlideIndex);
                    } else {
                        showTipSlide(0); // Fallback til første slide hvis nøkkelen er ugyldig
                    }
                } else {
                    showTipSlide(0); // Fallback hvis ingen tipskategori er definert for spørsmålet
                }
            }
        }
    }
});

closeBtn.onclick = function() {
    if (popSound) { // Play pop sound when closing tips
        popSound.currentTime = 0;
        popSound.play();
    }
    tipsModal.style.display = "none";
}

// Lukk modalen hvis brukeren klikker utenfor innholdet
window.onclick = function(event) {
    if (event.target == tipsModal) {
        if (popSound) { // Play pop sound when closing tips by clicking outside
            popSound.currentTime = 0;
            popSound.play();
        }
        tipsModal.style.display = "none";
    }
}