angular
    .module('models.album', [])
    .factory('AlbumCollection', AlbumCollection);

AlbumCollection.$inject = ['$resource', 'api'];

function AlbumCollection($resource, api) {
    var AlbumCollection = $resource(
        api.domain + api.album,
        {id: '@id'},
        {'query': {method: 'GET', cache: true, isArray: true}}
    );

    return {
        get: get,
        sortByTitle: sort
    };

    function get() {
        return AlbumCollection.query();
    }

    function sort() {
        return AlbumCollection.query(function (albums) {
            return albums.sort(compareTitles);
        });
    }

    function compareTitles(a, b) {
        if (a.title < b.title) {
            return -1;
        }

        if (a.title > b.title) {
            return 1;
        }

        return 0;
    }
}