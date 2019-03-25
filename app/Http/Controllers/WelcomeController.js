module.exports = class HomeController {
    index() {
        return app.view.render('welcome')
    }
};