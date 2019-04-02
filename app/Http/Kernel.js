/*-------------------------------------------------------------------------------------
 * Here you can pull in middleware from pretty much from anywhere. The only stipulation
 * is that the pulled middleware MUST be a function. Otherwise stuff just will not work
 * There are a few examples of things I thought could be useful... But that's up to you
 * ------------------------------------------------------------------------------------
 */

const reusedMiddleware = {
    authenticated: require('./Middleware/Authenticated'),
}


module.exports = {
    web: Object.values({
        ...reusedMiddleware
    }),

    ...reusedMiddleware
}