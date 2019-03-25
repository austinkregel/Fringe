module.exports = (router) => {
    router.get('/api', (req, res) => {
        return app.config
    });
}