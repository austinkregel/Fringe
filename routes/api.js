let User = require(app.base_path('app/User'));

module.exports = (router) => {
    router.get('/api', (req, res) => {
        return app.config
    });

    router.express.get('/api/users', app.make('middleware.web'), async (req, res) => {
        let users = await User.all();
        res.send(users)
    })
}