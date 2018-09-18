// class dice = {
//     sides: 6,
//     roll () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   },
// };

class Dice {
    constructor(sides) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

const dice = new Dice(6);
// Prints dice roll to the page

function printNumber(number) {
    const placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

const button = document.getElementById('button');

button.onclick = function() {
    const result = dice.roll();
    printNumber(result);
};
