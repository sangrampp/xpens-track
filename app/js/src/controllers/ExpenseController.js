angular.module('Xpens-Track')
.controller("ExpenseController", ["$q", "DataService", function($q, DataService){
  var expenseCntrl = this;

  function init(){
    DataService.group.user.share = 0;
    DataService.expenseObj.expenseUsers = [];
    DataService.expenseObj.expenseUsers.push(DataService.group.user);
  };

  expenseCntrl.getUserName = function(user){
    return user.get("username");
  };

  expenseCntrl.friends = function(){    
    return DataService.group.friends;
  };

  expenseCntrl.users = function(){
    return DataService.expenseObj.expenseUsers;
  };

  expenseCntrl.addExpenseUser = function(user){
    DataService.expenseObj.expenseUsers.push(user);
  };

  expenseCntrl.addUserPaid = function(user){
    expenseCntrl.userPaid = user;
  };

  expenseCntrl.getUserShare = function(){
    console.log(DataService.user);
    return DataService.group.user.share;
  };

  expenseCntrl.userPaidName = function(){
    if(expenseCntrl.userPaid !== undefined){
      return expenseCntrl.userPaid.get("username");
    }    
  }

  function calculateShare(){
    var sharePerUser = expenseCntrl.expenseAmount/expenseCntrl.users().length;
    console.log(sharePerUser);
    expenseCntrl.users().forEach(function(user){
      if(user === expenseCntrl.userPaid){
        user.share = expenseCntrl.expenseAmount - sharePerUser;
      } else{
        user.share = -sharePerUser;
      };
      console.log(user);
    });
  };

  expenseCntrl.addExpense = function(){
    calculateShare();
    console.log(expenseCntrl.getUserShare());
  };

  init();

}]);