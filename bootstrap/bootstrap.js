/*-----------------------------------------------------------------
 * Here we're going to register all the dependencies for the app
 * that way we everything gets registered in the same place.
 *-----------------------------------------------------------------
 */


/**
 * Reigster the models here.
 */
app.aliases({
    'model.user': require(app.base_path('app/User'))
})