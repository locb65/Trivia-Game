//Object of bank of questions and answers to pull from.


let questions = [{
    questionNumber: 0,
    img: 'https://www.mathtutordvd.com/members/images/3639.gif',
    questionText: 'What Element is this?',
    answers: [
        { choice: 'Hydrogen', isCorrect: false},
        { choice: 'Helium', isCorrect: true},
        { choice: 'Phosporus', isCorrect: false},
        { choice: 'Sodium', isCorrect: false}
    ],
    expectedAnswer: 1
}]

let questionNumber = 0
let score = 0

let question = document.querySelector('.js-questions');
let questionImage = document.getElementById('js-image');
let choice1 = document.querySelector('.js-choiceOne');
let choice2 = document.querySelector('.js-choiceTwo');
let choice3 = document.querySelector('.js-choiceThree');
let choice4 = document.querySelector('.js-choiceFour');
let choicesButtons = document.querySelector('.choicesContainer')

//relevant constants and DOM elements needed for displaying questions and choices
const startButton = document.querySelector('.js-start')


//basic function for selecting questions from the questions object
function questionSelector() {

    console.log(questionImage)

console.log('helloworld')

//sets the image associated with each question
questionImage.src = questions[questionNumber].img;

//prints the question by its question number attribute.
question.innerText = questions[questionNumber].questionText;

//sets the answers to option buttons in HTML
choice1.innerText = questions[questionNumber].answers[0].choice;
choice2.innerText = questions[questionNumber].answers[1].choice;
choice3.innerText = questions[questionNumber].answers[2].choice;
choice4.innerText = questions[questionNumber].answers[3].choice;

// sets an incorrect or correct value to each answer for the question.
// choice1.value = questions[questionNumber].answers[0].isCorrect;
// choice2.value = questions[questionNumber].answers[1].isCorrect;
// choice3.value = questions[questionNumber].answers[2].isCorrect;
// choice4.value = questions[questionNumber].answers[3].isCorrect;

}


//DOM event for start button to iterate first question.


function submitAnswer(choice) {
    let temp = questions[questionNumber]
    if (choice == temp.answers[temp.expectedAnswer].choice) {
        increaseScore()
    }

}

function increaseScore() {
    score++
}

startButton.addEventListener('click', () => {

    questionSelector()
    startButton.style.display = 'none'
})

choicesButtons.addEventListener('click', (event) => {
    submitAnswer(event.target.innerText)
console.log(event.target)
})