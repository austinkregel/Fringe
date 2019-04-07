module.exports =  class WelcomeController {
    index(req,res) {
        return app.view.render('welcome')
    }
};