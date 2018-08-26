//Objexts

var CharacterSheet = {
    Player: "",
    
    
    CharacterDetails: {
        Name: "",
        Race: {
            Name: "",
            Speed: 0,
            Size: "",
            RacialModifier: {
                Strength: 0,
                Dexterity: 0,
                Constitution: 0,
                Intelligence: 0,
                Wisdom: 0,
                Charisma: 0,
                Languages: "",
            }
        },

        Class: {
            Name: "",
            HitDice: 0,
            ArmorProficiency: "",
            WeaponProficiency: "",
            Saves: "",
        },

        Background: "",
        Feature: "",

        Alignment: "",
        
        Appearance: {
            Gender: "",
            Age: 0,

            Height: 0,
            Weight: 0,
            Eyes: "",
            Hair: "",
        },
    
        Vision: "",
      
    },

    Experience: 0,
    Level: 1,

    ProficiencyBonus: 1,

    AbilityScores: {
        Strength: 14,
        Dexterity: 10,
        Constitution: 19,
        Intelligence: 8,
        Wisdom: 7,
        Charisma: 13,
    },

    Initative: 0,

    AbilityModifier: {
        Strength: 0,
        Dexterity: 0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0,
    },

    Skills: {
        Acrobatics: 0,
        AnimalHandling: 0,
        Acrana: 0,
        Athletics: 0,
        Deception: 0,
        History: 0,
        Insight: 0,
        Intimidation: 0,
        Investigation: 0,
        Medicine: 0,
        Nature: 0,
        Perception: 0,
        Performance: 0,
        Persuasion: 0,
        Religion: 0,
        SleightofHand: 0,
        Stealth: 0,
        Survival: 0,
    },

    ProficientSkills: "",
    PassivePerception: 10,


    // Armor Class, Armour Class
    AC: 0,

    ArmorEquipped: "",


    //Hit Points
    HP: {
        TotalHP: 0,
        CurrentHP: 0,
    },

//Coins, Money, Gold
    Coins: {
        Platinum: 0,
        Gold: 0,
        Electrum: 0,
        Silver: 0,
        Copper: 0,
    },

    CarryingCapacity: 0,

    Attack: 1,
    
    WeaponsEquipped: "",

    ItemsEquipped: "",
    Tools: "",

    //Spells, Magic, Sorcery
    SpellSlots: {
        Level1: 0,
        Level2: 0,
        Level3: 0,
        Level4: 0,
        Level5: 0,
        Level6: 0,
        Level7: 0,
        Level8: 0,
        Level9: 0,
    },

    AnimalFamiliar: "",

    Conditions: "",

    Resistances: "",
};


var ChracterClass = {
    Name: "",
    HitDie: "",
    SavingThrowsProficiency: "",
    ArmorProfiviency: "",
    WeaponProficiency: "",
    Tools: "",
    Skills: "",
}

var 