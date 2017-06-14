// var budgetItem='';
'use strict'



var budgetTemplate = document.querySelector('#budgetTemplate').innerHTML;
var budgetTemplateInst = Handlebars.compile(budgetTemplate);
var viewBudget = document.querySelector('.viewBudget')

var button = document.querySelector('#budgetBtn');
var grossIncome = document.querySelector('#grossIncome');
var addBtn = document.querySelector('#addBtn')

var budgetItems = [{
    id: 1,
    description: 'Food',
    amount: 0,
    selected: false
  },
  {
    id: 2,
    description: 'Electricity',
    amount: 0,
    selected: false
  }, {
    id: 3,
    description: 'Stokvel',
    amount: 0,
    selected: false
  }, {
    id: 4,
    description: 'Hair',
    amount: 0,
    selected: false
  }, {
    id: 5,
    description: 'Cloths',
    amount: 0,
    selected: false
  }, {
    id: 6,
    description: 'Baby Stuff',
    amount: 0,
    selected: false
  }, {
    id: 7,
    description: 'Laptop',
    amount: 0,
    selected: false
  }
];



button.addEventListener("click", function(){

var income = grossIncome.value;
alert("R"+income);

var getDiv = document.querySelector('.items');
// if (getDiv.style.display === 'none')
// {
//   alert('hello');
  getDiv.style.display = 'block';
// }
// else {
//   getDiv.style.display = 'none';
//
// }
var searchResults = budgetTemplateInst({Items : budgetItems})
viewBudget.innerHTML = searchResults;
});

// addBtn.addEventListener('click', function(){
// var itemName = document.querySelector('#itemInput').value;
// var price = document.querySelector('#priceInput'). value;
//
// })

//Tempalte budget



// function displayItemResults(){
// var displayItemResults = budgetTemplateInst({
// itemBudget: budgetData
// })
// };

// var itemDisplay = document.querySelector('#itemDisplay');
// itemDisplay.innerHTML = displayItemResults;
//
//
// };
