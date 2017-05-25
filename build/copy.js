require('shelljs/global');

rm('-rf', './dist/');
mkdir('-p', './dist/');
cp('-R', 'favicon.ico', './dist/');
