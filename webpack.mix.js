const mix = require('laravel-mix');
const tailwind = require('tailwindcss');

mix.setPublicPath('public')
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwind('./tailwind.js') ],
    });
