class dice = {
    sides: 6,
    roll () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};






















// Prints dice roll to the page

function printNumber(number) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

let button = document.getElementById('button');

button.onclick = function() {
    let result = dice.roll();
    printNumber(result);
};
