// var budgetItem='';
'use strict'

var budgetTemplate = document.querySelector('#budgetTemplate').innerHTML;
var budgetTemplateInst = Handlebars.compile(budgetTemplate);
var viewBudget = document.querySelector('.viewBudget')

var button = document.querySelector('#budgetBtn');
var grossIncome = document.querySelector('#grossIncome');
var addBtn = document.querySelector('#addBtn');
var ItemStatus = document.querySelector('#compareBtn');

var achieved = document.querySelector('#achieved');
var unachieved = document.querySelector('#unachieved');



var budgetItems = [{
    id: 1,
    description: 'Food',
    amount:  600,
    selected: false
  },
  {
    id: 2,
    description: 'Electricity',
    amount:  300,
    selected: false
  }, {
    id: 3,
    description: 'Stokvel',
    amount:  500,
    selected: false
  }, {
    id: 4,
    description: 'Hair',
    amount:  200,
    selected: false
  }, {
    id: 5,
    description: 'Cloths',
    amount:  400,
    selected: false
  }, {
    id: 6,
    description: 'Baby Stuff',
    amount:  500,
    selected: false
  }, {
    id: 7,
    description: 'Laptop',
    amount:  1600,
    selected: false
  }
];

var Achieved = document.querySelector('.Achieved')
var arr = [];



function selectedItems() {
  var checkedItems = document.querySelectorAll("input[type=checkbox]:checked");
  return checkedItems.length > 0;
}

function updateSelected() {
  var checkedItems = document.querySelectorAll("input[type=checkbox]:checked");

  checkedItems.forEach(function(checkbox) {
    var currentId = checkbox.value;
    var currentItem = budgetItems.find(function(item) {
      return item.id === Number(currentId);
    });
    currentItem.selected = true;
  });
}

achieved.addEventListener('click', function() {


  // var checkedItems = document.querySelectorAll("input[type=checkbox]:checked");
  //
  // checkedItems.forEach(function(checkbox) {
  //   var currentId = checkbox.value;
  //   var currentItem = budgetItems.find(function(item) {
  //     return item.id === Number(currentId);
  //   });
  //   currentItem.selected = true;
  // });

  updateSelected();


  var selectedItems = budgetItems.filter(function(budgetItem) {
    return budgetItem.selected;
  });


  var total = 0;
  selectedItems.forEach(function(item){
    console.log (item.amount)
     total += Number(item.amount);
  });

  alert(total);

  viewBudget.innerHTML = budgetTemplateInst({
    Items: selectedItems
  });

  //arr.style.display = "show";
});
var array = [];
unachieved.addEventListener('click', function() {


  if (selectedItems()) {
    updateSelected();


    var checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"));

    //checkboxes = alert(checkboxes.length)

    var uncheckedItems = checkboxes.filter(function(item) {
      return !item.checked
    });

    uncheckedItems.forEach(function(checkbox) {
      var currentId = checkbox.value;
      var currentItem = budgetItems.find(function(item) {
        return item.id === Number(currentId);
      });
      currentItem.selected = false;
    });

    var unselectedItems = budgetItems.filter(function(budgetItem) {
      return !budgetItem.selected;
    });

    viewBudget.innerHTML = budgetTemplateInst({
      Items: unselectedItems
    });
  }
  else{

    var unselectedItems = budgetItems.filter(function(budgetItem) {
      return !budgetItem.selected;
    });

    viewBudget.innerHTML = budgetTemplateInst({
      Items: unselectedItems
    });
  }
});


button.addEventListener("click", function() {

  var income = grossIncome.value;
  //alert( income)


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

ItemStatus.addEventListener('click', function() {

  var myChart = new Chart(buyers, {
    type: 'pie',
    data: {
      labels: ["Achieved", "Unachieved"],
      datasets: [{
        data: [2200, 1900],
        backgroundColor: ['#CD5C5C', 'yellow']
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
