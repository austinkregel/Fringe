const path = require('path');

module.exports = {
    url: 'https://thing.com',
    providers: [
        path.join(__dirname, '..', '/app/Providers/RouteServiceProvider.js')
    ]
}