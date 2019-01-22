function getSavingThrow () {
    
    function getSavingThrowStrength () {
        var SavingThrowStrength = 2;
        var StrengthCheckbox = document.getElementById("CheckboxSavingThrowStrength")
        if (StrengthCheckbox.checked == true) {
            SavingThrowStrength = ProficencyBonus + AbilityScoreModifierStrength;
        } else {
            SavingThrowStrength = AbilityScoreModifierStrength;
        };
        return SavingThrowStrength;
    };
    function getSavingThrowDexterity () {

    };
    function getSavingThrowConstitution () {

    };
    function getSavingThrowIntelligence () {

    };
    function getSavingThrowWisdom () {

    };
    function getSavingThrowCharisma () {

    };
    
    document.getElementById('SavingThrowStrength').innerHTML = getSavingThrowStrength();


};