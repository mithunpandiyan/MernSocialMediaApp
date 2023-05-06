"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user/dashboard";
exports.ids = ["pages/user/dashboard"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/context/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFFM0QsTUFBTUcsNEJBQWNGLG9EQUFhQTtBQUVqQyxNQUFNRyxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDckMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ2pDUSxNQUFNLENBQUM7UUFDUEMsT0FBTztJQUNUO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDZEssU0FBU0csS0FBS0MsS0FBSyxDQUFDQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQztJQUNsRCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1gsWUFBWVksUUFBUTtRQUFDQyxPQUFPO1lBQUNWO1lBQU9DO1NBQVM7a0JBQzNDRjs7Ozs7O0FBR1A7QUFFcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VyOiB7fSxcbiAgICB0b2tlbjogXCJcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/user/dashboard.js":
/*!*********************************!*\
  !*** ./pages/user/dashboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n\n\n\nconst Home = ()=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"display-1 text-center py-5\",\n                    children: \"DashBoard\"\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/user/dashboard.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/user/dashboard.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/user/dashboard.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/user/dashboard.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBQ087QUFFMUMsTUFBTUUsT0FBTyxJQUFNO0lBQ2pCLE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFFSixpREFBVUEsQ0FBQ0MsaURBQVdBO0lBRTlDLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckQ7QUFFQSxpRUFBZUosSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL3VzZXIvZGFzaGJvYXJkLmpzPzM4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtVc2VyQ29udGV4dH0gIGZyb20gXCIuLi8uLi9jb250ZXh0XCJcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9dXNlQ29udGV4dChVc2VyQ29udGV4dClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTEgdGV4dC1jZW50ZXIgcHktNVwiPkRhc2hCb2FyZDwvaDE+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/dashboard.js"));
module.exports = __webpack_exports__;

})();