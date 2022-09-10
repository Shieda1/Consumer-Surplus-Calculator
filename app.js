// https://www.omnicalculator.com/finance/consumer-surplus

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const consumerSurplusRadio = document.getElementById('consumerSurplusRadio');
const actualPriceRadio = document.getElementById('actualPriceRadio');
const willingPriceRadio = document.getElementById('willingPriceRadio');

let consumerSurplus;
let actualPrice = v1;
let willingPrice = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

consumerSurplusRadio.addEventListener('click', function() {
  variable1.textContent = 'Actual Price';
  variable2.textContent = 'Willing Price';
  actualPrice = v1;
  willingPrice = v2;
  result.textContent = '';
});

actualPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Consumer Surplus';
  variable2.textContent = 'Willing Price';
  consumerSurplus = v1;
  willingPrice = v2;
  result.textContent = '';
});

willingPriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Consumer Surplus';
  variable2.textContent = 'Actual Price';
  consumerSurplus = v1;
  actualPrice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(consumerSurplusRadio.checked)
    result.textContent = `Consumer Surplus = ${computeconsumerSurplus().toFixed(2)}`;

  else if(actualPriceRadio.checked)
    result.textContent = `Actual Price = ${computeactualPrice().toFixed(2)}`;

  else if(willingPriceRadio.checked)
    result.textContent = `Willing Price = ${computewillingPrice().toFixed(2)}`;
})

// calculation

function computeconsumerSurplus() {
  return Number(willingPrice.value) - Number(actualPrice.value);
}

function computeactualPrice() {
  return Number(willingPrice.value) - Number(consumerSurplus.value);
}

function computewillingPrice() {
  return Number(consumerSurplus.value) + Number(actualPrice.value);
}