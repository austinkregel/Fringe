app.base_path = (...paths) => {
    return app.make('path').join(__dirname, ...paths);
};

app.resource_path = (...paths) => app.base_path('resources', ...paths);

app.storage_path = (...paths) => app.base_path('storage', ...paths);

app.public_path = (...paths) => app.base_path('public', ...paths);

app.controller = (namespace) => {
    let controller = require(app.base_path('app/Http/Controllers', namespace));
    return new controller();
}

app.url = (...paths) => app.make('path').join(app.config.app.url, ...paths);

let edge = app.make('edge.js')
edge.registerViews(app.resource_path('views'));
app.view = edge.share(require('./view_helpers'))

// Add some PHP Style file helpers to get around the pesky encoding requirements, and to just make easier names...
app.fs =  {
    file_exists: (path) => app.make('fs').existsSync(path),
    file_not_exists: (path) => !app.make('fs').existsSync(path),
    file_get_contents: (path) => app.make('fs').readFileSync(path, 'UTF-8')
}