module.exports =  class WelcomeController {
    index() {
        return app.view.render('welcome')
    }
};