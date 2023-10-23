const countHintsLabel = document.getElementById('hintsCount')
const countCorrectLabel = document.getElementById('correctCount')
const countIncorrectLabel = document.getElementById('incorrectCount')

const firstOut = document.getElementById('firstNumber')
const secondOut = document.getElementById('secondNumber')

const answer = document.getElementById('answer')

const exercise = document.getElementById('exercise')

let countHints = 0
let countCorrect = 0
let countIncorrect = 0

let firstNumber = 0
let secondNumber = 0

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

document.addEventListener('DOMContentLoaded', generateTask)

function getAnswer() {
    answer.value = firstNumber * secondNumber
    countHints++
    countHintsLabel.innerHTML = countHints.toString()
}

function checkAnswer() {
    if (answer.value === (firstNumber * secondNumber).toString()) {
        countCorrect++
        countCorrectLabel.innerHTML = countCorrect.toString()
        generateTask()
        exercise.classList.add('correct-answer')
        setTimeout(() => exercise.classList.remove('correct-answer'), 300)
    } else {
        countIncorrect++
        countIncorrectLabel.innerHTML = countIncorrect.toString()
        generateTask()
        exercise.classList.add('wrong-answer')
        setTimeout(() => exercise.classList.remove('wrong-answer'), 300)
    }
    answer.value = ''
}

function availableNumbers(number) {
    if (numbers.indexOf(number) === -1)
        numbers.push(number)
    else
        numbers.splice(numbers.indexOf(number), 1)
}

function generateTask() {
    if (numbers === []) {
        firstNumber = 0
        secondNumber = 0
    } else {
        firstNumber = numbers[Math.floor(Math.random() * numbers.length)]
        secondNumber = numbers[Math.floor(Math.random() * numbers.length)]
    }
    firstOut.innerHTML = firstNumber
    secondOut.innerHTML = secondNumber
}