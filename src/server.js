import express from 'express'
import path from 'path'
import socketServer from './socketServer'
import config from './config'

const app = express();

//app.use(express.static(path.join(__dirname, '..', 'static')));

//app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

const publicPath = '/';
const outputPath = path.resolve(process.cwd(), 'static');

app.use(publicPath, express.static(outputPath));

app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));

const server = app.listen(config.port, function() {
  console.log(`Server started: http://${config.host}:${config.port}/`);
});

socketServer(server);

// webpack dev server for hot reloading
if(config.env === 'development') {
  require('../webpack/dev-server');
}