// script.js
document.getElementById('run-button').addEventListener('click', function() {
  var input = document.getElementById('input').value;
  var output = document.getElementById('output');
  
  try {
    var result = eval(input);
    output.textContent = result;
  } catch (error) {
    output.textContent = 'Error: ' + error.message;
  }
});
