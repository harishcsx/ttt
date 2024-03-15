
const buttons = document.querySelectorAll('.sub button');
let cross = false;
let h2 = document.querySelector("h2");

const checkWin = (symbol) => {
    for (let i = 0; i < 3; i++) {
        if (buttons[i * 3].innerHTML.trim() === symbol &&
            buttons[i * 3 + 1].innerHTML.trim() === symbol &&
            buttons[i * 3 + 2].innerHTML.trim() === symbol) {
            return true; 
        }
    }

    for (let i = 0; i < 3; i++) {
        if (buttons[i].innerHTML.trim() === symbol &&
            buttons[i + 3].innerHTML.trim() === symbol &&
            buttons[i + 6].innerHTML.trim() === symbol) {
            return true; // Column win
        }
    }

    if ((buttons[0].innerHTML.trim() === symbol &&
        buttons[4].innerHTML.trim() === symbol &&
        buttons[8].innerHTML.trim() === symbol) ||
        (buttons[2].innerHTML.trim() === symbol &&
        buttons[4].innerHTML.trim() === symbol &&
        buttons[6].innerHTML.trim() === symbol)) {
        return true; // Diagonal win
    }

    return false; 
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML.trim() === '') {
            button.innerHTML = cross ? 'x' : 'o';
            cross = !cross;

            if (checkWin('x')) {
                h2.innerText = 'Player X wins!';
            } else if (checkWin('o')) {
                h2.innerText = 'Player O wins!';
            } else if ([...buttons].every(btn => btn.innerHTML.trim() !== '')) {
                h2.innerText = 'The game ends in a draw!';
            }
        }
    });
});

const reset = () => {
    buttons.forEach(button => {
        button.innerHTML = null;
        h2.innerText = null;
    });
    // alert('Game reset!');
};

let clearBtn = document.querySelector(".btn");
clearBtn.addEventListener('click', reset);
