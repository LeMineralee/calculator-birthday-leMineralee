let expression = '';

function appendToResult(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    if (result === 29) {
      document.getElementById('result').value = "Powder and i hate him";
    } 
    else if (result === 23) {
      document.getElementById('result').value = "BOBB.";
    } 
    else if (result === 10) { 
      document.getElementById('result').value = "faa raja iblis.";
    } 
    else if (result === 2) {
      document.getElementById('result').value = "KOALA~";
    } 
    else if (result === 21) { 
      document.getElementById('result').value = "Dealova";
    } 
    else if (result === 7) { 
      document.getElementById('result').value = "Ellocoo.";
    } 
    else if (result === 8) { 
      document.getElementById('result').value = "p a t t";
    } 
    else {
      document.getElementById('result').value = result;
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}