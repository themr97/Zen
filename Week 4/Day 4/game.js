var baseDiv = document.createElement("div");
baseDiv.setAttribute("class", "container");

var div1 = document.createElement("div");
div1.setAttribute("id", "loader");
div1.classList.add('hidden');

var div2 = document.createElement("div");
div2.setAttribute("id", "game");
div2.setAttribute("class", "justify-center flex-column hidden");

var div23 = document.createElement("div");
div23.setAttribute("id", "hud");

var div3 = document.createElement("div");
div3.setAttribute("id", "hud-item");

var p1 = document.createElement("p");
p1.setAttribute("id", "progressText");
p1.setAttribute("class", "hud-prefix");
p1.innerHTML = "Question";

var div4 = document.createElement("div");
div4.setAttribute("id", "progressBar");

var div5 = document.createElement("div");
div5.setAttribute("id", "progressBarFull");

div4.appendChild(div5);

div3.appendChild(p1);
div3.appendChild(div4);


var div6 = document.createElement("div");
div6.setAttribute("id", "hud-item");

var p2 = document.createElement("p");
p2.setAttribute("class", "hud-prefix");
p2.innerHTML = "Score";

var h11 = document.createElement("h1");
h11.setAttribute("id", "score");
h11.setAttribute("class", "hud-main-text");
h11.innerHTML = "0";

div6.appendChild(p2);
div6.appendChild(h11);

div23.appendChild(div3);
div23.appendChild(div6);

var h21 = document.createElement("h2");
h21.setAttribute("id", "question");

var div7 = document.createElement("div");
div7.setAttribute("class", "choice-container");

var p3 = document.createElement("p");
p3.setAttribute("class", "choice-prefix");
p3.innerHTML = "A";

var p4 = document.createElement("p");
p4.setAttribute("class", "choice-text");
p4.setAttribute("data-number", "1");

div7.appendChild(p3);
div7.appendChild(p4);

var div8 = document.createElement("div");
div8.setAttribute("class", "choice-container");

var p5 = document.createElement("p");
p5.setAttribute("class", "choice-prefix");
p5.innerHTML = "B";

var p6 = document.createElement("p");
p6.setAttribute("class", "choice-text");
p6.setAttribute("data-number", "2");

div8.appendChild(p5);
div8.appendChild(p6);

var div9 = document.createElement("div");
div9.setAttribute("class", "choice-container");

var p7 = document.createElement("p");
p7.setAttribute("class", "choice-prefix");
p7.innerHTML = "C";

var p8 = document.createElement("p");
p8.setAttribute("class", "choice-text");
p8.setAttribute("data-number", "3");

div9.appendChild(p7);
div9.appendChild(p8);

var div10 = document.createElement("div");
div10.setAttribute("class", "choice-container");

var p9 = document.createElement("p");
p9.setAttribute("class", "choice-prefix");
p9.innerHTML = "D";

var p10 = document.createElement("p");
p10.setAttribute("class", "choice-text");
p10.setAttribute("data-number", "4");

div10.appendChild(p9);
div10.appendChild(p10);

div2.appendChild(div23);
div2.appendChild(h21);
div2.appendChild(div7);
div2.appendChild(div8);
div2.appendChild(div9);
div2.appendChild(div10);

baseDiv.appendChild(div1);
baseDiv.appendChild(div2);

document.body.append(baseDiv);

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

async function getQuestionFromAPI() {
    try {
        var response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
        var loadedQuestions = await response.json();

        function parseAndUpdate(loadedQuestions) {

            questions = loadedQuestions.results.map((loadedQuestion) => {
                const formattedQuestion = {
                    question: loadedQuestion.question,
                };

                const answerChoices = [...loadedQuestion.incorrect_answers];
                formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
                answerChoices.splice(
                    formattedQuestion.answer - 1,
                    0,
                    loadedQuestion.correct_answer
                );

                answerChoices.forEach((choice, index) => {
                    formattedQuestion['choice' + (index + 1)] = choice;
                });

                return formattedQuestion;
            });

            startGame();
        }


        parseAndUpdate(loadedQuestions);

    } catch (error) {
        console.log(error);
    }
}

getQuestionFromAPI();

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('./end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};