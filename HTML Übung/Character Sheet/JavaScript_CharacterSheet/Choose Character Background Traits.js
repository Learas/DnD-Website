// Working 31.07.2019 - Not finished

document.getElementById('CharacterBackground').addEventListener('input', getTraits);

function getTraits() {
    const Background = document.getElementById('CharacterBackground');
    const Acolyte = document.getElementById('PersonalityTrait_Acolyte');

    if (Background.options[Background.selectedIndex].value === 'Acolyte' && Acolyte.style.display === 'none') {
        Acolyte.style.display = 'block';
    } else {
        Acolyte.style.display = 'none';
    }
}
