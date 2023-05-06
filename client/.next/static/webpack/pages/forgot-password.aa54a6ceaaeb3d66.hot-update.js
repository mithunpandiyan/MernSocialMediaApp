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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/forms/ForgotPasswordForm */ \"./components/forms/ForgotPasswordForm.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst forgotPassword = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [secret, setSecret] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ok, setOk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        console.log(name, email, password, secret);\n        try {\n            setLoading(true);\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"\".concat(\"http://localhost:8080/api\", \"/forgot-password\"), {\n                email,\n                newPassword,\n                secret\n            });\n            console.log(\"forgot password data=>\", data);\n        //   setEmail(\"\");\n        //   setPassword(\"\");\n        //   setSecret(\"\");\n        //   setName(\"\");\n        //   setOk(data.ok); // Toaster Success\n        //   setLoading(false);\n        } catch (error) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(error.response.data);\n            setLoading(false);\n        }\n        if (state && state.token) router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-5 bg-default-Image text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Forgot Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6 offset-md-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        handleSubmit: handleSubmit,\n                        email: email,\n                        setEmail: setEmail,\n                        newPassword: password,\n                        setPassword: setPassword,\n                        secret: secret,\n                        setSecret: setSecret,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        title: \"Congratulations...\",\n                        size: \"sm\",\n                        show: ok,\n                        onHide: ()=>setOk(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Header, {\n                                closeButton: true\n                            }, void 0, false, {\n                                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-center\",\n                                children: \"Congratulations! You can login with your new Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/login\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mithunp/Documents/Projects/MernSocialMediaApp/client/pages/forgot-password.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(forgotPassword, \"ES9PgbDI0cjp6jEpZs1iJ+PZSOM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (forgotPassword);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNuQjtBQUNhO0FBQ0c7QUFDYjtBQUMyQztBQUMvQjtBQUNEO0FBRXhDLE1BQU1TLGlCQUFpQixJQUFNOztJQUMzQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsUUFBUUMsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNnQixJQUFJQyxNQUFNLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xDLE1BQU0sQ0FBQ2tCLFNBQVNDLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMsTUFBTSxDQUFDb0IsT0FBT0MsU0FBUyxHQUFHcEIsaURBQVVBLENBQUNNLGlEQUFXQTtJQUNoRCxNQUFNZSxTQUFTZCxzREFBU0E7SUFFeEIsTUFBTWUsZUFBZSxPQUFPQyxRQUFVO1FBQ3BDQSxNQUFNQyxjQUFjO1FBQ3BCQyxRQUFRQyxHQUFHLENBQUNDLE1BQU1sQixPQUFPbUIsVUFBVWY7UUFDbkMsSUFBSTtZQUNGSyxXQUFXLElBQUk7WUFDZixNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHLE1BQU01QixrREFBVSxDQUMvQixHQUErQixPQUE1QjhCLDJCQUEyQixFQUFDLHFCQUMvQjtnQkFDRXRCO2dCQUNBRTtnQkFDQUU7WUFDRjtZQUVGWSxRQUFRQyxHQUFHLENBQUMsMEJBQXlCRztRQUN2QyxrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsdUNBQXVDO1FBQ3ZDLHVCQUF1QjtRQUN2QixFQUFFLE9BQU9LLE9BQU87WUFDZGhDLHVEQUFXLENBQUNnQyxNQUFNQyxRQUFRLENBQUNOLElBQUk7WUFDL0JYLFdBQVcsS0FBSztRQUNsQjtRQUVBLElBQUlDLFNBQVNBLE1BQU1pQixLQUFLLEVBQUVmLE9BQU9nQixJQUFJLENBQUM7SUFDeEM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2xDLDRFQUFrQkE7d0JBQ2pCaUIsY0FBY0E7d0JBQ2RiLE9BQU9BO3dCQUNQQyxVQUFVQTt3QkFDVkMsYUFBYWlCO3dCQUNiYSxhQUFhQTt3QkFDYjVCLFFBQVFBO3dCQUNSQyxXQUFXQTt3QkFDWEcsU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWYsOERBQUNxQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNwQyw2REFBS0E7d0JBQ0p1QyxPQUFPO3dCQUNQQyxNQUFLO3dCQUNMQyxNQUFNN0I7d0JBQ044QixRQUFRLElBQU03QixNQUFNLEtBQUs7OzBDQUV6Qiw4REFBQ2Isb0VBQVk7Z0NBQUM0QyxXQUFXOzs7Ozs7MENBQ3pCLDhEQUFDQztnQ0FBRVQsV0FBVTswQ0FBYzs7Ozs7OzBDQUczQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNuQyxrREFBSUE7b0NBQUM2QyxNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVbEM7R0FuRk16Qzs7UUFRV0Qsa0RBQVNBOzs7QUE2RTFCLCtEQUFlQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcz8xYjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTW9kYWxcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBGb3Jnb3RQYXNzd29yZEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybXMvRm9yZ290UGFzc3dvcmRGb3JtXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZm9yZ290UGFzc3dvcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuZXdQYXNzd29yZCwgc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWNyZXQsIHNldFNlY3JldF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW29rLCBzZXRPa10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgc2VjcmV0KTtcbiAgICB0cnkge1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJfS9mb3Jnb3QtcGFzc3dvcmRgLFxuICAgICAgICB7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgbmV3UGFzc3dvcmQsXG4gICAgICAgICAgc2VjcmV0LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJmb3Jnb3QgcGFzc3dvcmQgZGF0YT0+XCIsZGF0YSk7XG4gICAgLy8gICBzZXRFbWFpbChcIlwiKTtcbiAgICAvLyAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgIC8vICAgc2V0U2VjcmV0KFwiXCIpO1xuICAgIC8vICAgc2V0TmFtZShcIlwiKTtcbiAgICAvLyAgIHNldE9rKGRhdGEub2spOyAvLyBUb2FzdGVyIFN1Y2Nlc3NcbiAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50b2tlbikgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTUgYmctZGVmYXVsdC1JbWFnZSB0ZXh0LWxpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGgxPkZvcmdvdCBQYXNzd29yZDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgIDxGb3Jnb3RQYXNzd29yZEZvcm1cbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxuICAgICAgICAgICAgc2V0RW1haWw9e3NldEVtYWlsfVxuICAgICAgICAgICAgbmV3UGFzc3dvcmQ9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgc2V0UGFzc3dvcmQ9e3NldFBhc3N3b3JkfVxuICAgICAgICAgICAgc2VjcmV0PXtzZWNyZXR9XG4gICAgICAgICAgICBzZXRTZWNyZXQ9e3NldFNlY3JldH1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICB0aXRsZT17XCJDb25ncmF0dWxhdGlvbnMuLi5cIn1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBzaG93PXtva31cbiAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gc2V0T2soZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+PC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBDb25ncmF0dWxhdGlvbnMhIFlvdSBjYW4gbG9naW4gd2l0aCB5b3VyIG5ldyBQYXNzd29yZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+TG9naW48L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3Jnb3RQYXNzd29yZDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJheGlvcyIsInRvYXN0IiwiTW9kYWwiLCJMaW5rIiwiRm9yZ290UGFzc3dvcmRGb3JtIiwiVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJmb3Jnb3RQYXNzd29yZCIsImVtYWlsIiwic2V0RW1haWwiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwic2VjcmV0Iiwic2V0U2VjcmV0Iiwib2siLCJzZXRPayIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiZXJyb3IiLCJyZXNwb25zZSIsInRva2VuIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2V0UGFzc3dvcmQiLCJ0aXRsZSIsInNpemUiLCJzaG93Iiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n"));

/***/ })

});