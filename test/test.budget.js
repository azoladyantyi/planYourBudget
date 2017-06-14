 describe('Our budget app', function(){
//
//   it('should be able to input a Gross income', function(){
//     assert.equal(1,2);
//   });
//
  it('should be able show me a list of Budget Items', function(){

    var budgetItems = allBudgetItems();
    assert.equal(7, budgetItems.length);

    assert.equal(JSON.stringify({ id : 1, description : 'Food', selected : false, amount : 0}), JSON.stringify(budgetItems[0]));
    assert.equal(JSON.stringify({ id : 4, description : 'Hair', selected : false, amount : 0}), JSON.stringify(budgetItems[3]));
    assert.equal(JSON.stringify({ id : 7, description : 'Laptop', selected : false, amount : 0}), JSON.stringify(budgetItems[6]));

  });

  // it('should allow me to capture for a selection of BudgetItems', function(){
  //   //assert.equal(1,2);
  //
  //   //Act
  //   selectBudgetItem('Food', 575);
  //
  //   //Assert
  //   var budgetItems = allBudgetItems();
  //   var foodItem = budgetItems.find(function(item){
  //     return item.description === 'Food'
  //   });
  //
  //   assert.equal(575, foodItem.amount);
  //   assert.equal(true, foodItem.selected);
  //
  // });

  it('should allow me to to see a list of selected BudgetItems', function(){

    clearBudgetSelection();

      //selectedBudgetItems('Food');
      //selectedBudgetItems('Electricity');
      //selectedBudgetItems('Stokvel');

    var budgetItems = selectedBudgetItems();
    assert.equal(0, selectedBudgetItems.length);

  });

  it('should allow me to to see a list of unselected BudgetItems', function(){

    clearBudgetSelection();
    //
    // selectBudgetItem('Hair', 200);
    // selectBudgetItem('Cloths',500);
    // selectBudgetItem('Stokvel', 400);

    var budgetItems = unselectedBudgetItems()
    assert.equal(0, unselectedBudgetItems.length);

  });

  it('should give me a total of unselected/un achieved BudgetItems', function(){
    var budgetItems = unselectedBudgetItems()
    assert.equal(0, unselectedBudgetItems.length);


  });

  it('should give me a total of selected/achieved BudgetItems', function(){

    var budgetItems = selectedBudgetItems()
    assert.equal(0, selectedBudgetItems.length);

  });
  //
  // it('should give me a percentage of selected/achieved vs unselected/unachieved BudgetItems', function(){
  //   assert.equal(1,2);
  // });
  //
  // it('should be able to reset your budget back to zero - start a new budget week', function(){
  //   assert.equal(1,2);
  // });
  //
  // it('should be store data in localStorage', function(){
  //   assert.equal(1,2);
  // });
  //
  // it('should be retrieve data from localStorage', function(){
  //   assert.equal(1,2);
  // });





});
