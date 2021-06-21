/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addmovie",{

/***/ "./src/components/AddMovie/AddMovie.tsx":
/*!**********************************************!*\
  !*** ./src/components/AddMovie/AddMovie.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_fonshettema_Development_incentro_next_graphql_api_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _AddMovieStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddMovieStyles */ \"./src/components/AddMovie/AddMovieStyles.tsx\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutations */ \"./src/components/AddMovie/mutations.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/fonshettema/Development/incentro/next-graphql-api/frontend/src/components/AddMovie/AddMovie.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);\n\n\n\n\nvar AddMovie = function AddMovie() {\n  _s();\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_mutations__WEBPACK_IMPORTED_MODULE_3__.ADD_MOVIE),\n      _useMutation2 = (0,_Users_fonshettema_Development_incentro_next_graphql_api_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),\n      addMovie = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      error = _useMutation2$.error,\n      data = _useMutation2$.data;\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    var _e$target = e.target,\n        name = _e$target.name,\n        description = _e$target.description,\n        cover_image = _e$target.cover_image,\n        imdb_url = _e$target.imdb_url;\n    var params = {\n      name: name.value,\n      description: description.value,\n      cover_image: cover_image.value,\n      imdb_url: imdb_url.value\n    };\n    addMovie({\n      variables: params\n    });\n  }\n\n  console.log(error);\n  console.log(data);\n  return __jsx(_AddMovieStyles__WEBPACK_IMPORTED_MODULE_2__.AddMovieStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Add a favorite movie\"), __jsx(\"form\", {\n    action: \"\",\n    method: \"POST\",\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"fieldset\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Name*:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    id: \"name\",\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Description:\"), __jsx(\"textarea\", {\n    name: \"description\",\n    id: \"description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"cover_image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Cover image url*:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"cover_image\",\n    id: \"cover_image\",\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"imdb_url\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"Imdb link*:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"imdb_url\",\n    id: \"imdb_url\",\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"Submit\"))));\n};\n\n_s(AddMovie, \"l+/9PPVEEtgvh6vJ3/dxDSPcpK4=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation];\n});\n\n_c = AddMovie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMovie);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddMovie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkTW92aWUvQWRkTW92aWUudHN4P2JjNDUiXSwibmFtZXMiOlsiQWRkTW92aWUiLCJ1c2VNdXRhdGlvbiIsIkFERF9NT1ZJRSIsImFkZE1vdmllIiwiZXJyb3IiLCJkYXRhIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiY292ZXJfaW1hZ2UiLCJpbWRiX3VybCIsInBhcmFtcyIsInZhbHVlIiwidmFyaWFibGVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxHQUFNO0FBQUE7O0FBQUEscUJBQ1ZDLDJEQUFXLENBQUNDLGlEQUFELENBREQ7QUFBQTtBQUFBLE1BQ3ZDQyxRQUR1QztBQUFBO0FBQUEsTUFDM0JDLEtBRDJCLGtCQUMzQkEsS0FEMkI7QUFBQSxNQUNwQkMsSUFEb0Isa0JBQ3BCQSxJQURvQjs7QUFHOUMsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUR1QixvQkFFOEJELENBQUMsQ0FBQ0UsTUFGaEM7QUFBQSxRQUVmQyxJQUZlLGFBRWZBLElBRmU7QUFBQSxRQUVUQyxXQUZTLGFBRVRBLFdBRlM7QUFBQSxRQUVJQyxXQUZKLGFBRUlBLFdBRko7QUFBQSxRQUVpQkMsUUFGakIsYUFFaUJBLFFBRmpCO0FBSXZCLFFBQU1DLE1BQU0sR0FBRztBQUNiSixVQUFJLEVBQUVBLElBQUksQ0FBQ0ssS0FERTtBQUViSixpQkFBVyxFQUFFQSxXQUFXLENBQUNJLEtBRlo7QUFHYkgsaUJBQVcsRUFBRUEsV0FBVyxDQUFDRyxLQUhaO0FBSWJGLGNBQVEsRUFBRUEsUUFBUSxDQUFDRTtBQUpOLEtBQWY7QUFPQVosWUFBUSxDQUFDO0FBQUVhLGVBQVMsRUFBRUY7QUFBYixLQUFELENBQVI7QUFDRDs7QUFFREcsU0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVo7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVliLElBQVo7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUFNLFVBQU0sRUFBQyxFQUFiO0FBQWdCLFVBQU0sRUFBQyxNQUF2QjtBQUE4QixZQUFRLEVBQUVDLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsTUFBeEI7QUFBK0IsTUFBRSxFQUFDLE1BQWxDO0FBQXlDLFlBQVEsTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBVSxRQUFJLEVBQUMsYUFBZjtBQUE2QixNQUFFLEVBQUMsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsYUFBeEI7QUFBc0MsTUFBRSxFQUFDLGFBQXpDO0FBQXVELFlBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFJLEVBQUMsVUFBeEI7QUFBbUMsTUFBRSxFQUFDLFVBQXRDO0FBQWlELFlBQVEsTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBYkYsRUFpQkU7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLENBREYsQ0FGRixDQURGO0FBMEJELENBOUNEOztHQUFNTixRO1VBQ2dDQyx1RDs7O0tBRGhDRCxRO0FBZ0ROLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQWRkTW92aWUvQWRkTW92aWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgQWRkTW92aWVTdHlsZSB9IGZyb20gXCIuL0FkZE1vdmllU3R5bGVzXCI7XG5pbXBvcnQgeyBBRERfTU9WSUUgfSBmcm9tIFwiLi9tdXRhdGlvbnNcIjtcblxuY29uc3QgQWRkTW92aWU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbYWRkTW92aWUsIHsgZXJyb3IsIGRhdGEgfV0gPSB1c2VNdXRhdGlvbihBRERfTU9WSUUpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGNvdmVyX2ltYWdlLCBpbWRiX3VybCB9ID0gZS50YXJnZXQ7XG5cbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBuYW1lOiBuYW1lLnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgY292ZXJfaW1hZ2U6IGNvdmVyX2ltYWdlLnZhbHVlLFxuICAgICAgaW1kYl91cmw6IGltZGJfdXJsLnZhbHVlLFxuICAgIH07XG5cbiAgICBhZGRNb3ZpZSh7IHZhcmlhYmxlczogcGFyYW1zIH0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coZXJyb3IpO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxBZGRNb3ZpZVN0eWxlPlxuICAgICAgPGgxPkFkZCBhIGZhdm9yaXRlIG1vdmllPC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lKjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb3Zlcl9pbWFnZVwiPkNvdmVyIGltYWdlIHVybCo6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3Zlcl9pbWFnZVwiIGlkPVwiY292ZXJfaW1hZ2VcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltZGJfdXJsXCI+SW1kYiBsaW5rKjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltZGJfdXJsXCIgaWQ9XCJpbWRiX3VybFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9BZGRNb3ZpZVN0eWxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddMovie/AddMovie.tsx\n");

/***/ }),

/***/ "./src/components/AddMovie/mutations.ts":
/*!**********************************************!*\
  !*** ./src/components/AddMovie/mutations.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_MOVIE\": function() { return /* binding */ ADD_MOVIE; }\n/* harmony export */ });\n/* harmony import */ var _Users_fonshettema_Development_incentro_next_graphql_api_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _templateObject() {\n  var data = (0,_Users_fonshettema_Development_incentro_next_graphql_api_frontend_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  mutation AddMovie(\\n    $name: String!\\n    $description: String\\n    $imdb_url: String!\\n    $cover_image: String!\\n  ) {\\n    addMovie(\\n      name: $name\\n      description: $description\\n      imdb_url: $imdb_url\\n      cover_image: $cover_image\\n    )\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nvar ADD_MOVIE = gql(_templateObject());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkTW92aWUvbXV0YXRpb25zLnRzPzZlOWQiXSwibmFtZXMiOlsiQUREX01PVklFIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQUdDLEdBQUgsbUJBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRNb3ZpZS9tdXRhdGlvbnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREX01PVklFID0gZ3FsYFxuICBtdXRhdGlvbiBBZGRNb3ZpZShcbiAgICAkbmFtZTogU3RyaW5nIVxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgJGltZGJfdXJsOiBTdHJpbmchXG4gICAgJGNvdmVyX2ltYWdlOiBTdHJpbmchXG4gICkge1xuICAgIGFkZE1vdmllKFxuICAgICAgbmFtZTogJG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICAgIGltZGJfdXJsOiAkaW1kYl91cmxcbiAgICAgIGNvdmVyX2ltYWdlOiAkY292ZXJfaW1hZ2VcbiAgICApXG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddMovie/mutations.ts\n");

/***/ })

});