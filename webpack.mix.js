const mix = require('laravel-mix');

mix.ts('frontend/src/entries/app.tsx', 'public/js')
   .sass('frontend/src/styles/app.scss', 'public/css')
   .version()
   .webpackConfig({
      resolve: {
         extensions: [ ".ts", ".tsx", ".sass", ".scss", ".css"]
      }
   });
