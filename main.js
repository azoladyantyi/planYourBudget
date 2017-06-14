// var budgetItem='';
'use strict'
var budgetTemplate = document.querySelector('#budgetTemplate').innerHTML;
var budgetTemplateInst = Handlebars.compile(budgetTemplate);



var budgetData = [{
id: "1",
status: "checked",
item: "food",
price: "R"+ 500
},
];

function displayItemResults(){
var displayItemResults = budgetTemplateInst({
itemBudget: budgetData
});

var itemDisplay = document.querySelector('#itemDisplay');
itemDisplay.innerHTML = displayItemResults;


};
