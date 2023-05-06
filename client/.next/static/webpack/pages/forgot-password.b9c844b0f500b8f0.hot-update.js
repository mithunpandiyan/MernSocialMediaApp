"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/ForgotPasswordForm */ \"./components/forms/ForgotPasswordForm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst forgotPassword = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [secret, setSecret] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ok, setOk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        console.log(name, email, password, secret);\n        try {\n            setLoading(true);\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(\"http://localhost:8080/api\", \"/forgot-password\"), {\n                email,\n                newPassword,\n                secret\n            });\n            setEmail(\"\");\n            setPassword(\"\");\n            setSecret(\"\");\n            setName(\"\");\n            setOk(data.ok); // Toaster Success\n            setLoading(false);\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data);\n            setLoading(false);\n        }\n        if (state && state.token) router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-5 bg-default-Image text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Forgot Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6 offset-md-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        handleSubmit: handleSubmit,\n                        name: name,\n                        setName: setName,\n                        email: email,\n                        setEmail: setEmail,\n                        password: password,\n                        setPassword: setPassword,\n                        secret: secret,\n                        setSecret: setSecret,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        title: \"Congratulations...\",\n                        size: \"sm\",\n                        show: ok,\n                        onHide: ()=>setOk(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Header, {\n                                closeButton: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center\",\n                                children: \"Congratulations! You can login with your new Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/login\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(forgotPassword, \"Bo+9boluNSAUFwQ0fZaQKML6Hmk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (forgotPassword);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUNhO0FBQ0c7QUFDYjtBQUMyQztBQUNsQztBQUNFO0FBRXhDLE1BQU1TLGlCQUFpQixJQUFNOztJQUMzQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNnQixJQUFJQyxNQUFNLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xDLE1BQU0sQ0FBQ2tCLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsTUFBTSxDQUFDb0IsT0FBTUMsU0FBUyxHQUFHcEIsaURBQVVBLENBQUNNLGlEQUFXQTtJQUMvQyxNQUFNZSxTQUFTZCxzREFBU0E7SUFFeEIsTUFBTWUsZUFBZSxPQUFPQyxRQUFVO1FBQ3BDQSxNQUFNQyxjQUFjO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUNDLE1BQU1sQixPQUFPbUIsVUFBVWY7UUFDbkMsSUFBSTtZQUNGSyxXQUFXLElBQUk7WUFDZixNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHLE1BQU01QixrREFBVSxDQUMvQixHQUErQixPQUE1QjhCLDJCQUEyQixFQUFDLHFCQUMvQjtnQkFDRXRCO2dCQUNSRTtnQkFDUUU7WUFDRjtZQUVGSCxTQUFTO1lBQ1R3QixZQUFZO1lBQ1pwQixVQUFVO1lBQ1ZxQixRQUFRO1lBQ1JuQixNQUFNYSxLQUFLZCxFQUFFLEdBQUcsa0JBQWtCO1lBQ2xDRyxXQUFXLEtBQUs7UUFDbEIsRUFBRSxPQUFPa0IsT0FBTztZQUNkbEMsdURBQVcsQ0FBQ2tDLE1BQU1DLFFBQVEsQ0FBQ1IsSUFBSTtZQUMvQlgsV0FBVyxLQUFLO1FBQ2xCO1FBRUgsSUFBR0MsU0FBU0EsTUFBTW1CLEtBQUssRUFBRWpCLE9BQU9rQixJQUFJLENBQUM7SUFDcEM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ3BDLDRFQUFrQkE7d0JBQ2pCaUIsY0FBY0E7d0JBQ2RLLE1BQU1BO3dCQUNOUSxTQUFTQTt3QkFDVDFCLE9BQU9BO3dCQUNQQyxVQUFVQTt3QkFDVmtCLFVBQVVBO3dCQUNWTSxhQUFhQTt3QkFDYnJCLFFBQVFBO3dCQUNSQyxXQUFXQTt3QkFDWEcsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWYsOERBQUN1QjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUN0Qyw2REFBS0E7d0JBQ0p3QyxPQUFPO3dCQUNQQyxNQUFLO3dCQUNMQyxNQUFNOUI7d0JBQ04rQixRQUFRLElBQU05QixNQUFNLEtBQUs7OzBDQUV6Qiw4REFBQ2Isb0VBQVk7Z0NBQUM2QyxXQUFXOzs7Ozs7MENBQ3pCLDhEQUFDQztnQ0FBRVIsV0FBVTswQ0FBYzs7Ozs7OzBDQUMzQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNyQyxrREFBSUE7b0NBQUM4QyxNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbEM7R0FuRk0xQzs7UUFRV0Qsa0RBQVNBOzs7QUE2RTFCLCtEQUFlQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcz8xYjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Nb2RhbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3Jtcy9Gb3Jnb3RQYXNzd29yZEZvcm1cIjtcbmltcG9ydCB7VXNlckNvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBmb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgc2VjcmV0KTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9mb3Jnb3QtcGFzc3dvcmRgLFxuICAgICAgICB7XG4gICAgICAgICAgZW1haWwsXG4gIG5ld1Bhc3N3b3JkLFxuICAgICAgICAgIHNlY3JldCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XG4gICAgICBzZXRTZWNyZXQoXCJcIik7XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0T2soZGF0YS5vayk7IC8vIFRvYXN0ZXIgU3VjY2Vzc1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gaWYoc3RhdGUgJiYgc3RhdGUudG9rZW4pIHJvdXRlci5wdXNoKCcvJylcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01IGJnLWRlZmF1bHQtSW1hZ2UgdGV4dC1saWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoMT5Gb3Jnb3QgUGFzc3dvcmQ8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICA8Rm9yZ290UGFzc3dvcmRGb3JtXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICBzZXROYW1lPXtzZXROYW1lfVxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgICAgc2V0RW1haWw9e3NldEVtYWlsfVxuICAgICAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxuICAgICAgICAgICAgc2VjcmV0PXtzZWNyZXR9XG4gICAgICAgICAgICBzZXRTZWNyZXQ9e3NldFNlY3JldH1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICB0aXRsZT17XCJDb25ncmF0dWxhdGlvbnMuLi5cIn1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBzaG93PXtva31cbiAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0T2soZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+PC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNvbmdyYXR1bGF0aW9ucyEgWW91IGNhbiBsb2dpbiB3aXRoIHlvdXIgbmV3IFBhc3N3b3JkPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+TG9naW48L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9yZ290UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiYXhpb3MiLCJ0b2FzdCIsIk1vZGFsIiwiTGluayIsIkZvcmdvdFBhc3N3b3JkRm9ybSIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInNldEVtYWlsIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsInNlY3JldCIsInNldFNlY3JldCIsIm9rIiwic2V0T2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJwYXNzd29yZCIsImRhdGEiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsInNldFBhc3N3b3JkIiwic2V0TmFtZSIsImVycm9yIiwicmVzcG9uc2UiLCJ0b2tlbiIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwic2l6ZSIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n"));

/***/ })

});