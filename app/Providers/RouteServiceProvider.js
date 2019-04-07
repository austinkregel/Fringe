const Router = app.make('Router');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const session = require('express-session')

Router.express.use(cookieParser())
Router.express.use(bodyParser.urlencoded({extended: false}));
Router.express.use(bodyParser.json());
Router.express.use(session({
    secret: '$2b$10$YueClXSNYDAd.kcz2Q3XzelVfhg3AXqAYYJRgQNBaGJu4G8.zpGnG',
    resave: true,
    saveUninitialized: true,
}))

module.exports = class RouteServiceProvider {
    register() {
        this.registerMiddleware()

        require(app.base_path('/routes/web'))(Router)
        require(app.base_path('/routes/api'))(Router)

        app.server = Router.express.listen(PORT, () => console.log('Listening on ' + PORT))

        app.closeActions.push(function () {
            app.server.close();
        })
    }

    registerMiddleware() {
        let middleware = require(app.base_path('/app/Http/Kernel'));
        let middlewareToBind = {};

        for (let name in middleware) {
            middlewareToBind['middleware.' + name] = middleware[name];
        }

        app.aliases(middlewareToBind);
    }
};