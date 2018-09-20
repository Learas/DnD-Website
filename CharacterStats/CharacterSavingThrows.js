// Working!!
// Names need to be changed

const CharacterStats = {
    Strength: 14,
    Dexterity: 10,
    Constitution: 19,
    Intelligence: 8,
    Wisdom: 7,
    Charisma: 13,
};

const CharacterSavingThrows = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
};

document.getElementById('CSStr').innerHTML = CharacterStats.Strength;
document.getElementById('CSTStr').innerHTML = CharacterSavingThrows.Strength;

function getCharacterSavingThrowsStrength() {
    let i;
 
    for (i = 0; i = 14; i++) {
        console.log(i);
        if (CharacterStats.Strength === i) {
            CharacterSavingThrows.Strength = Math.floor((i - 10) / 2);
            return CharacterSavingThrows.Strength;      
        }
    }
    
}

console.log(getCharacterSavingThrowsStrength());



function getCharacterSavingThrowsDexterity() {
    let i;
    for (i = 0; i = CharacterStats.Dexterity; i++) {
        if (CharacterStats.Dexterity === i) {
            CharacterSavingThrows.Dexterity = Math.floor((i - 10) / 2); 
            return CharacterSavingThrows.Dexterity; 

            /*  } else
    if (CharacterStats.Strength === 12 || CharacterStats.Strength === 13) {
    CharacterSavingThrows.Strength = 1;
    } else if (CharacterStats.Strength === 14 || CharacterStats.Strength === 15) {
    CharacterSavingThrows.Strength = 2;*/
            // return CharacterSavingThrows.Strength; 
  
        }
    }
    // document.getElementById("CSSS").innerHTML = CharacterStats.Strength;
    // document.getElementById("CSTSS").innerHTML = CharacterSavingThrows.Strength; 
 
}

function getCharacterSavingThrowsConstitution() {
    let i;
 
    for (i = 0; i = CharacterStats.Constitution; i++) {
        if (CharacterStats.Constitution === i) {
            CharacterSavingThrows.Constitution = Math.floor((i - 10) / 2);
            return CharacterSavingThrows.Constitution;
        }
    }
}

function getCharacterSavingThrowsWisdom() {
    let i;
 
    for (i = 0; i = CharacterStats.Wisdom; i++) {
        if (CharacterStats.Wisdom === i) {
            CharacterSavingThrows.Wisdom = Math.floor((i - 10) / 2);
            return CharacterSavingThrows.Wisdom;
        }
    }
}

function getCharacterSavingThrowsIntelligence() {
    let i;
 
    for (i = 0; i = CharacterStats.Intelligence; i++) {
        if (CharacterStats.Intelligence === i) {
            CharacterSavingThrows.Intelligence = Math.floor((i - 10) / 2);
            return CharacterSavingThrows.Intelligence;
        }
    }
}

function getCharacterSavingThrowsCharisma() {
    let i;
 
    for (i = 0; i = CharacterStats.Charisma; i++) {
        if (CharacterStats.Charisma === i) {
            CharacterSavingThrows.Charisma = Math.floor((i - 10) / 2);
            return CharacterSavingThrows.Charisma;
        }
    }
}

document.getElementById('gCSTStr').innerHTML = getCharacterSavingThrowsStrength();
document.getElementById('gCSTDex').innerHTML = getCharacterSavingThrowsDexterity();
document.getElementById('gCSTCon').innerHTML = getCharacterSavingThrowsConstitution();
document.getElementById('gCSTInt').innerHTML = getCharacterSavingThrowsIntelligence();
document.getElementById('gCSTWis').innerHTML = getCharacterSavingThrowsWisdom();
document.getElementById('gCSTChar').innerHTML = getCharacterSavingThrowsCharisma();



// document.getElementById("CSSSS").innerHTML = CharacterStats.Strength;
// document.getElementById("CSTSSS").innerHTML = CharacterSavingThrows.Strength;
