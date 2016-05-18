import webpack from 'webpack'
import config from './config'



// webpack dev server for hot reloading
if(config.env === 'development') {
  require('../webpack/dev-server');
}