var budgetItems = [{
    id: 1,
    description: 'Food',
    selected: false,
    amount: 0
  },
  {
    id: 2,
    description: 'Electricity',
    selected: false,
    amount: 0
  }, {
    id: 3,
    description: 'Stokvel',
    selected: false,
    amount: 0
  }, {
    id: 4,
    description: 'Hair',
    selected: false,
    amount: 0
  }, {
    id: 5,
    description: 'Cloths',
    selected: false,
    amount: 0
  }, {
    id: 6,
    description: 'Baby Stuff',
    selected: false,
    amount: 0
  }, {
    id: 7,
    description: 'Laptop',
    selected: false,
    amount: 0
  }
];

//filter
//find
//forEach

function allBudgetItems() {
  console.log(budgetItems);
  return budgetItems;
}

function selectBudgetItem(itemName, amount) {

}

//use filter - if the selected is true
function selectedBudgetItems() {

}

//use filter - if the selected is false
function unselectedBudgetItems() {

}


function clearBudgetSelection() {
  budgetItems.forEach(function(budgetItem) {
    budgetItem.selected = false;
    budgetItem.amount = 0;
  });
}
