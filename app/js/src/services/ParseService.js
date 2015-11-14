angular.module('Xpens-Track')
.service("ParseService", function(DataService, $q, $state){

  var ParseService = this;

  function getGroup(userId){
    var Group = Parse.Object.extend("Group");
    var query = new Parse.Query(Group);
    query.equalTo("user", userId);
    var defferedQuery = $q.defer();
    query.first().then(function(data){      
      defferedQuery.resolve(data);
    });

    defferedQuery.promise.then(function(result){      
      DataService.group.friends = result.get("friends");
    })
  };

  function createGroup(userId){
    var Group = Parse.Object.extend("Group");
    var group = new Group();

    group.set("user", userId);
    group.set("friends", []);
    
    group.save(null, {
      success: function(group) {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + group.id);        
        DataService.group.friends = group.get("friends");
      },
      error: function(group, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
      }
    });
  };

  ParseService.signupUser = function(username, password, email){
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);    
    
    // other fields can be set just like with Parse.Object    

    user.signUp(null, {
      success: function(user) {
        DataService.group.user = user;
        debugger;
        createGroup(user.id);
        // Hooray! Let them use the app now.
        console.log("User created successfully: " + user.username);
        $state.go("user");
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  };

  ParseService.loginUser = function(username, password){
    
    Parse.User.logIn(username, password, {
      success: function(user) {
        // Do stuff after successful login.    
        // user.set("friends", [{username:"paddy", email: "paddy@gmail.com"}]);
        // user.save(null, {
        //   success: function(){
        //     console.log("Saved data success.");
        //   }
        // })    
        DataService.group.user = user;
        getGroup(user.id);
        console.log("User login successfully: " + user.get("username"));
        $state.go("user");
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        console.log("Error loggin in: " + error.message);
      }
    });
  };  

  ParseService.searchUser = function(username){
    var differedQuery = $q.defer();
    var query = new Parse.Query(Parse.User);
    query.equalTo("username", username);    
    query.first().then(function(data){
      // debugger;
      differedQuery.resolve(data);
    }, function(){
      differedQuery.resolve(error);
    });
    return differedQuery;
  };

  ParseService.logoutUser = function(){
    Parse.User.logOut();    
    $state.go("home");
  };

  ParseService.userLoggedIn = function(){
    return !!ParseService.currentUser();
  };

  ParseService.curretUser = function(){    
    return Parse.User.current();
  };

  ParseService.saveObject = function(className, objectData){
    var ClassName = Parse.Object.extend(className);
    var obj = new ClassName();

    for (var property in objectData) {
      if (objectData.hasOwnProperty(property)) {
          // do stuff
          console.log(property);
          obj.set(property, objectData[property]);
      }
    }
    //now save the object
    obj.save(null, {
      success: function(obj) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + obj.id);
      },
      error: function(obj, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  };

});