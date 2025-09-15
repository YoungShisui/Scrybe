
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tooltip-id]').forEach(el => {
    const id = el.getAttribute('data-tooltip-id');
    const tooltipText = document.querySelector(`#tooltips #${id}`)?.textContent || '';
    el.setAttribute('data-tooltip', tooltipText);
  });
});


// Set the variables to the nodes that we will use
var options = document.getElementById('options');
var result = document.getElementById('result');
var secondDisplay = document.getElementById('secondDisplay'); // Update

// Add an event listener executing the function "writeResult()" when
// the SELECT option list was changed (i.e. someone selected something).
options.addEventListener('change', writeResult);

// This is the function that gets the value to display and displays it.
// This could be optimized. I wrote it this way so its easy to understand.
function writeResult() {
  
  // This gets the selected option
  var selected = this.options[this.selectedIndex];

  // This gets the `data-display` attribute that is defined in
  // the option tag and defines what to display. JavaScript can
  // access the HTML data* attributes as `dataset` values.
  var attribute = selected.dataset.display;

  // If the attribute is missing an empty string will be returned.
  // Otherwise `null` would be returned which could cause trouble.
  var display = (attribute) ? attribute : '';

  // This sets innerHTML of the result DIV to the given string.
  // it might be better to use .appendChild() here, but it would
  // cause complexity and is not necessary to understand how the
  // displaying works (plus you need to remove/replace the child
  // for each change).
  result.innerHTML = '<p>'+display+'</p>';
  secondDisplay.innerHTML = '<p>'+display+'</p>'; // Update
}