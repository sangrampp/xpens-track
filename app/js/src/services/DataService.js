angular.module('Xpens-Track')
.service("DataService", function(){
  var dataService = this;

  dataService.user = {
    userId: "",
    username: "",
    email: ""
  };

  dataService.group = {
    dataService.user,
    friends: []
  };  
  
  dataService.expenseObj = {
    dataService.user,
    expenseUsers: [],
    expenseTitle: "",
    expenseAmount: 0
  }; 

});