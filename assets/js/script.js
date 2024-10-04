// wait for the DOM to finish loading before running the game 
// Get the button elements and add event listeners to them 

document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons ){ 
        button.addEventListener('click', () => {
            if (button.getAttribute('data-type') === "Submit"){ 
                alert("You clicked submit!");
            } else { 
                let gameType = button.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
    runGame('addition');
})


/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
const runGame = (gameType) => { 
    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 +1);
    let num2 = Math.floor(Math.random() * 25 +1);

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else { 
        alert('unknown game type');
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

const checkAnswer = () => { }

const calculateCorrectAnswer = () => { }

const incrementScore = () => { }

const incrementWrongScore = () => { }

const displayAdditionQuestion = (operand1, operand2) => {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
 }

const displaySubtractQuestion = () => { }

const displayMultiplyQuestion = () => { }

const displayDivisionQuestion = () => { }


