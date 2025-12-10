// Weapons
class Weapon {
    constructor(name, tier, restriction, effect) {
        this.name = name;
        this.tier = tier;
        this.restriction = restriction;
        this.effect = effect;
    }
    getName() {
        return this.name;
    }
    getTier() {
        return this.tier;
    }
    getRestrict() {
        return this.restriction;
    }
    getEffect() {
        return this.effect;
    }
}

const adaptive = new Weapon("Adaptive", "Amatuer", ['All'], "When you fail an attack roll against a creature, roll a 1d6 and add that to your next melee attack roll you make against that same creature. You may use this modification a number of times equal to your INT modifier to a minimum of 1. Uses replenish after a short rest.");
document.getElementById("adaptive-name").textContent = adaptive.name;
document.getElementById("adaptive-tier").textContent = adaptive.tier;
document.getElementById("adaptive-restrict").textContent = adaptive.restriction;
document.getElementById("adaptive-effect").textContent = adaptive.effect;

const dauntless = new Weapon("Dauntless", "Amatuer", ['Piercing'], "Inflict the impaired condition when you successfully hit a creature with this weapon.");
document.getElementById("dauntless-name").textContent = dauntless.name;
document.getElementById("dauntless-tier").textContent = dauntless.tier;
document.getElementById("dauntless-restrict").textContent = dauntless.restriction;
document.getElementById("dauntless-effect").textContent = dauntless.effect;

const exploit = new Weapon("Exploit", "Amatuer", ['All'], "When the target creature is flanked, gain +2 to attack rolls.");
document.getElementById("exploit-name").textContent = exploit.name;
document.getElementById("exploit-tier").textContent = exploit.tier;
document.getElementById("exploit-restrict").textContent = exploit.restriction;
document.getElementById("exploit-effect").textContent = exploit.effect;

const mighty = new Weapon("Mighty", "Amatuer", ['Bludgeoning'], "When an attack is successfully made with this weapon to either a construct, a creature wearing heavy armor, or a creature protected by heavy natural armor such as chiton, this weapon deals additional damage equal to your proficiency bonus. Heavy armor includes half plate and scale mail for this purpose of this modification.");
document.getElementById("mighty-name").textContent = mighty.name;
document.getElementById("mighty-tier").textContent = mighty.tier;
document.getElementById("mighty-restrict").textContent = mighty.restriction;
document.getElementById("mighty-effect").textContent = mighty.effect;

const rein = new Weapon("Rein", "Amatuer", ['Bows', 'Crossbows'], "When dealing damage with this weapon, apply rein(1)");
document.getElementById("rein-name").textContent = rein.name;
document.getElementById("rein-tier").textContent = rein.tier;
document.getElementById("rein-restrict").textContent = rein.restriction;
document.getElementById("rein-effect").textContent = rein.effect;

const slaying = new Weapon("Slaying", "Amatuer", ['Slashing'], "Inflict the bleed condition upon your target when you successfully hit a creature that you have dealt damage to with this weapon during this combat. This triggers once per turn.");
document.getElementById("slaying-name").textContent = slaying.name;
document.getElementById("slaying-tier").textContent = slaying.tier;
document.getElementById("slaying-restrict").textContent = slaying.restriction;
document.getElementById("slaying-effect").textContent = slaying.effect;

const steadfast = new Weapon("Steadfast", "Amatuer", ['One-handed'], "Once per short rest, when you take the attack action, you may roll 2d0s for one attack. Prior to rolling, select one of the d20s to be your attack roll for this attack. Record the result of the die not chosen. You may substitute the result of one attack roll made with this weapon until your next rest.");
document.getElementById("steadfast-name").textContent = steadfast.name;
document.getElementById("steadfast-tier").textContent = steadfast.tier;
document.getElementById("steadfast-restrict").textContent = steadfast.restriction;
document.getElementById("steadfast-effect").textContent = steadfast.effect;

const studded = new Weapon("Studded", "Amatuer", ['Shield'], "As a bonus action, a player may make an attack roll with thier shield using thier Strength modifier. On a hit, deal 1d4 bludgeoning damage and the target is inflicted with the impaired condition.");
document.getElementById("studded-name").textContent = studded.name;
document.getElementById("studded-tier").textContent = studded.tier;
document.getElementById("studded-restrict").textContent = studded.restriction;
document.getElementById("studded-effect").textContent = studded.effect;

const acute = new Weapon("Acute", "Journeyman", ['Rapier'], "When you deal damage to a creature, if the target is impaired, add your proficiency bonus to the damage dealt. If the creature is not impaired, apply the condition.");
document.getElementById("acute-name").textContent = acute.name;
document.getElementById("acute-tier").textContent = acute.tier;
document.getElementById("acute-restrict").textContent = acute.restriction;
document.getElementById("acute-effect").textContent = acute.effect;

const aegis = new Weapon("Aegis", "Journeyman", ['Shield'], "When you make a successful attack that makes use of the weapons range property, while you are out the of melee range of your target, you inflict the impaired condition and add your proficiency bonus to the deal.");
document.getElementById("aegis-name").textContent = aegis.name;
document.getElementById("aegis-tier").textContent = aegis.tier;
document.getElementById("aegis-restrict").textContent = aegis.restriction;
document.getElementById("aegis-effect").textContent = aegis.effect;

const breaker = new Weapon("Breaker", "Journeyman", ['Hammers'], "When dealing damage with a breaker weapon, if the target is smaller or the same size as the user, you may force the target to move 5ft in any direction other than into your square.");
document.getElementById("breaker-name").textContent = breaker.name;
document.getElementById("breaker-tier").textContent = breaker.tier;
document.getElementById("breaker-restrict").textContent = breaker.restriction;
document.getElementById("breaker-effect").textContent = breaker.effect;

const brutal = new Weapon("Brutal", "Journeyman", ['Greatsword', 'Maul'], "Once per short rest, after you roll damage, you may have one die copy the result of the other. (Greatswords and Mauls use 2d6 damage.)");
document.getElementById("brutal-name").textContent = brutal.name;
document.getElementById("brutal-tier").textContent = brutal.tier;
document.getElementById("brutal-restrict").textContent = brutal.restriction;
document.getElementById("brutal-effect").textContent = brutal.effect;

const burst = new Weapon("Burst", "Journeyman", ['All'], "Meter. When the wielder deals damage that would grant them the flow state condition, they deal an extra 1d8 (1h) or 1d10 (2h) damage to the target. The wielder loses the flow state condition, and the meter is set to 0. The damage dealt type by this effect is equal to the weapons damage type.");
document.getElementById("burst-name").textContent = burst.name;
document.getElementById("burst-tier").textContent = burst.tier;
document.getElementById("burst-restrict").textContent = burst.restriction;
document.getElementById("burst-effect").textContent = burst.effect;

const deft = new Weapon("Deft", "Journeyman", ['Dagger'], "When you make a successful attack with a dagger using your attack action you may make an additional attack with that weapon with advantage. The damage from this attack does not add modifiers, but applies the bleed condition.");
document.getElementById("deft-name").textContent = deft.name;
document.getElementById("deft-tier").textContent = deft.tier;
document.getElementById("deft-restrict").textContent = deft.restriction;
document.getElementById("deft-effect").textContent = deft.effect;

const domain = new Weapon("Domain", "Journeyman", ['GL' , 'HB', 'LC'], "Once per turn, you may make a melee weapon attack against a creature 10 ft. away from you. If you do, incur a -3 to your AC when a creature attacks you from 5 ft. away.");
document.getElementById("domain-name").textContent = domain.name;
document.getElementById("domain-tier").textContent = domain.tier;
document.getElementById("domain-restrict").textContent = domain.restriction;
document.getElementById("domain-effect").textContent = domain.effect;

const duelist = new Weapon("Duelist", "Journeyman", ['Swords'], "When there are three creatures or less within ten feet of you, you gain +1 to your AC and you may add your proficiency bonus to damage dealt.");
document.getElementById("duelist-name").textContent = duelist.name;
document.getElementById("duelist-tier").textContent = duelist.tier;
document.getElementById("duelist-restrict").textContent = duelist.restriction;
document.getElementById("duelist-effect").textContent = duelist.effect;

const focused = new Weapon("Focused", "Journeyman", ['All'], "When you achieve flow state, you gain + 1 to all of your saving throws.");
document.getElementById("focused-name").textContent = focused.name;
document.getElementById("focused-tier").textContent = focused.tier;
document.getElementById("focused-restrict").textContent = focused.restriction;
document.getElementById("focused-effect").textContent = focused.effect;

const gamblers = new Weapon("Gamblers", "Journeyman", ['All'], "When you deal damage with this weapon, you may reroll the damage die once per attack. If you do, you must use the result. You may use this feature an equal amount of times to your intelligence modifier. Uses replenish on a long rest.");
document.getElementById("gamblers-name").textContent = gamblers.name;
document.getElementById("gamblers-tier").textContent = gamblers.tier;
document.getElementById("gamblers-restrict").textContent = gamblers.restriction;
document.getElementById("gamblers-effect").textContent = gamblers.effect;

const hazardous = new Weapon("Hazardous", "Journeyman", ['Axes'], "Once per turn, when you make a weapon attack you may add your skill to the damage dealt. If you do, incur a -X to your attack roll; where X equals 5 - your CON modifier.");
document.getElementById("hazardous-name").textContent = hazardous.name;
document.getElementById("hazardous-tier").textContent = hazardous.tier;
document.getElementById("hazardous-restrict").textContent = hazardous.restriction;
document.getElementById("hazardous-effect").textContent = hazardous.effect;

const intercept = new Weapon("Intercept", "Journeyman", ['Shield'], "As a reaction, when an ally takes damage, roll 1d4 + your STR mod and reduce the damage taken by that amount.");
document.getElementById("intercept-name").textContent = intercept.name;
document.getElementById("intercept-tier").textContent = intercept.tier;
document.getElementById("intercept-restrict").textContent = intercept.restriction;
document.getElementById("intercept-effect").textContent = intercept.effect;

const killer = new Weapon("Killer", "Journeyman", ['All'], "This weapon increases your critical range by 1 (i.e. 20 to 19).");
document.getElementById("killer-name").textContent = killer.name;
document.getElementById("killer-tier").textContent = killer.tier;
document.getElementById("killer-restrict").textContent = killer.restriction;
document.getElementById("killer-effect").textContent = killer.effect;

const lethal = new Weapon("Lethal", "Journeyman", ['All'], "When landing a critical hit, the extra die rolled are automatically max value.");
document.getElementById("lethal-name").textContent = lethal.name;
document.getElementById("lethal-tier").textContent = lethal.tier;
document.getElementById("lethal-restrict").textContent = lethal.restriction;
document.getElementById("lethal-effect").textContent = lethal.effect;

const menace = new Weapon("Menace", "Journeyman", ['Axes', 'Halberds'], "When dealing damage to a creature with the bloodied condition, this weapon deals damage equal to your proficiency bonus.");
document.getElementById("menace-name").textContent = menace.name;
document.getElementById("menace-tier").textContent = menace.tier;
document.getElementById("menace-restrict").textContent = menace.restriction;
document.getElementById("menace-effect").textContent = menace.effect;

const opportune = new Weapon("Opportune", "Journeyman", ['All'], "When making an opportunity attack, gain +1 to hit and +1d6 damage matching your weapons damage type. Ignores any ability that prevents attacks of opportunity.");
document.getElementById("opportune-name").textContent = opportune.name;
document.getElementById("opportune-tier").textContent = opportune.tier;
document.getElementById("opportune-restrict").textContent = opportune.restriction;
document.getElementById("opportune-effect").textContent = opportune.effect;

const reflexive = new Weapon("Reflexive", "Journeyman", ['Dagger', 'Rapier'], "Meter. When you achieve flow state you gain +2 to your AC until you are hit by an attack that would otherwise hit you if not for this ability. When this triggers, you lose flow state and your meter is reset to 0.");
document.getElementById("reflexive-name").textContent = reflexive.name;
document.getElementById("reflexive-tier").textContent = reflexive.tier;
document.getElementById("reflexive-restrict").textContent = reflexive.restriction;
document.getElementById("reflexive-effect").textContent = reflexive.effect;

const silver = new Weapon("Silver", "Journeyman", ['All'], "Silver weapons bypass targets resistance or immunity to non-silvered weapons, when applicable.");
document.getElementById("silver-name").textContent = silver.name;
document.getElementById("silver-tier").textContent = silver.tier;
document.getElementById("silver-restrict").textContent = silver.restriction;
document.getElementById("silver-effect").textContent = silver.effect;

const stalwart = new Weapon("Stalwart", "Journeyman", ['Shield'], "When flanked, this shield reduces incoming attack bonuses received from flanking by up to 4.");
document.getElementById("stalwart-name").textContent = stalwart.name;
document.getElementById("stalwart-tier").textContent = stalwart.tier;
document.getElementById("stalwart-restrict").textContent = stalwart.restriction;
document.getElementById("stalwart-effect").textContent = stalwart.effect;

const tower = new Weapon("Tower", "Journeyman", ['Shield'], "This shields weight is doubled. You receive a +1 to AC when attacked from range.");
document.getElementById("tower-name").textContent = tower.name;
document.getElementById("tower-tier").textContent = tower.tier;
document.getElementById("tower-restrict").textContent = tower.restriction;
document.getElementById("tower-effect").textContent = tower.effect;

const weighted = new Weapon("Weighted", "Journeyman", ['Daggers'], "When you throw this weapon with an attack action, add +2 to the attack and damage roll. Dealing damage causes the bleed condition.");
document.getElementById("weighted-name").textContent = weighted.name;
document.getElementById("weighted-tier").textContent = weighted.tier;
document.getElementById("weighted-restrict").textContent = weighted.restriction;
document.getElementById("weighted-effect").textContent = weighted.effect;

const defiant = new Weapon("Defiant", "Master", ['All'], "Masterwork. Meter. When you achieve flow state, your armor class increases by 1 and you deal 1d4 damage when you hit a creature while you have this condition. This abilities damage type is equal to your weapons damage type. You may expend your meter and attack one additional time that same turn when you take the attack action.");
document.getElementById("defiant-name").textContent = defiant.name;
document.getElementById("defiant-tier").textContent = defiant.tier;
document.getElementById("defiant-restrict").textContent = defiant.restriction;
document.getElementById("defiant-effect").textContent = defiant.effect;

const firstStrike = new Weapon("First Strike", "Master", ['Piercing'], "Masterwork. When a creature enters your melee range, you make make an attack of opportunity at it. If an impaired creature makes a melee weapon attack against you, impose disadvantage on that creature. You may use this modification equal to your skill with this weapon.");
document.getElementById("firstStrike-name").textContent = firstStrike.name;
document.getElementById("firstStrike-tier").textContent = firstStrike.tier;
document.getElementById("firstStrike-restrict").textContent = firstStrike.restriction;
document.getElementById("firstStrike-effect").textContent = firstStrike.effect;

const noble = new Weapon("Noble", "Master", ['All'], "Masterwork. This weapon increases your critical range by 1 (i.e. 20 to 19).  Once per turn, you may add your skill to the hit roll of this weapons attack.");
document.getElementById("noble-name").textContent = noble.name;
document.getElementById("noble-tier").textContent = noble.tier;
document.getElementById("noble-restrict").textContent = noble.restriction;
document.getElementById("noble-effect").textContent = noble.effect;

const peerless = new Weapon("Peerless", "Master", ['All'], "Masterwork. Once per turn, when dealing damage, if the die rolled is less than the dices average value, roll again and take the higher of the two rolls. Add your skill to the damage.");
document.getElementById("peerless-name").textContent = peerless.name;
document.getElementById("peerless-tier").textContent = peerless.tier;
document.getElementById("peerless-restrict").textContent = peerless.restriction;
document.getElementById("peerless-effect").textContent = peerless.effect;

const protective = new Weapon("Protective", "Master", ['All'], "Masterwork. Meter. When you achieve flow state, You gain +1 to hit and +1 to AC. When you make a saving throw, you can expend flow state to gain a +5 to a saving throw.");
document.getElementById("protective-name").textContent = protective.name;
document.getElementById("protective-tier").textContent = protective.tier;
document.getElementById("protective-restrict").textContent = protective.restriction;
document.getElementById("protective-effect").textContent = protective.effect;

const trample = new Weapon("Trample", "Master", ['Bludgeoning'], "?????");
document.getElementById("trample-name").textContent = trample.name;
document.getElementById("trample-tier").textContent = trample.tier;
document.getElementById("trample-restrict").textContent = trample.restriction;
document.getElementById("trample-effect").textContent = trample.effect;

const vigilance = new Weapon("Vigilance", "Master", ['Slashing'], "Masterwork. Bleed effects applied by this weapon use a 1d4 instead of a 1d3. Creatures with stacks of bleed, have a -1 to hit against the wielder of this weapon.");
document.getElementById("vigilance-name").textContent = vigilance.name;
document.getElementById("vigilance-tier").textContent = vigilance.tier;
document.getElementById("vigilance-restrict").textContent = vigilance.restriction;
document.getElementById("vigilance-effect").textContent = vigilance.effect;

const ward = new Weapon("Ward", "Master", ['Shield'], "Masterwork.You do not take extra damage from critical hits.");
document.getElementById("ward-name").textContent = ward.name;
document.getElementById("ward-tier").textContent = ward.tier;
document.getElementById("ward-restrict").textContent = ward.restriction;
document.getElementById("ward-effect").textContent = ward.effect;

const blackArmory = new Weapon("Black Armory", "Artisan", ['Axes', 'Swords', 'Hammers'], "As a bonus action, a player may pull the trigger releasing the oil to coat their weapon. This process will take until the beginning of their next turn. As a free action, the player may spark the weapon. When enveloped in fire the weapon illuminates light 10 feet in radius and dim light for another 5 feet. This weapon remains lit for 1 minute (10 rounds). Additionally, when dealing damage with this weapon, deal an additional 1d4 fire damage. These weapons require the user to refill the oil reservoir after each use. Oil flasks are sold by the pint, which can be used to fill coat the weapon two times. Refueling the weapon requires an action.");
document.getElementById("blackArmory-name").textContent = blackArmory.name;
document.getElementById("blackArmory-tier").textContent = blackArmory.tier;
document.getElementById("blackArmory-restrict").textContent = blackArmory.restriction;
document.getElementById("blackArmory-effect").textContent = blackArmory.effect;

const compound = new Weapon("Compound", "Artisan", ['Longbow', 'Shortbow'], "When dealing damage to a target, add your skill value to the damage dealt.");
document.getElementById("compound-name").textContent = compound.name;
document.getElementById("compound-tier").textContent = compound.tier;
document.getElementById("compound-restrict").textContent = compound.restriction;
document.getElementById("compound-effect").textContent = compound.effect;

//Weapon Modification Template
//const blank = new Weapon("Name", "Tier", ['XX', 'XX'], "Effect");
//document.getElementById("blank-name").textContent = blank.name;
//document.getElementById("blank-tier").textContent = blank.tier;
//document.getElementById("blank-restrict").textContent = blank.restriction;
//document.getElementById("blank-effect").textContent = blank.effect;

//Weapon Mod Searchbox
function searchForWeaponMod() {
  var input = document.getElementById("weaponSearch");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('weaponChild');

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "flex";
    } else {
      nodes[i].style.display = "none";
    }
  }
}


//Tool Tips
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tooltip-id]').forEach(el => {
    const id = el.getAttribute('data-tooltip-id');
    const tooltipText = document.querySelector(`#tooltips #${id}`)?.textContent || '';
    el.setAttribute('data-tooltip', tooltipText);
  });
});

const selector = document.getElementById('display-selector');
const displays = document.querySelectorAll('.data-display');

selector.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  displays.forEach(display => {
    if (display.getAttribute('data-content') === selectedValue) {
      display.style.display = 'block';
    } else {
      display.style.display = 'none';
    }
  });
});

 $("select").change(function(){
 var d = $(this).find( "option:selected" ).text();
 $(this).next("input[type='text']").val(d);
});

//Campaign Diary

function changeText01(text) {
  document.getElementById('session01').innerHTML=text;
}

function changeText02(text) {
  document.getElementById('session02').innerHTML=text;
}

function changeText03(text) {
  document.getElementById('session03').innerHTML=text;
}

function changeText04(text) {
  document.getElementById('session04').innerHTML=text;
}


// Searchable Table
function modFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("modInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("modTable");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



