const mix = require('laravel-mix');
const tailwind = require('tailwindcss');

mix.setPublicPath('public')
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwind('./tailwind.js') ],
    });
