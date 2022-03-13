let selectedRow = 'a'
let letter = 0
let hasFinished = false
import WORDS from './words.js'
let word = WORDS[Math.floor(Math.random()*1682)]
console.log(word)
const keys = document.getElementsByClassName("letter")
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const jsConfetti = new JSConfetti()
function contains(a, obj) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true
        }
    }
    return false
}

function findCommonElement(array1, array2) {
     

    for(let i = 0; i < array1.length; i++) {

        for(let j = 0; j < array2.length; j++) {

            if(array1[i] === array2[j]) {

                let yellowLetter = document.getElementById((i+1)+selectedRow)

                if (yellowLetter.style["background-color"] != "#121213" || yellowLetter.style["background-color"] != "#6d9c70") {
                    yellowLetter.style["background-color"] = "#d1c27c";
                    document.getElementById(yellowLetter.innerHTML).style["background-color"] = "#d1c27c"
                }
            }
        }
    }
}
 

function checkWord(attempt) {
    if (attempt == word) {
        hasFinished = true
        jsConfetti.addConfetti()
    }
    let attLetters = []
    let trueLetters = []

    for (let i = 0; i < attempt.length; i++) {
        attLetters.push(attempt[i])
        trueLetters.push(word[i])
    }

    for (let i = 0; i < attempt.length; i++) {
        if (!(trueLetters.includes(attLetters[i]))) {
            let wrongLetter = document.getElementById((i+1)+selectedRow)
            wrongLetter.style["background-color"] = "#545457"
            document.getElementById(wrongLetter.innerHTML).style["background-color"] = "#0d0d0e"
        }
    }

    findCommonElement(attLetters, trueLetters)
    
    for (let i = 0; i < attempt.length; i++) {


        if (attempt[i] == word[i]) {
            let correctLetter = document.getElementById((i+1)+selectedRow)
            correctLetter.style["background-color"] = "#6d9c70";
            document.getElementById(correctLetter.innerHTML).style["background-color"] = "#6d9c70"
        }

    }
}

function type(event) {
    let changedBox = document.getElementById(letter + selectedRow);


    if (event == 'Backspace') {
        if (letter != 0) {
            changedBox.innerHTML = ''
        }
        if (letter != 0) {
            letter -= 1
        }
    }

    if (contains(alphabet, event)) {
        if (letter != 5) {
            letter += 1
            changedBox = document.getElementById(letter + selectedRow);
            changedBox.innerHTML = event
        }
    }

    if (event == 'Enter') {
        let writtenWord = document.getElementById(1+selectedRow).innerHTML + document.getElementById(2+selectedRow).innerHTML + document.getElementById(3+selectedRow).innerHTML + document.getElementById(4+selectedRow).innerHTML + document.getElementById(5+selectedRow).innerHTML

        if (contains(WORDS, writtenWord)) {
            if (selectedRow == 'a') {
                checkWord(writtenWord);
                selectedRow = 'b'
                letter = 0;

            } else if (selectedRow == 'b') {
                checkWord(writtenWord);
                selectedRow = 'c'
                letter = 0;

            } else if (selectedRow == 'c') {
                checkWord(writtenWord);
                selectedRow = 'd'
                letter = 0;

            } else if (selectedRow == 'd') {
                checkWord(writtenWord);
                selectedRow = 'e'
                letter = 0;

            } else if (selectedRow == 'e') {
                checkWord(writtenWord);
                selectedRow = 'f'
                letter = 0;

            } else if (selectedRow == 'f') {
                checkWord(writtenWord);
            }
        }
    }
}

document.addEventListener('click' , (event) => {
    let typed = event.target.id
    type(typed)
})
document.addEventListener('keydown', (event) => {
    if (hasFinished == false) {
        type(event.key)
    }
})
