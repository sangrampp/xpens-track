angular.module('Xpens-Track')
.run(function($rootScope, $state, ParseService) {
    $rootScope.$on( "$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
      if (toState.authenticate && !ParseService.userLoggedIn){
        $state.transitionTo("home");
        event.preventDefault();
      }
    });
  });