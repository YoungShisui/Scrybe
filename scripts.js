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

function session01() {
  var x = document.getElementById("session01");
  if (x.innerHTML === "<b>Dungeon Master: </b><em>When last we left our heroes…</em> The adventure begun one chilly morning outside the Southern guard outpost of Eberard. First to arrive was the half-elf fighter Kaelin, then the Al’ Setseri rogue Shamshir. Third to arrive was the Eridonian Siegward, a cleric of Austere and member of the Order of the Sacred Flame. Last to arrive was Beans, a young human rogue with a taste for alcohol. As the group was waiting to hear from the herald from Greyll, a dwarf, a woman in robes, and a woman with a battleaxe departed the guard outpost. The woman in robes told the party to go home and that they would be the ones completing the quest. The heroes then went inside to hear the heralds tale. The barons son John Rivers had been missing after chasing after a pack of bhrulk with his two retainers. Determined to collect the 1,500 gold reward for returning the son to the baron the party heads forth after a warning from the herald about undead attacks on the town. The party heads Southeast to Greyll when they encounter the dwarf and two women from before waiting to ambush the party. A fight ensues and the heroes easily defeat their attackers. After two more days of travel the party arrives to the gates of Greyll where they are set up by undead. Beans and Kaelin fall unconscious as the party earns a narrow victory. The party rest and recover at the drunken mug. The next morning the party finds Kel Thom Lagroth outside the baron keep who directs the party towards where John Rivers was seen last. The party heads out and finds a creek. In the distance; along the creek, the party spots a brown hump which is revealed to be a horse when the party nears. The party investigates and follows the horses tracks after discovering a gaping wound on its side. The tracks lead them to a site of a battle, two humans lay dead, alongside a party of bones and bhrulk.") {
    x.innerHTML = "<b>Shamshir: </b>Shamshir's PoV!";
  } else {
    x.innerHTML = "<b>Dungeon Master: </b><em>When last we left our heroes…</em> The adventure begun one chilly morning outside the Southern guard outpost of Eberard. First to arrive was the half-elf fighter Kaelin, then the Al’ Setseri rogue Shamshir. Third to arrive was the Eridonian Siegward, a cleric of Austere and member of the Order of the Sacred Flame. Last to arrive was Beans, a young human rogue with a taste for alcohol. As the group was waiting to hear from the herald from Greyll, a dwarf, a woman in robes, and a woman with a battleaxe departed the guard outpost. The woman in robes told the party to go home and that they would be the ones completing the quest. The heroes then went inside to hear the heralds tale. The barons son John Rivers had been missing after chasing after a pack of bhrulk with his two retainers. Determined to collect the 1,500 gold reward for returning the son to the baron the party heads forth after a warning from the herald about undead attacks on the town. The party heads Southeast to Greyll when they encounter the dwarf and two women from before waiting to ambush the party. A fight ensues and the heroes easily defeat their attackers. After two more days of travel the party arrives to the gates of Greyll where they are set up by undead. Beans and Kaelin fall unconscious as the party earns a narrow victory. The party rest and recover at the drunken mug. The next morning the party finds Kel Thom Lagroth outside the baron keep who directs the party towards where John Rivers was seen last. The party heads out and finds a creek. In the distance; along the creek, the party spots a brown hump which is revealed to be a horse when the party nears. The party investigates and follows the horses tracks after discovering a gaping wound on its side. The tracks lead them to a site of a battle, two humans lay dead, alongside a party of bones and bhrulk.";
  }
}