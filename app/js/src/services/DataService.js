angular.module('Xpens-Track')
.service("DataService", function(){
  var dataService = this;

  function init(){
    console.log(dataService.user);
    console.log(dataService.group);
    console.log(dataService.expenseObj);
  }

  dataService.user = function(uid, uname, email){
    this.userId = uid,
    this.username = uname,
    this.email = email,
    this.share
  };

  var u = new dataService.user("xyz001", "sangrampp", "sangram@gmail.com");
  
  var friends = [
    new dataService.user("pqr003", "sundar", "sundar@gmail.com"),
    new dataService.user("abc002", "paddy", "paddy@gmail.com")
  ];

  dataService.group = {
    u,
    friends
  };  

  dataService.expenseObj = {
    u,
    expenseUsers: [],
    expenseTitle: "",
    expenseAmount: 0
  }; 

  init();

});