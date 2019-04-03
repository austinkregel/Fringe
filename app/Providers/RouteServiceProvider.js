const Router = app.make('Router');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000


Router.express.use(cookieParser())

module.exports = class RouteServiceProvider {
    register() {
        this.registerMiddleware()

        require(app.base_path('/routes/web'))(Router)
        require(app.base_path('/routes/api'))(Router)

        Router.listen(PORT, () => console.log('Listening on ' + PORT))
    }

    registerMiddleware() {
        let middleware = require(app.base_path('/app/Http/Kernel'));
        let middlewareToBind = {}
        for (let name in middleware) {
            middlewareToBind['middleware.' + name] = middleware[name];
        }

        app.aliases(middlewareToBind);
    }
};