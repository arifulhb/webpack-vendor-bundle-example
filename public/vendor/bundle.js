webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, _, moment) {//require("font-awesome-webpack");
	
	var custom_css = __webpack_require__(160);
	
	
	var cjs         = __webpack_require__(164);
	
	/* jquery */
	$(document).ready(function(){
	
	    $('.title').html('<h3>Webpack Starter Kit</h3>');
	    $('.lead').html('Pre-configured <em>webpack.confg</em> file with necessary <em>module loaders</em>, ' +
	        '<em>resolve</em>, <em>plugins</em> etc and ' +
	        ' <strong>production ready</strong> configuration!');
	
	
	    $('.message').html('<h3>'+cjs.sayTheWord()+'</h3>');
	
	
	});
	
	/* jquey.Inputmask */
	$('.date').inputmask('99-99-9999');
	
	
	/* bootstrap function */
	$('#myTabs a').click(function (e) {
	    e.preventDefault()
	    $(this).tab('show')
	});
	
	
	/* lodash */
	var arr =['one', 'tow', 'three'];
	
	    console.log('lodash test');
	    _.each(arr, function(n){
	        console.log(n);
	    });
	
	/* moment */
	var m = moment();
	console.log(m.format());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70), __webpack_require__(71), __webpack_require__(73)))

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(163)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./custom.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./custom.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(162)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n    padding-top: 50px;\n}\n.starter-template {\n    padding: 40px 15px;\n    text-align: center;\n}", ""]);
	
	// exports


/***/ },

/***/ 164:
/***/ function(module, exports) {

	(function(){
	
	    var sayTheWord = function () {
	        return 'Hello World!';
	    };
	    module.exports = {
	        sayTheWord:sayTheWord
	    };
	})();

/***/ }

});
//# sourceMappingURL=bundle.js.map