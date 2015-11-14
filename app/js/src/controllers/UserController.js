angular.module('Xpens-Track')
.controller("UserController", ["$q", "DataService", "ParseService", function($q, DataService, ParseService){
  var userCntrl = this;

  userCntrl.searchClicked = false;
  
  userCntrl.searchFriend = function(){     
    ParseService.searchUser(userCntrl.searchName).promise.then(function(data){
      // debugger;
      userCntrl.searchUser = data;
      userCntrl.searchClicked = true;   
      // console.log(userCntrl.searchUser);
    });
  };

  userCntrl.getUserName = function(){
    // return userCntrl.searchUser.get("username");
    return "Dummy";
  };

  userCntrl.getFriendName = function(friend){
    return friend.get("username");
  };

  userCntrl.addFriend = function(user){    
    DataService.group.friends.push(user);
  };

  userCntrl.friends = function(){    
    return DataService.group.friends;
  };

}]);