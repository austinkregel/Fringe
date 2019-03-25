const Router = app.make('Router');

const PORT = process.env.PORT || 3000

module.exports = class RouteServiceProvider {
    register() {
        require(app.base_path('/routes/web'))(Router)
        require(app.base_path('/routes/api'))(Router)

        Router.listen(PORT, () => console.log('Listening on ' + PORT))
    }
};