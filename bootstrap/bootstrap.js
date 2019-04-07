/*-----------------------------------------------------------------
 * Here we're going to register all the dependencies for the app
 * that way we everything gets registered in the same place.
 *-----------------------------------------------------------------
 */
const { validateAll } = require('indicative')

const knex = require('knex')(app.config.database[app.config.database.connection]);
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin(require('bookshelf-eloquent'));

app.shelf = bookshelf

/**
 * Reigster the models here.
 */
app.aliases({
    'validator': validateAll,
})