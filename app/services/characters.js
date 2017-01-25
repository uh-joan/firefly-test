//
// Characters Service, it uses mocky.io
//
export default ngModule => {
    ngModule
        .service('charactersService',
            function($http, charactersUrl, $q){
                const vm = this;

                // fetch all characters
                vm.fetch = () => {
                    var deferred = $q.defer();

                    $http.get(charactersUrl).then( (response) => {
                        deferred.resolve(response.data);
                    }, (e) => {
                        deferred.reject(e);
                    });
                    return deferred.promise;
                };

                // with a real BE, here would add all other methods, PUT, POST, DELETE and so on.
    });
}