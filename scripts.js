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


var tiers = ["Amatuer","Journeyman","Master","Artisan"]
var types = ["All","Slashing","Piercing","Bludgeoning","Arrows","Axes","Bows","Crossbows","Daggers","Glaives","Halberds","Hammers","Maces","Rapiers","Shield","Spear","Sword"]
var mods = ["Acute","Adaptive","Aegis","Black Armory","Bold","Brave","Breaker","Burst","Compound","Dauntless","Defiant","Deft","Duelist","Exploit","First Strike","Focus","Gamblers","Intercept","Killer","Lethal","Menace","Mighty","Noble","Opportune","Peerless","Protective","Reflexive","Rein","Silver","Slaying","Stalwart","Studded","Tower","Trample","Vigilance","Ward","Weighted"]

 $("select").change(function(){
 var d = $(this).find( "option:selected" ).text();
 $(this).next("input[type='text']").val(d);
});
