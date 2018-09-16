// Objexts
//Class Characters

class CharacterSheet = {
    this._Player = playerName,
    
    this._CharacterDetails = {
        this._Name = characterName,
        this._Race = {
            this._Name = '',
            this._Speed = 0,
            this._Size = '',
            this._RacialModifier = {
                this._Strength = 0,
                this._Dexterity = 0,
                this._Constitution = 0,
                this._Intelligence = 0,
                this._Wisdom = 0,
                this._Charisma = 0,
                this._Languages = '',
            },
        },

        this._Class = {
            this._Name = '',
            this._HitDice = 0,
            this._ArmorProficiency = '',
            this._WeaponProficiency = '',
            this._Saves = '',
        },

        this._Background = '',
        this._Feature = '',

        this._Alignment = '',
        
        this._Appearance = {
            this._Gender = '',
            this._Age = 0,

            this._Height = 0,
            this._Weight = 0,
            this._Eyes = '',
            this._Hair = '',
        },
    
        this._Vision = '',
      
    },

    this._Experience = 0,
    this._Level = 1,

    this._ProficiencyBonus = 1,

    this._AbilityScores = {
        this._Strength = 14,
        this._Dexterity = 10,
        this._Constitution = 19,
        this._Intelligence = 8,
        this._Wisdom = 7,
        this._Charisma = 13,
    },
    
    this._Initative = 0,

    this._AbilityModifier = {
        this._Strength = 0,
        this._Dexterity = 0,
        this._Constitution = 0,
        this._Intelligence = 0,
        this._Wisdom = 0,
        this._Charisma = 0,
    },

    this._Skills = {
        this._Acrobatics = 0,
        this._AnimalHandling = 0,
        this._Acrana = 0,
        this._Athletics = 0,
        this._Deception = 0,
        this._History = 0,
        this._Insight = 0,
        this._Intimidation = 0,
        this._Investigation = 0,
        this._Medicine = 0,
        this._Nature = 0,
        this._Perception = 0,
        this._Performance = 0,
        this._Persuasion = 0,
        this._Religion = 0,
        this._SleightofHand = 0,
        this._Stealth = 0,
        this._Survival = 0,
    },
    
    this._ProficientSkills = '',
    this._PassivePerception = 10,

    // Armor Class, Armour Class
    this._AC = 0,

    this._ArmorEquipped = '',

    // Hit Points
    this._HP = {
        this._TotalHP = 0,
        this._CurrentHP = 0,
    },

    // Coins, Money, Gold
    this._Coins = {
        this._Platinum = 0,
        this._Gold = 0,
        this._Electrum = 0,
        this._Silver = 0,
        this._Copper = 0,
    },

    this._CarryingCapacity = 0,

    this._Attack = 1,
    
    this._WeaponsEquipped = '',

    this._ItemsEquipped = '',
    this._Tools = '',

    // Spells, Magic, Sorcery
    this._SpellSlots = {
        this._Level1 = 0,
        this._Level2 = 0,
        this._Level3 = 0,
        this._Level4 = 0,
        this._Level5 = 0,
        this._Level6 = 0,
        this._Level7 = 0,
        this._Level8 = 0,
        this._Level9 = 0,
    },

    this._AnimalFamiliar = '',

    this._Conditions = '',

    this._Resistances = '',
};
