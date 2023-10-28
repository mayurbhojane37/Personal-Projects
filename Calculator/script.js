function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function calculateResult() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function calculateSquareRoot() {
    const inputValue = document.getElementById('display').value;
    const result = Math.sqrt(parseFloat(inputValue));
    document.getElementById('display').value = result;
  }

  
