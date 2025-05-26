const questions = [
    {
        questionText: 'Hvilken av disse tror du er "fake" news?',
        options: [
            { text: "Ekte overskrift 1", isCorrect: false, isFake: false },
            { text: "Falsk overskrift", isCorrect: true, isFake: true },
            { text: "Ekte overskrift 2", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Riktig! Denne overskriften var fabrikkert.",
        feedbackIncorrect: "Ikke helt. Prøv å se etter oppsiktsvekkende språk eller påstander som ikke kan bekreftes."
    },
    {
        questionText: "Identifiser det manipulerte bildet.",
        options: [
            { text: "Bilde A (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_A.jpg" },
            { text: "Bilde B (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_B.jpg" },
            { text: "Bilde C (Falskt)", isCorrect: true, isFake: true, type: "image", src:"fake_image_C.jpg" }
        ],
        feedbackCorrect: "Godt observert! Det bildet har blitt endret.",
        feedbackIncorrect: "Ikke helt. Det falske bildet har ofte små uoverensstemmelser eller forvrengninger."
    },    {
        questionText: "Identifiser det manipulerte bildet.",
        options: [
            { text: "Bilde A (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_A.jpg" },
            { text: "Bilde B (Ekte)", isCorrect: false, isFake: false, type: "image", src:"real_image_B.jpg" },
            { text: "Bilde C (Falskt)", isCorrect: true, isFake: true, type: "image", src:"fake_image_C.jpg" }
        ],
        feedbackCorrect: "Godt observert! Det bildet har blitt endret.",
        feedbackIncorrect: "Ikke helt. Det falske bildet har ofte små uoverensstemmelser eller forvrengninger."
    },    {
        questionText: 'Hvilken av disse tror du er "fake" news?',
        options: [
            { text: "Ekte overskrift 1", isCorrect: false, isFake: false },
            { text: "Falsk overskrift", isCorrect: true, isFake: true },
            { text: "Ekte overskrift 2", isCorrect: false, isFake: false }
        ],
        feedbackCorrect: "Riktig! Denne overskriften var fabrikkert.",
        feedbackIncorrect: "Ikke helt. Prøv å se etter oppsiktsvekkende språk eller påstander som ikke kan bekreftes."
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
const questionArea = document.getElementById('question-area');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const feedbackArea = document.getElementById('feedback-area');
const nextButton = document.getElementById('next-question');
const showTipsButton = document.getElementById('show-tips-btn'); // Nytt
const tipsModal = document.getElementById('tips-modal'); // Nytt
const closeBtn = document.querySelector('.close-btn'); // Nytt

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

// Load the first question when the page loads
window.onload = () => {
    if (questions.length > 0) {
        loadQuestion(currentQuestionIndex);
    } else {
        questionArea.textContent = "Ingen spørsmål lastet inn.";
    }
};

// Event Listeners for Modal (NYTT)
showTipsButton.onclick = function() {
    tipsModal.style.display = "block";
}

closeBtn.onclick = function() {
    tipsModal.style.display = "none";
}

// Lukk modalen hvis brukeren klikker utenfor innholdet
window.onclick = function(event) {
    if (event.target == tipsModal) {
        tipsModal.style.display = "none";
    }
}