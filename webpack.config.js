/**
 * Created by raniys on 5/25/17.
 */

module.exports = process.env.NODE_ENV === "production" ? require('./build/webpack.prod.conf') : require('./build/webpack.dev.conf');
