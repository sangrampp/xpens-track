angular.module('Xpens-Track')
.service("DataService", function(){
  var dataService = this;

  var user = {};
  var friends = [];  

  dataService.group = {
    user,
    friends
  };  

  dataService.expenseObj = {
    user,
    expenseUsers: [],
    expenseTitle: "",
    expenseAmount: 0
  }; 

});