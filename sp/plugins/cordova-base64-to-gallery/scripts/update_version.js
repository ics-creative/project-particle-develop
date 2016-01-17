/*eslint-env node*/

// Modules
var fs     = require('fs');
var libxml = require('libxmljs');
var pkg    = require('../package.json');

// CONSTS
var CONFIG_FILE = 'plugin.xml';

var version       = pkg.version;
var configContent = fs.readFileSync(CONFIG_FILE);
var configXML     = libxml.parseXmlString(configContent);
var configVersion = configXML.root().attr('version');

// Set version
configVersion.value(version);

fs.writeFileSync(CONFIG_FILE, configXML.toString());
