angular
    .module('app', ['ui.router', 'home', 'albums'])
    .run(function ($state) {
        $state.go('home');
    });