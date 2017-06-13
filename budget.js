var budgetItems = [];

//filter
//find
//forEach

function allBudgetItems(){
  return budgetItems;
}

function selectBudgetItem(itemName, amount){

}

//use filter - if the selected is true
function selectedBudgetItems(){

}

//use filter - if the selected is false
function unselectedBudgetItems(){

}


function clearBudgetSelection(){
  budgetItems.forEach(function(budgetItem){
    budgetItem.selected = false;
    budgetItem.amount = 0;
  });
}
