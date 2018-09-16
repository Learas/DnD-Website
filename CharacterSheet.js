// Character Sheet

// Standard Values

// functions
function CharacterDetails(characterName) {
    this.Name = characterName;
    CharacterSheetRace.call(this, RacialModifier);
    // this.CharacterSheetRace = CharacterSheetRace;

    // this.CharacterSheetClass = CharacterSheetClass;

    CharacterSheetClass.call(this);

    this.Background = '';
    this.Feature = '';

    this.Alignment = '';
    
    // this.Appearance = Appearance,
    Appearance.call(this);

    this.Vision = '';
}

// CharacterDetails

function CharacterSheetRace(RaceName, RaceSpeed, RaceSize) {
    this.RaceName = RaceName;
    this.RaceSpeed = RaceSpeed;
    this.RaceSize = RaceSize;
    this.RacialModifier = RacialModifier;
}

function RacialModifier() {
    this.RacialModifierStrength = 0;
    this.RacialModifierDexterity = 0;
    this.RacialModifierConstitution = 0;
    this.RacialModifierIntelligence = 0;
    this.RacialModifierWisdom = 0;
    this.RacialModifierCharisma = 0;
    this.RacialModifierLanguages = '';
}

function CharacterSheetClass() {
    this.Name = '';
    this.HitDice = 0;
    this.ArmorProficiency = '';
    this.WeaponProficiency = '';
    this.Saves = '';  
}

function Appearance() {
    this.Gender = '';
    this.Age = 0;

    this.Height = 0;
    this.Weight = 0;
    this.Eyes = '';
    this.Hair = '';
}

// End CharacterDetails

function AbilityScores() {
    this.Strength = 14;
    this.Dexterity = 10;
    this.Constitution = 19;
    this.Intelligence = 8;
    this.Wisdom = 7;
    this.Charisma = 13;
}

function AbilityModifier() {
    this.Strength = 0;
    this.Dexterity = 0;
    this.Constitution = 0;
    this.Intelligence = 0;
    this.Wisdom = 0;
    this.Charisma = 0;
}

function Skills() {
    this.Acrobatics = 0;
    this.AnimalHandling = 0;
    this.Acrana = 0;
    this.Athletics = 0;
    this.Deception = 0;
    this.History = 0;
    this.Insight = 0;
    this.Intimidation = 0;
    this.Investigation = 0;
    this.Medicine = 0;
    this.Nature = 0;
    this.Perception = 0;
    this.Performance = 0;
    this.Persuasion = 0;
    this.Religion = 0;
    this.SleightofHand = 0;
    this.Stealth = 0;
    this.Survival = 0;
}

function HP() {
    this.TotalHP = 0;
    this.CurrentHP = 0;
}

function Coins() {
    this.Platinum = 0;
    this.Gold = 0;
    this.Electrum = 0;
    this.Silver = 0;
    this.Copper = 0;
}

function NumberSpellSlots() {
    this.Level1 = 0;
    this.Level2 = 0;
    this.Level3 = 0;
    this.Level4 = 0;
    this.Level5 = 0;
    this.Level6 = 0;
    this.Level7 = 0;
    this.Level8 = 0;
    this.Level9 = 0;
}

// Objexts
// Class Characters

function CharacterSheet(playerName) {
    this.Player = playerName;
    
    this.CharacterDetails = CharacterDetails;

    this.Experience = 0;
    this.Level = 1;

    this.ProficiencyBonus = 1;

    this.AbilityScores = AbilityScores;
    
    this.Initative = 0;

    this.AbilityModifier = AbilityModifier;

    this.Skills = Skills;
    
    this.ProficientSkills = '';
    this.PassivePerception = 10;

    // Armor Class; Armour Class
    this.AC = 0;

    this.ArmorEquipped = '';

    // Hit Points
    // this.HP = HP;

    HP.call(this);

    // Coins; Money; Gold
    this.Coins = Coins;

    this.CarryingCapacity = 0;

    this.Attack = 1;
    
    this.WeaponsEquipped = '';

    this.ItemsEquipped = '';
    this.Tools = '';

    // Spells; Magic; Sorcery
    this.NumberSpellSlots = NumberSpellSlots;

    this.AnimalFamiliar = '';

    this.Conditions = '';

    this.Resistances = '';
}
