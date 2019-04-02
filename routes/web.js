/**
 * @param {Router} router
 */
module.exports = (router) => {
    // The middleware isn't binding for some reason...?
    router.get({
        path: '/',
        resource: app.controller('WelcomeController', 'index'),
        middleware: app.make('middleware.web'),
    });
    router.get('/login', app.controller('WelcomeController', 'index'));
}
