angular.module('Xpens-Track')
.controller("LoginController", ["ParseService", function(ParseService){
  var loginCntrl = this;  

  loginCntrl.signup = function(){
    ParseService.signupUser(loginCntrl.signup_username, loginCntrl.signup_password, loginCntrl.signup_email);
  };

  loginCntrl.login = function(){
    ParseService.loginUser(loginCntrl.login_username, loginCntrl.login_password);
  };

  loginCntrl.logout = function(){
    ParseService.logoutUser();
  }
}]);