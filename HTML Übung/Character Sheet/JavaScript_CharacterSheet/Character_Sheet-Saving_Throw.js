document.getElementById("ExperiencePoints").addEventListener("input", ChangeExperience);

document.getElementById("AbilityScoreStrength").addEventListener("input", getSavingThrow);
document.getElementById("AbilityScoreDexterity").addEventListener("input", getSavingThrow);
document.getElementById("AbilityScoreConstitution").addEventListener("input", getSavingThrow);
document.getElementById("AbilityScoreIntelligence").addEventListener("input", getSavingThrow);
document.getElementById("AbilityScoreWisdom").addEventListener("input", getSavingThrow);
document.getElementById("AbilityScoreCharisma").addEventListener("input", getSavingThrow);

document.getElementById("CheckboxSavingThrowStrength").addEventListener("input", getSavingThrow);
document.getElementById("CheckboxSavingThrowDexterity").addEventListener("input", getSavingThrow);
document.getElementById("CheckboxSavingThrowConstitution").addEventListener("input", getSavingThrow);
document.getElementById("CheckboxSavingThrowIntelligence").addEventListener("input", getSavingThrow);
document.getElementById("CheckboxSavingThrowWisdom").addEventListener("input", getSavingThrow);
document.getElementById("CheckboxSavingThrowCharisma").addEventListener("input", getSavingThrow);

function getSavingThrow () {
    
    function getSavingThrowStrength () {
        var SavingThrowStrength = 0;
        var StrengthCheckbox = document.getElementById("CheckboxSavingThrowStrength")
        if (StrengthCheckbox.checked == true) {
            SavingThrowStrength = ProficencyBonus + AbilityScoreModifierStrength;
        } else {
            SavingThrowStrength = AbilityScoreModifierStrength;
        };
        return SavingThrowStrength;
    };
    function getSavingThrowDexterity () {
        var SavingThrowDexterity = 0;
        var DexterityCheckbox = document.getElementById("CheckboxSavingThrowDexterity")
        if (DexterityCheckbox.checked == true) {
            SavingThrowDexterity = ProficencyBonus + AbilityScoreModifierDexterity;
        } else {
            SavingThrowDexterity = AbilityScoreModifierDexterity;
        };
        return SavingThrowDexterity;
    };
    function getSavingThrowConstitution () {
        var SavingThrowConstitution = 0;
        var ConstitutionCheckbox = document.getElementById("CheckboxSavingThrowConstitution")
        if (ConstitutionCheckbox.checked == true) {
            SavingThrowConstitution = ProficencyBonus + AbilityScoreModifierConstitution;
        } else {
            SavingThrowConstitution = AbilityScoreModifierConstitution;
        };
        return SavingThrowConstitution;
    };
    function getSavingThrowIntelligence () {
        var SavingThrowIntelligence = 0;
        var IntelligenceCheckbox = document.getElementById("CheckboxSavingThrowIntelligence")
        if (IntelligenceCheckbox.checked == true) {
            SavingThrowIntelligence = ProficencyBonus + AbilityScoreModifierIntelligence;
        } else {
            SavingThrowIntelligence = AbilityScoreModifierIntelligence;
        };
        return SavingThrowIntelligence;
    };
    function getSavingThrowWisdom () {
        var SavingThrowWisdom = 0;
        var WisdomCheckbox = document.getElementById("CheckboxSavingThrowWisdom")
        if (WisdomCheckbox.checked == true) {
            SavingThrowWisdom = ProficencyBonus + AbilityScoreModifierWisdom;
        } else {
            SavingThrowWisdom = AbilityScoreModifierWisdom;
        };
        return SavingThrowWisdom;
    };
    function getSavingThrowCharisma () {
        var SavingThrowCharisma = 0;
        var CharismaCheckbox = document.getElementById("CheckboxSavingThrowCharisma")
        if (CharismaCheckbox.checked == true) {
            SavingThrowCharisma = ProficencyBonus + AbilityScoreModifierCharisma;
        } else {
            SavingThrowCharisma = AbilityScoreModifierCharisma;
        };
        return SavingThrowCharisma;
    };
    
    document.getElementById('SavingThrowStrength').innerHTML = getSavingThrowStrength();
    document.getElementById('SavingThrowDexterity').innerHTML = getSavingThrowDexterity();
    document.getElementById('SavingThrowConstitution').innerHTML = getSavingThrowConstitution();
    document.getElementById('SavingThrowIntelligence').innerHTML = getSavingThrowIntelligence();
    document.getElementById('SavingThrowWisdom').innerHTML = getSavingThrowWisdom();
    document.getElementById('SavingThrowCharisma').innerHTML = getSavingThrowCharisma();

};