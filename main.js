// var budgetItem='';
'use strict'



var budgetTemplate = document.querySelector('#budgetTemplate').innerHTML;
var budgetTemplateInst = Handlebars.compile(budgetTemplate);
var viewBudget = document.querySelector('.viewBudget')

var button = document.querySelector('#budgetBtn');
var grossIncome = document.querySelector('#grossIncome');
var addBtn = document.querySelector('#addBtn')
var ItemStatus = document.querySelector('#compareBtn')


var budgetItems = [{
    id: 1,
    description: 'Food',
    amount: 'R' + 600,
    selected: false
  },
  {
    id: 2,
    description: 'Electricity',
    amount: 'R' + 300,
    selected: false
  }, {
    id: 3,
    description: 'Stokvel',
    amount: 'R' + 500,
    selected: false
  }, {
    id: 4,
    description: 'Hair',
    amount: 'R' + 200,
    selected: false
  }, {
    id: 5,
    description: 'Cloths',
    amount: 'R' + 400,
    selected: false
  }, {
    id: 6,
    description: 'Baby Stuff',
    amount: 'R' + 500,
    selected: false
  }, {
    id: 7,
    description: 'Laptop',
    amount: 'R' + 1600,
    selected: false
  }
];



button.addEventListener("click", function() {

  var income = grossIncome.value;
  alert("R" + income);

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
  var searchResults = budgetTemplateInst({
    Items: budgetItems
  })
  viewBudget.innerHTML = searchResults;
});



var buyers = document.getElementById('buyers').getContext('2d');
var pieData = [{
    value: 20,
    color: "#878BB6"
  },
  {
    value: 40,
    color: "#4ACAB4"
  },
  {
    value: 10,
    color: "#FF8153"
  },
  {
    value: 30,
    color: "#FFEA88"
  }
];
var pieOptions = {
  segmentShowStroke: false,
  animateScale: true
};
//new Chart(buyers).Pie(pieData, pieOptions);

ItemStatus.addEventListener('click', function(){

var myChart = new Chart(buyers, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],

        }]
    },

})
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
