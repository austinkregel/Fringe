module.exports =  class RegisterController {
    index(req) {
        return app.view.render('auth.register', {
            csrf: req.csrfToken()
        })
    }
};