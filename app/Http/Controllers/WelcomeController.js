module.exports =  class WelcomeController {
    constructor() {
    }

    index() {
        return app.view.render('welcome')
    }
};