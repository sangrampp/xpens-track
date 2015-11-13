angular.module('Xpens-Track')
.controller("UserController", ["$q", "DataService", function($q, DataService){
  var userCntrl = this;

  userCntrl.searchClicked = false;
  
  userCntrl.searchFriend = function(){
    userCntrl.searchClicked = true;    
    userCntrl.searchUser = new DataService.user("tempxyz11", userCntrl.searchName, userCntrl.searchName + "@gmail.com");
  };

  userCntrl.addFriend = function(user){    
    DataService.group.friends.push(user);
  };

  userCntrl.friends = function(){    
    return DataService.group.friends;
  };

}]);