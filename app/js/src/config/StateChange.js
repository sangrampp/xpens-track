angular.module('Xpens-Track')
.run(function($rootScope, $state, ParseService) {
    $rootScope.$on( "$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
      if (false){
        $state.transitionTo("user");
        event.preventDefault();
      }
    });
  });