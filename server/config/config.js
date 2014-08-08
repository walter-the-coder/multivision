var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT  || 3030
	},
	production: {
		db: 'mongodb://multivisionLearning:multivisionLearning123@ds053109.mongolab.com:53109/multivision_training',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}