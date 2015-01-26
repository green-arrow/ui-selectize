module.exports = {
	included: function(app) {
		this._super.included(app);
		app.import(app.bowerDirectory + 'selectize/dist/js/standalone/selectize.js');
		app.import(app.bowerDirectory + 'selectize/dist/css/selectize.css');
		app.import(app.bowerDirectory + 'selectize/dist/css/selectize.default.css');
	}
};