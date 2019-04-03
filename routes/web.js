/**
 * @param {Router} router
 */
module.exports = (router) => {
    // The middleware isn't binding for some reason...?
    router.get({
        path: '/',
        resource: app.controller('WelcomeController', 'index'),
    });

    router.get('/login', app.controller('WelcomeController', 'index'), app.make('middleware.web'));
    router.get('/register', app.controller('Auth/RegisterController', 'index'), app.make('middleware.web'));
}
