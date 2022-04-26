const mix = require('laravel-mix');

mix.ts('src/ts/app.tsx', 'public/js')
   .sass('src/sass/app.scss', 'public/css')
   .version()
   .webpackConfig({
      resolve: {
         extensions: [ ".ts", ".tsx", ".sass", ".scss", ".css"]
      }
   });
