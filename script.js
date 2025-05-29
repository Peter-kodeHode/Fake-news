const questions = [
    {
        questionText: 'Hvilken av disse tror du er "fake" news?',
        options: [
            { text: "Ekte overskrift 1", isCorrect: false, isFake: false },
            { text: "Falsk overskrift", isCorrect: true, isFake: true },
            { text: "Ekte overskrift 2", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Riktig! Denne overskriften var fabrikkert.",
        feedbackIncorrect: "Ikke helt. Prøv å se etter oppsiktsvekkende språk eller påstander som ikke kan bekreftes.",
        tipCategoryKey: 0 // Peker til "Generelle tips (Del 1)"
    },
    {
        questionText: "Identifiser det manipulerte bildet.",
        options: [
            { text: "Bilde A (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_A.jpg" },
            { text: "Bilde B (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_B.jpg" },
            { text: "Bilde C (Falskt)", isCorrect: true, isFake: true, type: "image", src:"fake_image_C.jpg" }
        ],
        feedbackCorrect: "Godt observert! Det bildet har blitt endret.",
        feedbackIncorrect: "Ikke helt. Det falske bildet har ofte små uoverensstemmelser eller forvrengninger.",
        tipCategoryKey: 2 // ENDRET: Peker nå til "Tips for bilder/video"
    },
    {
        questionText: "Identifiser det manipulerte bildet (Eksempel 2).",
        options: [
            { text: "Bilde X (Falskt)", isCorrect: true, isFake: true, type: "image", src:"fake_image_X.jpg" },
            { text: "Bilde Y (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_Y.jpg" },
            { text: "Bilde Z (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_Z.jpg" }
        ],
        feedbackCorrect: "Stemmer! Dette bildet var manipulert.",
        feedbackIncorrect: "Se nøyere etter. Ofte er det detaljene som avslører en forfalskning.",
        tipCategoryKey: 2 // ENDRET: Peker nå til "Tips for bilder/video"
    },
    {
        questionText: 'Hvilken av disse overskriftene er mest sannsynlig falsk?',
        options: [
            { text: "Falsk overskrift om politikk", isCorrect: true, isFake: true },
            { text: "Ekte overskrift om sport", isCorrect: false, isFake: false },
            { text: "Ekte overskrift om kultur", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Korrekt! Den var designet for å villede.",
        feedbackIncorrect: "Feil. Den falske overskriften brukte ofte sterke, udokumenterte påstander.",
        tipCategoryKey: 0 // Peker til "Generelle tips (Del 1)"
    },
    // Hvis du hadde et spørsmål for AI-tekst (tidligere tipCategoryKey: 2),
    // må det nå ha tipCategoryKey: 3.
    // Eksempel:
    // {
    //     questionText: "Hvilken tekst er mest sannsynlig skrevet av KI?",
    //     options: [ /* ... */ ],
    //     feedbackCorrect: "...",
    //     feedbackIncorrect: "...",
    //     tipCategoryKey: 3 // ENDRET: Peker nå til "Tips for AI-generert tekst"
    // },
    // Add more questions here
];

let currentQuestionIndex = 0;
const questionArea = document.getElementById('question-area');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const feedbackArea = document.getElementById('feedback-area');
const nextButton = document.getElementById('next-question');
// const showTipsButton = document.getElementById('show-tips-btn'); // Gammel linje
const showTipsButtons = document.querySelectorAll('.js-show-tips'); // NY: Velger alle knapper med klassen .js-show-tips
const tipsModal = document.getElementById('tips-modal');
const closeBtn = document.querySelector('.close-btn');

// Karusell-elementer for tips
const carouselSlides = document.querySelectorAll('#tips-modal .carousel-slide');
const prevSlideButton = document.querySelector('#tips-modal .carousel-prev');
const nextSlideButton = document.querySelector('#tips-modal .carousel-next');
let currentTipSlideIndex = 0;

// Nye elementer for introduksjonsskjerm
const introScreen = document.getElementById('intro-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.querySelector('.quiz-container');

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
    } else {
        selectedOptionElement.classList.add('incorrect');
        feedbackArea.textContent = questionData.feedbackIncorrect;
        feedbackArea.style.color = 'red';
    }
    nextButton.style.display = 'block';
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        questionArea.textContent = "Quizen er ferdig!";
        document.querySelector('.options-container').style.display = 'none';
        feedbackArea.textContent = "Takk for at du spilte!";
        nextButton.style.display = 'none';
    }
}

// Event Listener for å starte quizen (NY)
startQuizBtn.onclick = function() {
    introScreen.style.display = "none";
    quizContainer.style.display = "block"; 
    if (questions.length > 0) {
        loadQuestion(currentQuestionIndex); 
    } else {
        questionArea.textContent = "Ingen spørsmål lastet inn.";
        document.querySelector('.options-container').style.display = 'none';
        nextButton.style.display = 'none';
    }
}

// Funksjon for å vise riktig karusell-slide
function showTipSlide(index) {
    if (carouselSlides.length === 0) return; // Ikke gjør noe hvis det ikke er slides

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
        }
    });

    nextSlideButton.addEventListener('click', () => {
        if (currentTipSlideIndex < carouselSlides.length - 1) {
            showTipSlide(currentTipSlideIndex + 1);
        }
    });
}

// NY implementering for flere knapper:
showTipsButtons.forEach(button => {
    button.onclick = function() {
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
    tipsModal.style.display = "none";
}

// Lukk modalen hvis brukeren klikker utenfor innholdet
window.onclick = function(event) {
    if (event.target == tipsModal) {
        tipsModal.style.display = "none";
    }
}