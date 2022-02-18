window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}



// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmountTarget = document.getElementById('loan-amount');
  let loanYearsTarget = document.getElementById('loan-years');
  let yearlyRatesTarget = document.getElementById('loan-rate');
  loanAmountTarget.value = 300000;
  loanYearsTarget.value = 30;
  yearlyRatesTarget.value = 2.459;
}

// Get the current values from the UI
// Update the monthly payment
function update(amount, yearTerm, yearlyRate) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values, 'Hello32'); 
  console.log((values.amount * (values.rate / 12)));

  console.log((1 - (1 + (values.rate / 12))**(values.years * 12 * -1))); 
  console.log(Math.pow((1 + (values.rate / 12)), (values.years * 12 * -1)));

  return ((values.amount * (values.rate / 12)) / (1 - Math.pow((1 + (values.rate / 12)), (values.years * 12 * -1))));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
