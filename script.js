//Object of bank of questions and answers to pull from.
const questions = [{
    questionNumber: 0,
    img: 'https://www.google.com/search?q=HE+periodic+table&tbm=isch&ved=2ahUKEwj-nsWe-Kv8AhVpGFkFHfANA28Q2-cCegQIABAA&oq=HE+periodic+table&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMggIABAFEAcQHjIICAAQBRAHEB46BAgjECdQpgtY0xFg4xVoAHAAeACAAUaIAfcBkgEBNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=u2e0Y77VEOmw5NoP8JuM-AY&bih=890&biw=981#imgrc=8dDkQQXD8ljjCM',
    questionText: 'What Element is this?',
    answers: [
        { choice: 'Hydrogen', isCorrect: false},
        { choice: 'Helium', isCorrect: true},
        { choice: 'Phosporus', isCorrect: false},
        { choice: 'Sodium', isCorrect: false}
    ]
}]


start = true
console.log('helloworld')


//relevant constants and DOM elements needed for displaying questions and choices
const startButton = document.querySelector('.js-start')


//basic function for selecting questions from the questions object
function questionSelector(questionNumber) {

    const question = document.querySelector('.js-questions');
    const questionImage = document.querySelector('.questionImage');
    const choice1 = document.querySelector('.js-choiceOne');
    const choice2 = document.querySelector('.js-choiceTwo');
    const choice3 = document.querySelector('.js-choiceThree');
    const choice4 = document.querySelector('.js-choiceFour');

console.log('helloworld')

//sets the image associated with each question
// questionImage.innerText = question[questionNumber].questionImage;

//prints the question by its question number attribute.
question.innerText = questions[questionNumber].questionText;

//sets the answers to option buttons in HTML
choice1.innerText = questions[questionNumber].answers[0].choice;
choice2.innerText = questions[questionNumber].answers[1].choice;
choice3.innerText = questions[questionNumber].answers[2].choice;
choice4.innerText = questions[questionNumber].answers[3].choice;

// sets an incorrect or correct value to each answer for the question.
choice1.value = question[questionNumber].answers[0].isCorrect;
choice2.value = question[questionNumber].answers[1].isCorrect;
choice3.value = question[questionNumber].answers[2].isCorrect;
choice4.value = question[questionNumber].answers[3].isCorrect;

}


//DOM event for start button to iterate first question.
startButton.addEventListener('click', () => {

    questionSelector(0)
})