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

const myInstance = new Weapon("Noble", "henlo", [1,2,3], "Coomer");
document.getElementById("output").textContent = myInstance.name;
document.getElementById("output2").textContent = myInstance.tier;
document.getElementById("output3").textContent = myInstance.restriction;
document.getElementById("output4").textContent = myInstance.effect;



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



