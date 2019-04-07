require('dotenv').config()
require('fringejs');
app.closeActions = [];

require('./bootstrap/helpers');

const Config = app.make('Config');

/*-----------------------------------------------------------------
 * Generally we're going to configure our own config directory
 * since we can change where we want to put the config directory.
 *-----------------------------------------------------------------
 */
app.config = Config.register(app.base_path('/config'));

require('./bootstrap/bootstrap')

/*-----------------------------------------------------------------
 * Build the providers from the configuration files so we can
 * ensure that all the local systems are loaded.
 * -----------------------------------------------------------------
 */
app.register(app.config.app.providers || []);

app.close = () => {
    app.closeActions.map(closure => closure());
}


process.stdin.resume();//so the program will not close instantly

function exitHandler(options, exitCode) {
    app.close();
    process.exit();
}

//do something when app is closing
process.on('exit', exitHandler);

//catches ctrl+c event
process.on('SIGINT', exitHandler);

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);

//catches uncaught exceptions
process.on('uncaughtException', exitHandler);
