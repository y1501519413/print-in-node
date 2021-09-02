(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myBundle2 = {}));
}(this, (function (exports) { 'use strict';

	const openWeb = () => open('https://www.baidu.com');

	exports.openWeb = openWeb;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
