var myBundle1 = (function (exports) {
	'use strict';

	const openWeb = () => open('https://www.baidu.com');

	exports.openWeb = openWeb;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
