module.exports = (router) => {
    router.resource('/', app.controller('WelcomeController'));
}