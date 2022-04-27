const mix = require('laravel-mix');

mix.ts('src/entries/app.tsx', 'public/js')
   .sass('src/styles/app.scss', 'public/css')
   .version()
   .webpackConfig({
      resolve: {
         extensions: [ ".ts", ".tsx", ".sass", ".scss", ".css"]
      }
   });
