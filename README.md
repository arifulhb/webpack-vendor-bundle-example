# Webpack Starter Kit
## webpack-vendor-bundle-example
Easy and simple Webpack configuration example for bundle and vendor separation and load common packages.

## What this 
An easy and simple Webpack example showing 

- how to separate common vendor scripts from your script and 
- load common packages involving several loaders.


## Packages Include

- jQuery
- Bootstrap
- Moment
- Lodash
- jQuery-Inputmask

## How to use

The script will generate `vendor.js` and `vendor.bundle.js` files in your `public\vendor` folder. This will also copy 
some of your Twitter Bootstrap fonts in that folder for loading. 

- **vendor.js**: Contain all of your javascript files. **When you add new javascript file**, just require that file in 
`index.js`. An example file is `resources\js\my-commonjs.js` which is required in `index.js` and used to print message. 

- **vendor.bundle.js**: Contain all of your vendor files. List of vendors are set in `entry:[vendor:[...]]` in 
`webpack.config.js` file. For Production use `webpack.production.config.js` file.


#### For development
To generate files for development, just run `npm start` in your terminal.
 
 
#### For production
To generate files for production, just run `npm run deploy` in your terminal. This will Uglify your js files and add `.min`
in your files.

### Bugs and Questions
Create an **issue** if you've any questions or found any bug or need any more feature _(I've plan to add more common packages)
  and improve the example._

<br><br><br> 
Please **Fork** and **Star** the project if it helps you. Your generosity will inspire more to do such stuffs. 