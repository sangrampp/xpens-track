angular.module('Xpens-Track')
.controller("LoginController", ["ParseService", function(){
  var loginCntrl = this;  

  loginCntrl.signup = function(){
    ParseService.signupUser(loginCntrl.signup_username, loginCntrl.signup_password);
  };

  loginCntrl.login = function(){
    ParseService.loginUser(loginCntrl.login_username, loginCntrl.login_password);
  };
}]);