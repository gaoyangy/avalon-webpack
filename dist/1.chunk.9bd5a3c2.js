webpackJsonp([1,3],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./about/about.html": 376
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 375;


/***/ }),

/***/ 376:
/***/ (function(module, exports) {

	module.exports = "<div ms-controller=\"about\" class=\"about-panel\">\n  这里是关于mobile页面\n      <h1>这里演示对话框和验证组件</h1>\n      <button class=\"pure-button-primary\" ms-click=\"show('testdialog')\">点击打开对话框</button>\n      <div ms-widget=\"dialog,testdialog,$OptTestDialog\">\n          <form class=\"pure-form pure-form-stacked\" ms-widget=\"validation,validationVM\">\n              <ul>\n                  <li>\n                      <label>姓名：</label><input type=\"text\" ms-duplex-required=\"name\" placeholder=\"请输入姓名\">\n                  </li>\n                  <li>\n                      <label>身份证号：</label><input type=\"text\" ms-duplex-norequired-id=\"idcard\" placeholder=\"请输入身份证号\">\n                  </li>\n                  <li>\n                      <label>手机号：</label><input type=\"text\" placeholder=\"请输入手机号码\" ms-duplex-phone-required=\"phone\" data-duplex-changed=\"change\">\n                  </li>\n              </ul>\n          </form>\n      </div>\n  </div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./about/about.html": 378
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 377;


/***/ }),

/***/ 378:
/***/ (function(module, exports) {

	module.exports = "<div ms-controller=\"about\" class=\"about-panel\">\n  这里是关于pc页面\n      <h1>这里演示对话框和验证组件</h1>\n      <button class=\"pure-button-primary\" ms-click=\"show('testdialog')\">点击打开对话框</button>\n      <div ms-widget=\"dialog,testdialog,$OptTestDialog\">\n          <form class=\"pure-form pure-form-stacked\" ms-widget=\"validation,validationVM\">\n              <ul>\n                  <li>\n                      <label>姓名：</label><input type=\"text\" ms-duplex-required=\"name\" placeholder=\"请输入姓名\">\n                  </li>\n                  <li>\n                      <label>身份证号：</label><input type=\"text\" ms-duplex-norequired-id=\"idcard\" placeholder=\"请输入身份证号\">\n                  </li>\n                  <li>\n                      <label>手机号：</label><input type=\"text\" placeholder=\"请输入手机号码\" ms-duplex-phone-required=\"phone\" data-duplex-changed=\"change\">\n                  </li>\n              </ul>\n          </form>\n      </div>\n  </div>"

/***/ })

});
//# sourceMappingURL=1.chunk.9bd5a3c2.js.map