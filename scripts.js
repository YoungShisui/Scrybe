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

const session01 = [
            "Dungeon Master: ",
            "Shamshir: ",
            "Chronicle: "
        ];

let currentIndex = 0;

function cycleParagraph() {
    currentIndex = (currentIndex + 1) % session01.length;
    document.getElementById("sessionDisplay").textContent = session01[currentIndex];
}