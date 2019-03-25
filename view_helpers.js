let manifests = {};
module.exports = {
    url: app.url,
    mix: (path, manifestDirectory = '') => {
        if (!path.startsWith('/')) {
            path = '/' + path;
        }

        if (manifestDirectory && !manifestDirectory.startsWith('/')) {
            manifestDirectory = '/' + manifestDirectory
        }

        if (app.fs.file_exists(app.public_path(manifestDirectory + '/hot'))) {
            let url = app.fs.file_get_contents(app.public_path(manifestDirectory + '/hot'));

            if (url.startsWith('http://') || url.startsWith('https://')) {
                return app.make('path').join(url, path);
            }

            return app.make('path').join('http://localhost:8080', path);
        }

        let manifestPath = app.public_path(manifestDirectory + '/mix-manifest.json');

        if (!manifests.hasOwnProperty(manifestPath)) {
            if (app.fs.file_not_exists(manifestPath)) {
                // Even if the manifest file doesn't exist we should just return the path passed through.
                return path;
            }

            manifests[manifestPath] = JSON.parse(app.fs.file_get_contents(manifestPath));
        }

        return manifestDirectory + manifests[path]
    }
}