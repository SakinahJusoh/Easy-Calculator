// Function to navigate to easy-calculator.html
function gotoCalculator() {
    window.location.href = 'easy calculator.html';
  }
  
  // Function to navigate to exchange-rate.html
  function gotoExchangeRate() {
    window.location.href = 'exchange rate.html';
  }
  
  // Function to navigate to more.html
  function gotoMore() {
    window.location.href = 'more.html';
  }
  
  const currencyEl_one = document.getElementById('currency-one');
  const currencyEl_two = document.getElementById('currency-two');
  const amountEl_one = document.getElementById('amount-one');
  const amountEl_two = document.getElementById('amount-two');
  const rateEl = document.getElementById('rate');
  const swap = document.getElementById('swap');
  
  
  function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
  
    //fetching the api
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
  
        const rate = data.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      });
  }