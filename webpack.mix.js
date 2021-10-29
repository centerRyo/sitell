const mix = require('laravel-mix');

mix.ts('resources/ts/app.tsx', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version()
   .webpackConfig({
      resolve: {
         extensions: [ ".ts", ".tsx", ".sass", ".scss", ".css"]
      }
   });
