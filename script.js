//Object of bank of questions and answers to pull from.
const questions = [{
    img: 'https://www.google.com/search?q=HE+periodic+table&tbm=isch&ved=2ahUKEwj-nsWe-Kv8AhVpGFkFHfANA28Q2-cCegQIABAA&oq=HE+periodic+table&gs_lcp=CgNpbWcQAzIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMggIABAFEAcQHjIICAAQBRAHEB46BAgjECdQpgtY0xFg4xVoAHAAeACAAUaIAfcBkgEBNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=u2e0Y77VEOmw5NoP8JuM-AY&bih=890&biw=981#imgrc=8dDkQQXD8ljjCM',
    q: 'What Element is this?',
    a: [
        { choice: 'Hydrogen', isCorrect: false},
        { choice: 'Helium', isCorrect: true},
        { choice: 'Phosporus', isCorrect: true},
        { choice: 'Sodium', isCorrect: true}
    ]
}]
//basic function for selecting questions from the questions object
function questionSelector() {

}
//relevant constants and DOM elements needed for displaying questions and choices
const question = document.querySelector('.js-questions')
const questionImage = document.querySelector('.questionImage')
const choice1 = document.querySelector('.js-choiceOne')
const choice2 = document.querySelector('.js-choiceTwo')
const choice3 = document.querySelector('.js-choiceThree')
const choice4 = document.querySelector('.js-choiceFour')