const Router = app.make('Router');

module.exports = class RouteServiceProvider {
    register() {
        require(process.cwd() + '/routes/web')(Router)
        require(process.cwd() + '/routes/api')(Router)

        Router.listen(3000, () => console.log('Listening on 3000'))
    }
};