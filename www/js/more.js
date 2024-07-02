// Function to handle button click to go to Calculator
function gotoCalculator() {
    window.location.href = 'easy calculator.html';
  }
  
  // Function to handle button click to go to Exchange Rate
  function gotoExchangeRate() {
    window.location.href = 'exchange rate.html';
  }
  
  // Function to handle button click to go to More (which is current page)
  function gotoMore() {
    // Optional: You can add some action here if needed
    // For example, displaying a message or performing a specific action.
  }
  
  // Function to handle button clicks for specific conversions or actions
  function dis(action) {
    switch (action) {
      case 'length conversion':
        alert('Length conversion selected');
        // Perform specific action for length conversion
        break;
      case 'area conversion':
        alert('Area conversion selected');
        // Perform specific action for area conversion
        break;
      case 'speed conversion':
        alert('Speed conversion selected');
        // Perform specific action for speed conversion
        break;
      case 'weight conversion':
        alert('Weight conversion selected');
        // Perform specific action for weight conversion
        break;
      case 'temperature conversion':
        alert('Temperature conversion selected');
        // Perform specific action for temperature conversion
        break;
      case 'power conversion':
        alert('Power conversion selected');
        // Perform specific action for power conversion
        break;
      case 'pressure conversion':
        alert('Pressure conversion selected');
        // Perform specific action for pressure conversion
        break;
      case 'history':
        alert('History selected');
        // Perform specific action for history (if applicable)
        break;
      default:
        // Handle default case if necessary
        break;
    }
  }
  
  // Function to handle keyboard events if needed
  function myFunction(event) {
    // Implement keyboard event handling if required
    // This function can be used similarly to how it's used in other parts of your application
  }
  