/**
 * Created by raniys on 5/25/17.
 */

process.env.NODE_ENV = 'development';

const appConfig = require('./build/webpack.app.config');

module.exports = appConfig;