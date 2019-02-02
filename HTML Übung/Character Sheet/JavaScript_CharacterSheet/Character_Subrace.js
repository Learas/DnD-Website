// Working 02.02.2019 

document.getElementById('CharacterRace').addEventListener('input', getSubrace);

function getSubrace() {
    const Race = document.getElementById('CharacterRace');
    const Subrace = document.getElementById('CharacterSubrace');
    const Ancestry = document.getElementById('CharacterAncestry');
    const Dragonborn = document.getElementById('CharacterAncestry_Dragonborn');
    const Dwarf = document.getElementById('CharacterSubrace_Dwarf');
    const Elf = document.getElementById('CharacterSubrace_Elf');
    const Gnome = document.getElementById('CharacterSubrace_Gnome');
    const Halfling = document.getElementById('CharacterSubrace_Halfling');

    if (Race.options[Race.selectedIndex].value === 'Dragonborn' && Dragonborn.style.display === 'none') {
        Subrace.style.display = 'none';
        Ancestry.style.display = 'block'; 
        Dragonborn.style.display = 'block';
    } else {
        Subrace.style.display = 'block';
        Ancestry.style.display = 'none'; 
        Dragonborn.style.display = 'none';
    }
   
    if (Race.options[Race.selectedIndex].value === 'Dwarf' && Dwarf.style.display === 'none') {
        Dwarf.style.display = 'block';
    } else {
        Dwarf.style.display = 'none';
    }

    if (Race.options[Race.selectedIndex].value === 'Elf' && Elf.style.display === 'none') {
        Elf.style.display = 'block';
    } else {
        Elf.style.display = 'none';
    }

    if (Race.options[Race.selectedIndex].value === 'Gnome' && Gnome.style.display === 'none') {
        Gnome.style.display = 'block';
    } else {
        Gnome.style.display = 'none';
    }

    if (Race.options[Race.selectedIndex].value === 'Halfling' && Halfling.style.display === 'none') {
        Halfling.style.display = 'block';
    } else {
        Halfling.style.display = 'none';
    }

}

