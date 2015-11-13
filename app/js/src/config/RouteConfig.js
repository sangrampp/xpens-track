angular.module('Xpens-Track')
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/user");
  //
  // Now set up the states
  $stateProvider
    // .state('home', {
    //   url: "/",
    //   templateUrl: "app/view/home.tmpl.html",
    //   controller: "LoginController",
    //   controllerAs: "loginCntrl",
    //   // authenticate: false
    // })
    .state('expenses', {
      url: "/expenses",
      templateUrl: "app/view/expenses.tmpl.html",
      controller: "ExpenseController",
      controllerAs: "expenseCntrl",
      authenticate: true
    })
    .state('user', {
      url: "/user",
      templateUrl: "app/view/user.tmpl.html",
      controller: "UserController",
      controllerAs: "userCntrl",
      authenticate: true
    });
});