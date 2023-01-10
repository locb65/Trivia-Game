//Object of bank of questions and answers to pull from.


let questions = [
    {
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
    },
    {
        questionNumber: 1,
        img: 'https://www.roadaffair.com/wp-content/uploads/2021/11/eiffel-tower-paris-france-shutterstock_1036870972.jpg',
        questionText: 'Which City is this located in?',
        answers: [
            { choice: 'Burgundy', isCorrect: false},
            { choice: 'Strasbourg', isCorrect: false},
            { choice: 'Provence', isCorrect: false},
            { choice: 'Paris', isCorrect: true}
        ],
        expectedAnswer: 3
    },
    {
        questionNumber: 2,
        img: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Call_of_Duty_-_Modern_Warfare_Remastered.jpeg',
        questionText: 'What year was Call of Duty: Modern Warfare released?',
        answers: [
            { choice: '2007', isCorrect: true},
            { choice: '2010', isCorrect: false},
            { choice: '2009', isCorrect: false},
            { choice: '2011', isCorrect: false}
        ],
        expectedAnswer: 0
    },
    {
        questionNumber: 3,
        img: 'https://www.greenpeace.org/static/planet4-international-stateless/2019/10/159e202d-gp02ul9.jpg',
        questionText: 'Which of these is the largest Continent in the World?',
        answers: [
            { choice: 'North America', isCorrect: false},
            { choice: 'Asia', isCorrect: true},
            { choice: 'Russia', isCorrect: false},
            { choice: 'Antartica', isCorrect: false}
        ],
        expectedAnswer: 1
    },
    {
        questionNumber: 4,
        img: 'https://gisgeography.com/wp-content/uploads/2017/11/North-America-Map-1265x1255.png',
        questionText: 'In what year was North America discovered?',
        answers: [
            { choice: '1607', isCorrect: false},
            { choice: '1502', isCorrect: false},
            { choice: '1492', isCorrect: true},
            { choice: '1507', isCorrect: false}
        ],
        expectedAnswer: 2
    },
    {
        questionNumber: 5,
        img: 'https://media.bizj.us/view/img/11812205/generalassembly-dc1*1600xx2048-1152-0-130.jpg',
        questionText: 'What year was General Assembly: Coding Bootcamp first estabilshed?',
        answers: [
            { choice: '2012', isCorrect: false},
            { choice: '2011', isCorrect: true},
            { choice: '2009', isCorrect: false},
            { choice: '2013', isCorrect: false}
        ],
        expectedAnswer: 1
    },
    {
        questionNumber: 6,
        img: 'https://cdn.thecollector.com/wp-content/uploads/2021/12/great-wall-china-national-geographic.jpg?width=1400&quality=55',
        questionText: 'Where is this located?',
        answers: [
            { choice: 'Russia', isCorrect: false},
            { choice: 'Thailand', isCorrect: false},
            { choice: 'Taiwan', isCorrect: false},
            { choice: 'China', isCorrect: true}
        ],
        expectedAnswer: 3
    },
    {
        questionNumber: 7,
        img: 'https://photos5.appleinsider.com/gallery/product_pages/189-hero.jpg',
        questionText: 'Who is this person?',
        answers: [
            { choice: 'Elon Musk', isCorrect: false},
            { choice: 'Steve Jobs', isCorrect: true},
            { choice: 'Sigmund Freud', isCorrect: false},
            { choice: 'Joe Biden', isCorrect: false}
        ],
        expectedAnswer: 1
    },
    {
        questionNumber: 8,
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Map_of_USA_with_state_and_territory_names_2.png',
        questionText: 'What was the 50th state added to the United States?',
        answers: [
            { choice: 'Alaska', isCorrect: false},
            { choice: 'West Virginia', isCorrect: false},
            { choice: 'North Dakota', isCorrect: false},
            { choice: 'Hawaii', isCorrect: true}
        ],
        expectedAnswer: 4
    },
    {
        questionNumber: 9,
        img: 'https://www.edarabia.com/wp-content/uploads/2019/10/taiwan-flag.jpg',
        questionText: 'What Country does this flag belong to?',
        answers: [
            { choice: 'Taiwan', isCorrect: true},
            { choice: 'China', isCorrect: false},
            { choice: 'Singapore', isCorrect: false},
            { choice: 'Thailand', isCorrect: false}
        ],
        expectedAnswer: 0
    },
    // {
    //     questionNumber: 8,
    //     img: '',
    //     questionText: '?',
    //     answers: [
    //         { choice: '', isCorrect: true},
    //         { choice: '', isCorrect: false},
    //         { choice: '', isCorrect: false},
    //         { choice: '', isCorrect: false}
    //     ],
    //     expectedAnswer: 0
    // },
    
]

let questionNumber = 0
let score = 0

let question = document.querySelector('.js-questions');
let questionImage = document.getElementById('js-image');
let choice1 = document.querySelector('.js-choiceOne');
let choice2 = document.querySelector('.js-choiceTwo');
let choice3 = document.querySelector('.js-choiceThree');
let choice4 = document.querySelector('.js-choiceFour');
let choicesButtons = document.querySelectorAll('.choicesButton')
let intro = document.querySelector('.intro')
let choicesContainer = document.querySelector('.choicesContainer')
let restart = document.querySelector('.js-restart')




//relevant constants and DOM elements needed for displaying questions and choices
const startButton = document.querySelector('.js-start')


//basic function for selecting questions from the questions object
function questionSelector() {
    if (questionNumber < questions.length) {

        //sets the image associated with each question
        questionImage.src = questions[questionNumber].img;

        //prints the question by its question number attribute.
        question.innerText = questions[questionNumber].questionText;

        //sets the answers to option buttons in HTML
        choice1.innerText = questions[questionNumber].answers[0].choice;
        choice2.innerText = questions[questionNumber].answers[1].choice;
        choice3.innerText = questions[questionNumber].answers[2].choice;
        choice4.innerText = questions[questionNumber].answers[3].choice;

        }
}


//DOM event for start button to iterate first question.


function submitAnswer(choice) {
    let temp = questions[questionNumber]
    if (choice == temp.answers[temp.expectedAnswer].choice) {
        increaseScore()
        questionNumber++
        questionSelector()
    }
    else {
        questionNumber++
        questionSelector()
    };
    if (questionNumber > 9){
        question.innerText = `All Questions have been answered. \n You scored ${score} out of 10`
        choicesContainer.style.display = 'none'
        questionImage.style.display = 'none'
        restart.style.display = 'grid'
        }

}

function increaseScore() {
    score++
}

startButton.addEventListener('click', () => {

    questionSelector()
    startButton.style.display = 'none'
    intro.style.display = 'none'
    choicesContainer.style.display = 'grid'
    question.style.display = 'grid'
    questionImage.style.display = 'grid'

})

choicesButtons.forEach( (i) => {
    i.addEventListener('click', (event) => {
    submitAnswer(event.target.innerText)
console.log(event.target)
})
})

restart.addEventListener('click', () => {
    score = 0
    intro.style.display = 'grid'
    startButton.style.display = 'grid'
    restart.style.display = 'none'
    questionNumber = 0
    question.style.display = 'none'

})

