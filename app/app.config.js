export default /*@ngInject*/($urlRouterProvider, $stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix('');
    $stateProvider.state('home', {
        url: '/',
        views : {
            '': {
                template: require('./views/home/home.html'),
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            }
        },
        resolve: {
            characters: (charactersService, $q) => {
                var deferred = $q.defer();

                charactersService.fetch().then(function(response){
                    deferred.resolve(response.data);
                }, function(){
                    deferred.reject();
                });

                return deferred.promise;
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}