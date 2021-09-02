/**
 * vue项目使用的瀑布流布局
 * @version: 1.0.2
 * @author: yang <m15009010297@163.com>
 * @date: 2021-06-21
 **/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.kdschema = {}));
}(this, (function (exports) { 'use strict';

	const openWeb = () => open('https://www.baidu.com');

	exports.openWeb = openWeb;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
