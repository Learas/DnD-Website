// Experience to Level

function ChangeLevel() {

    const ExperiencePoints = document.getElementById('ExperiencePoints').value;
    let CharacterLevel = 0;

    function ExperienceToLevel() {
        if (ExperiencePoints < 300) {
            CharacterLevel = 1;
            return CharacterLevel;
        } else if (ExperiencePoints < 900) {
            CharacterLevel = 2;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 2700) {
            CharacterLevel = 3;
            return CharacterLevel;
        } else if (ExperiencePoints < 6500) {
            CharacterLevel = 4;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 14000) {
            CharacterLevel = 5;
            return CharacterLevel;
        } else if (ExperiencePoints < 23000) {
            CharacterLevel = 6;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 34000) {
            CharacterLevel = 7;
            return CharacterLevel;
        } else if (ExperiencePoints < 48000) {
            CharacterLevel = 8;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 64000) {
            CharacterLevel = 9;
            return CharacterLevel;
        } else if (ExperiencePoints < 85000) {
            CharacterLevel = 10;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 100000) {
            CharacterLevel = 11;
            return CharacterLevel;
        } else if (ExperiencePoints < 120000) {
            CharacterLevel = 12;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 140000) {
            CharacterLevel = 13;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 165000) {
            CharacterLevel = 14;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 195000) {
            CharacterLevel = 15;
            return CharacterLevel;
        } else if (ExperiencePoints < 225000) {
            CharacterLevel = 16;
            return CharacterLevel;
        } else if (ExperiencePoints < 265000) {
            CharacterLevel = 17;
            return CharacterLevel;
        }
        else if (ExperiencePoints < 305000) {
            CharacterLevel = 18;
            return CharacterLevel;
        } else if (ExperiencePoints < 355000) {
            CharacterLevel = 19;
            return CharacterLevel;
        } else {
            CharacterLevel = 20;
            return CharacterLevel;
        }
    }

    document.getElementById('CharacterLevel').innerHTML = ExperienceToLevel();

}
