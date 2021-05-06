const scripts = require('./scripts.json');
const staticFile = require('connect-static-file');
const path = require('path');

module.exports = (app) => {
    scripts.forEach((script) => {
        const name = path.parse(script).base;
        app.use(`/vendor/${name}`, staticFile(path.join(__dirname, "..", script)));
    });
}