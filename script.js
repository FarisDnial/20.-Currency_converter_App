const allCurrency = {"ts":1708318801,"base":"USD","quotes":{"AED":3.6729,"AFN":73.764181,"ALL":96.36005,"AMD":405.647552,"ANG":1.801881,"AOA":830.423667,"ARS":834.525243,"AUD":1.528521,"AWG":1.8,"AZN":1.7,"BAM":1.814235,"BBD":2,"BDT":109.727934,"BGN":1.814235,"BHD":0.376891,"BIF":2854.931264,"BMD":1,"BND":1.345596,"BOB":6.908867,"BRL":4.969,"BSD":1,"BTC":0.000019194497,"BTN":83.007483,"BWP":13.686877,"BYN":3.271987,"BZD":2.015324,"CAD":1.348075,"CDF":2759.462489,"CHF":0.881208,"CLF":0.034934,"CLP":963.94349,"CNH":7.208772,"CNY":7.1964,"COP":3909.930989,"CRC":516.312036,"CUC":1,"CUP":25.75,"CVE":102.283794,"CZK":23.60505,"DJF":178.017519,"DKK":6.9174,"DOP":58.616181,"DZD":134.579,"EGP":30.9019,"ERN":15,"ETB":56.324318,"EUR":0.927805,"FJD":2.2442,"FKP":0.792642,"GBP":0.792642,"GEL":2.635,"GGP":0.792642,"GHS":12.467128,"GIP":0.792642,"GMD":67.75,"GNF":8593.402359,"GTQ":7.808861,"GYD":209.176949,"HKD":7.821313,"HNL":24.675565,"HRK":6.991104,"HTG":131.860283,"HUF":360.936667,"IDR":15638.376763,"ILS":3.6059,"IMP":0.792642,"INR":82.99995,"IQD":1309.700592,"IRR":42080,"ISK":137.97,"JEP":0.792642,"JMD":156.479885,"JOD":0.7091,"JPY":150.02675,"KES":145,"KGS":89.43,"KHR":4075.0102,"KMF":457.450353,"KPW":900,"KRW":1335.078919,"KWD":0.30783,"KYD":0.833186,"KZT":449.802031,"LAK":20850.5995,"LBP":15030.922051,"LKR":312.430878,"LRD":190.500063,"LSL":18.872572,"LYD":4.847687,"MAD":10.060249,"MDL":17.830168,"MGA":4544.368316,"MKD":57.15286,"MMK":2099.545083,"MNT":3450,"MOP":8.055156,"MRU":39.691846,"MUR":45.769996,"MVR":15.4,"MWK":1683.055484,"MXN":17.04939,"MYR":4.7835,"MZN":63.899991,"NAD":18.872572,"NGN":1517.950994,"NIO":36.798606,"NOK":10.50848,"NPR":132.777343,"NZD":1.628525,"OMR":0.384869,"PAB":1,"PEN":3.847666,"PGK":3.806017,"PHP":55.995497,"PKR":279.18146,"PLN":4.027859,"PYG":7291.083407,"QAR":3.647116,"RON":4.619,"RSD":108.691768,"RUB":92.29553,"RWF":1272.772874,"SAR":3.7503,"SBD":8.432716,"SCR":13.75073,"SDG":601,"SEK":10.445355,"SGD":1.345223,"SHP":0.792642,"SLL":20969.5,"SOS":571.412461,"SRD":36.3345,"SSP":130.26,"STD":22281.8,"STN":22.72664,"SVC":8.748365,"SYP":2512.53,"SZL":18.874995,"THB":35.950333,"TJS":10.945674,"TMT":3.5,"TND":3.1385,"TOP":2.394718,"TRY":30.856702,"TTD":6.78367,"TWD":31.3851,"TZS":2539.530475,"UAH":38.058884,"UGX":3872.764636,"USD":1,"UYU":39.114845,"UZS":12342.799535,"VES":36.228384,"VND":24527.839097,"VUV":118.722,"WST":2.8,"XAF":608.60002,"XAG":0.04327056,"XAU":0.00049528,"XCD":2.70255,"XDR":0.754517,"XOF":608.60002,"XPD":0.0010451,"XPF":110.716557,"XPT":0.00110527,"YER":250.350023,"ZAR":18.896264,"ZMW":24.744908,"ZWL":322}}

const amountInput = document.getElementById("amount-input"); // access to the amount input
const fromInput = document.getElementById("from-input"); // access to the current currencies to be convert
const toInput = document.getElementById("to-input"); // access to the currency to be converted
const reminder = document.getElementById("reminder"); // access to the reminder message container
const container2 = document.getElementById("container-2"); // access to the container2
const container3 = document.getElementById("container-3"); // access to the container3
const resultContainer = document.getElementById("result-container"); // access to the result container
const resultContainer1 = document.getElementById("result1"); // access to the result container 1
const resultContainer2 = document.getElementById("result2"); // access to the result container 2
const resultContainer3 = document.getElementById("result3"); // access to the result container 3
const resultContainer4 = document.getElementById("result4"); // access to the result container 4
const card1Header = document.getElementById("card-1-header");
const card2Header = document.getElementById("card-2-header");
const card1Container = document.getElementById("card1-container"); // access to the card1 container
const card2Container = document.getElementById("card2-container"); // access to the card2 container
const resetButton2 = document.getElementById("reset-button2")



const allCurrenciesTypes = allCurrency.quotes;

function formatCurrencyConverting1(amountInput, fromInput, toInput) {
  const amountInputValue = amountInput.value;
  const fromInputValue = fromInput.value;
  const toInputValue = toInput.value;


  if (amountInputValue === "" && fromInputValue === "" && toInputValue === "") {
    reminder.innerHTML = "Please enter the amount, the currency to convert from and the currency to convert to";
  } if (fromInputValue === toInputValue) {
      reminder.innerHTML = "You can't convert the same currency";
  } else if (amountInputValue === "" || fromInputValue === "" || toInputValue === "") {
    reminder.innerHTML = "Please fill all the fields";
  } else if (amountInputValue <= 0) {
    reminder.innerHTML = "Please enter a valid amount";
  } else {
    let result;

    if (fromInputValue === "USD" && toInputValue !== "USD") {
      result = amountInputValue * allCurrenciesTypes[toInputValue];

    } else if (fromInputValue !== "USD" && toInputValue === "USD") {
      const currencyRateToUSD = 1 / allCurrenciesTypes[fromInputValue];
      const currencyConvertedToUSD = amountInputValue * currencyRateToUSD;
      result = (currencyConvertedToUSD * allCurrenciesTypes["USD"]).toFixed(2);
    }

    else if (fromInputValue !== "USD" && toInputValue !== "USD") {
      const currencyRateToUSD = 1 / allCurrenciesTypes[fromInputValue];
      const currencyConvertedToUSD = amountInputValue * currencyRateToUSD;
      result = (currencyConvertedToUSD * allCurrenciesTypes[toInputValue]).toFixed(2);
    }
    resultContainer.innerHTML =  `<h4><strong><span style="color: #0a146e;">${amountInputValue} ${fromInputValue} = </span></strong><strong><span style="color: #044a10;">${result} ${toInputValue}</span></strong></h4>
`
    resultContainer1.innerHTML = `${amountInputValue} ${fromInputValue} =`;
    resultContainer2.innerHTML = `${result} ${toInputValue}`;
    // container2.classList.remove('visually-hidden');
    container3.classList.remove('visually-hidden');
    resetButton2.classList.remove('visually-hidden');
  }
}

// function formatCurrencyConverting2(amountInput, fromInput, toInput) {
//   const amountInputValue = amountInput.value;
//   const fromInputValue = fromInput.value;
//   const toInputValue = toInput.value;

//   if (fromInputValue === "USD" && toInputValue !== "USD") {
//     const fromCurrencyRate =  (1 / allCurrenciesTypes[toInputValue]).toFixed(4);
//     const toCurrencyRate = (1 * allCurrenciesTypes[toInputValue]).toFixed(4);
//     resultContainer3.innerHTML = `1 ${fromInputValue} = ${toCurrencyRate} ${toInputValue}`;
//     resultContainer4.innerHTML = `1 ${toInputValue} = ${fromCurrencyRate} ${fromInputValue}`;

//   } else if (fromInputValue !== "USD" && toInputValue === "USD") {
//     const fromCurrencyRate = (1 * allCurrenciesTypes[fromInputValue]).toFixed(4); 
//     const toCurrencyRate = (1 / allCurrenciesTypes[fromInputValue]).toFixed(4);
//     resultContainer3.innerHTML =  `1 ${fromInputValue} = ${toCurrencyRate} ${toInputValue}`;
//     resultContainer4.innerHTML = `1 ${toInputValue} = ${fromCurrencyRate} ${fromInputValue}`;

//   } else if (fromInputValue !== "USD" && toInputValue !== "USD"){
//     const currencyRateToUSD = 1 / allCurrenciesTypes[fromInputValue];
//     const currencyConvertedToUSD = amountInputValue * currencyRateToUSD;
//     const toCurrencyRate = (currencyConvertedToUSD * allCurrenciesTypes[toInputValue] / amountInputValue).toFixed(4);
//     const fromCurrencyRate = (1 * allCurrenciesTypes["USD"] / toCurrencyRate).toFixed(4);
//     resultContainer3.innerHTML = `1 ${fromInputValue} = ${toCurrencyRate} ${toInputValue}`;
//     resultContainer4.innerHTML = `1 ${toInputValue} = ${fromCurrencyRate} ${fromInputValue}`;
//   }
// }

function formatCurrencyConverting3(amountInput, fromInput, toInput){
  const amountInputValue = amountInput.value;
  const fromInputValue = fromInput.value;
  const toInputValue = toInput.value;
  let repeatCurrenciesCount = [1,5,10,25,50,100,200,500,1000,2000,5000,10000];

  card1Header.innerHTML = `<strong>Convert ${toInputValue} to ${fromInputValue}</strong>`;
  card2Header.innerHTML = `<strong>Convert ${fromInputValue} to ${toInputValue}</strong>`;

  if (fromInputValue === "USD" && toInputValue !== "USD") {

    for(const count of repeatCurrenciesCount) {
      const fromCurrencyRate =  (1 / allCurrenciesTypes[toInputValue]).toFixed(4);
      const currencyConvertedCount = (fromCurrencyRate * count).toFixed(3);
      card1Container.innerHTML += `<br><h5><strong><span style="color: #0a146e;">${count} ${toInputValue} = </span></strong><strong><span style="color: #044a10;">${currencyConvertedCount} ${fromInputValue}</span></strong></h5>`;
    }

    for(const count of repeatCurrenciesCount) {
      const toCurrencyRate = (1 * allCurrenciesTypes[toInputValue]).toFixed(4);
      const currencyConvertedToUSDCount = (toCurrencyRate * count).toFixed(3);
      card2Container.innerHTML += `<br><h5><strong><span style="color: #0a146e;">${count} ${fromInputValue} = </span></strong><strong><span style="color: #044a10;">${currencyConvertedToUSDCount} ${toInputValue}</span></strong></h5>`;
    }

  } else if (fromInputValue !== "USD" && toInputValue === "USD") {

    for(const count of repeatCurrenciesCount) {
      const fromCurrencyRate = (1 * allCurrenciesTypes[fromInputValue]).toFixed(4); 
      const currencyConvertedCount = (fromCurrencyRate * count).toFixed(3);
      card1Container.innerHTML += `<br><h5><strong><span style="color: #0a146e;">${count} ${toInputValue} = </span></strong><strong><span style="color: #044a10;">${currencyConvertedCount} ${fromInputValue}</span></strong></h5>`;

    }

    for(const count of repeatCurrenciesCount) {
      const toCurrencyRate = (1 / allCurrenciesTypes[fromInputValue]).toFixed(4);
      const currencyConvertedToUSDCount = (toCurrencyRate * count).toFixed(3);
      card2Container.innerHTML += `<br><h5><strong><span style="color: #0a146e;">${count} ${fromInputValue} = </span></strong><strong><span style="color: #044a10;">${currencyConvertedToUSDCount} ${toInputValue}</span></strong></h5>`;
    }

  } else if (fromInputValue !== "USD" && toInputValue !== "USD"){
    for(const count of repeatCurrenciesCount) {
      const currencyRateToUSD = 1 / allCurrenciesTypes[fromInputValue];
      const currencyConvertedToUSD = amountInputValue * currencyRateToUSD;
      const toCurrencyRate = (currencyConvertedToUSD * allCurrenciesTypes[toInputValue] / amountInputValue).toFixed(4);
      const fromCurrencyRate = (1 * allCurrenciesTypes["USD"] / toCurrencyRate).toFixed(4); 
      const currencyConvertedCount = (fromCurrencyRate * count).toFixed(3);
      card1Container.innerHTML += `<br><h5><strong><span style="color: #0a146e;">${count} ${toInputValue} = </span></strong><strong><span style="color: #044a10;">${currencyConvertedCount} ${fromInputValue}</span></strong></h5>`;
    }

    for(const count of repeatCurrenciesCount) {
      const currencyRateToUSD = 1 / allCurrenciesTypes[fromInputValue];
      const currencyConvertedToUSD = amountInputValue * currencyRateToUSD;
      const toCurrencyRate = (currencyConvertedToUSD * allCurrenciesTypes[toInputValue] / amountInputValue).toFixed(4);
      const currencyConvertedToUSDCount = (toCurrencyRate * count).toFixed(3);
      card2Container.innerHTML += `<br><h5><strong><span style="color: #0a146e;">${count} ${fromInputValue} = </span></strong><strong><span style="color: #044a10;">${currencyConvertedToUSDCount} ${toInputValue}</span></strong></h5>`;
    }
  }
}

function convert() {
  reminder.innerHTML = "";
  card1Header.innerHTML = "";
  card2Header.innerHTML = "";
  card1Container.innerHTML = "";
  card2Container.innerHTML = "";
  formatCurrencyConverting1(amountInput, fromInput, toInput);
  // formatCurrencyConverting2(amountInput, fromInput, toInput);
  formatCurrencyConverting3(amountInput, fromInput, toInput);
}

function resetCurrency() {
  amountInput.value = "";
  fromInput.value = "Choose...";
  toInput.value = "Choose...";
  reminder.innerHTML = "";
  resultContainer.innerHTML = "";
  resultContainer1.innerHTML = "";
  resultContainer2.innerHTML = "";
  resultContainer3.innerHTML = "";
  resultContainer4.innerHTML = "";
  card1Container.innerHTML = "";
  card2Container.innerHTML = "";
  container2.classList.add('visually-hidden');
  container3.classList.add('visually-hidden');
  resetButton2.classList.add('visually-hidden');
}


const currencyCodes = Object.keys(allCurrency.quotes);

// Select the dropdown elements
const fromDropdown = document.getElementById("from-input");
const toDropdown = document.getElementById("to-input");

// Function to create and append option elements
function createOption(code, dropdown) {
  const option = document.createElement("option");
  option.value = code;
  option.text = code;
  dropdown.appendChild(option);
}

// Loop through currencyCodes array and create options for both dropdowns
currencyCodes.forEach(code => {
  createOption(code, fromDropdown);
  createOption(code, toDropdown);
});