yaml = require('js-yaml');
fs = require('fs');
var config = {}

try {
    config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
} catch (e) {
    console.log(e);
}

module.exports = config;