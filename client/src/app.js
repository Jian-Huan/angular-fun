angular
    .module('app', ['ui.router', 'ngResource', 'home', 'albums', 'models.album', 'config'])
    .run(function ($state) {
        $state.go('home');
    });