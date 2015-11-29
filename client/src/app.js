angular
    .module('app', ['ui.router', 'ngResource', 'home', 'albums', 'models.album'])
    .run(function ($state) {
        $state.go('home');
    });