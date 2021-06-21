/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/addmovie";
exports.ids = ["pages/addmovie"];
exports.modules = {

/***/ "./src/components/AddMovie/AddMovie.tsx":
/*!**********************************************!*\
  !*** ./src/components/AddMovie/AddMovie.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AddMovieStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddMovieStyles */ \"./src/components/AddMovie/AddMovieStyles.tsx\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutations */ \"./src/components/AddMovie/mutations.ts\");\nvar _jsxFileName = \"/Users/fonshettema/Development/incentro/next-graphql-api/frontend/src/components/AddMovie/AddMovie.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\nconst AddMovie = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const [addMovie, {\n    error,\n    data\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_mutations__WEBPACK_IMPORTED_MODULE_4__.ADD_MOVIE, {\n    onCompleted() {\n      router.push(\"/\");\n    }\n\n  });\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    const {\n      name,\n      description,\n      cover_image,\n      imdb_url\n    } = e.target;\n    const params = {\n      name: name.value,\n      description: description.value,\n      cover_image: cover_image.value,\n      imdb_url: imdb_url.value\n    };\n    addMovie({\n      variables: params\n    });\n  }\n\n  return __jsx(_AddMovieStyles__WEBPACK_IMPORTED_MODULE_3__.AddMovieStyle, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Add a favorite movie\"), __jsx(\"form\", {\n    action: \"\",\n    method: \"POST\",\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"fieldset\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, \"Name*:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"name\",\n    id: \"name\",\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Description:\"), __jsx(\"textarea\", {\n    name: \"description\",\n    id: \"description\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"imdb_url\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"Imdb link*:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"imdb_url\",\n    id: \"imdb_url\",\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"cover_image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Cover image url*:\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"cover_image\",\n    id: \"cover_image\",\n    required: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    type: \"submit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"Submit\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMovie);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllL0FkZE1vdmllLnRzeD9iYzQ1Il0sIm5hbWVzIjpbIkFkZE1vdmllIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkTW92aWUiLCJlcnJvciIsImRhdGEiLCJ1c2VNdXRhdGlvbiIsIkFERF9NT1ZJRSIsIm9uQ29tcGxldGVkIiwicHVzaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImNvdmVyX2ltYWdlIiwiaW1kYl91cmwiLCJ0YXJnZXQiLCJwYXJhbXMiLCJ2YWx1ZSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBaUMsR0FBRyxNQUFNO0FBQzlDLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxRQUFNLENBQUNDLFFBQUQsRUFBVztBQUFFQyxTQUFGO0FBQVNDO0FBQVQsR0FBWCxJQUE4QkMsMkRBQVcsQ0FBQ0MsaURBQUQsRUFBWTtBQUN6REMsZUFBVyxHQUFHO0FBQ1pQLFlBQU0sQ0FBQ1EsSUFBUCxDQUFZLEdBQVo7QUFDRDs7QUFId0QsR0FBWixDQUEvQzs7QUFNQSxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUE4QjtBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTTtBQUFFQyxVQUFGO0FBQVFDLGlCQUFSO0FBQXFCQyxpQkFBckI7QUFBa0NDO0FBQWxDLFFBQStDTCxDQUFDLENBQUNNLE1BQXZEO0FBRUEsVUFBTUMsTUFBTSxHQUFHO0FBQ2JMLFVBQUksRUFBRUEsSUFBSSxDQUFDTSxLQURFO0FBRWJMLGlCQUFXLEVBQUVBLFdBQVcsQ0FBQ0ssS0FGWjtBQUdiSixpQkFBVyxFQUFFQSxXQUFXLENBQUNJLEtBSFo7QUFJYkgsY0FBUSxFQUFFQSxRQUFRLENBQUNHO0FBSk4sS0FBZjtBQU9BaEIsWUFBUSxDQUFDO0FBQUVpQixlQUFTLEVBQUVGO0FBQWIsS0FBRCxDQUFSO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUU7QUFBTSxVQUFNLEVBQUMsRUFBYjtBQUFnQixVQUFNLEVBQUMsTUFBdkI7QUFBOEIsWUFBUSxFQUFFUixZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLE1BQXhCO0FBQStCLE1BQUUsRUFBQyxNQUFsQztBQUF5QyxZQUFRLE1BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQVUsUUFBSSxFQUFDLGFBQWY7QUFBNkIsTUFBRSxFQUFDLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLFVBQXhCO0FBQW1DLE1BQUUsRUFBQyxVQUF0QztBQUFpRCxZQUFRLE1BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVRGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBSSxFQUFDLGFBQXhCO0FBQXNDLE1BQUUsRUFBQyxhQUF6QztBQUF1RCxZQUFRLE1BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQWJGLEVBaUJFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCRixDQURGLENBRkYsQ0FERjtBQTBCRCxDQWpERDs7QUFtREEsK0RBQWVWLFFBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRNb3ZpZS9BZGRNb3ZpZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBBZGRNb3ZpZVN0eWxlIH0gZnJvbSBcIi4vQWRkTW92aWVTdHlsZXNcIjtcbmltcG9ydCB7IEFERF9NT1ZJRSB9IGZyb20gXCIuL211dGF0aW9uc1wiO1xuXG5jb25zdCBBZGRNb3ZpZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFthZGRNb3ZpZSwgeyBlcnJvciwgZGF0YSB9XSA9IHVzZU11dGF0aW9uKEFERF9NT1ZJRSwge1xuICAgIG9uQ29tcGxldGVkKCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlOiBhbnkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgY292ZXJfaW1hZ2UsIGltZGJfdXJsIH0gPSBlLnRhcmdldDtcblxuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIG5hbWU6IG5hbWUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICBjb3Zlcl9pbWFnZTogY292ZXJfaW1hZ2UudmFsdWUsXG4gICAgICBpbWRiX3VybDogaW1kYl91cmwudmFsdWUsXG4gICAgfTtcblxuICAgIGFkZE1vdmllKHsgdmFyaWFibGVzOiBwYXJhbXMgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBZGRNb3ZpZVN0eWxlPlxuICAgICAgPGgxPkFkZCBhIGZhdm9yaXRlIG1vdmllPC9oMT5cbiAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lKjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWRiX3VybFwiPkltZGIgbGluayo6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWRiX3VybFwiIGlkPVwiaW1kYl91cmxcIiByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvdmVyX2ltYWdlXCI+Q292ZXIgaW1hZ2UgdXJsKjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNvdmVyX2ltYWdlXCIgaWQ9XCJjb3Zlcl9pbWFnZVwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9BZGRNb3ZpZVN0eWxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkTW92aWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddMovie/AddMovie.tsx\n");

/***/ }),

/***/ "./src/components/AddMovie/AddMovieStyles.tsx":
/*!****************************************************!*\
  !*** ./src/components/AddMovie/AddMovieStyles.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddMovieStyle\": function() { return /* binding */ AddMovieStyle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AddMovieStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({\n  displayName: \"AddMovieStyles__AddMovieStyle\",\n  componentId: \"gkb3p6-0\"\n})([\"background:#f5f4f0;padding:5px 0 20px 20px;h1{font-size:24px;}fieldset{width:100%;border:none;padding:0;}div{margin-bottom:16px;}label{font-weight:bold;display:block;margin-bottom:8px;}input,textarea{font-family:Helvetica,Sans-serif,Arial;padding:8px;width:100%;max-width:700px;font-size:16px;}button{padding:8px;width:100px;cursor:pointer;}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllL0FkZE1vdmllU3R5bGVzLnRzeD83MDI4Il0sIm5hbWVzIjpbIkFkZE1vdmllU3R5bGUiLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sTUFBTUEsYUFBYSxHQUFHQywyRUFBSDtBQUFBO0FBQUE7QUFBQSw2VkFBbkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRNb3ZpZS9BZGRNb3ZpZVN0eWxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQWRkTW92aWVTdHlsZSA9IHN0eWxlZC5zZWN0aW9uYFxuICBiYWNrZ3JvdW5kOiAjZjVmNGYwO1xuICBwYWRkaW5nOiA1cHggMCAyMHB4IDIwcHg7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIGZpZWxkc2V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cblxuICBpbnB1dCxcbiAgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIFNhbnMtc2VyaWYsIEFyaWFsO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddMovie/AddMovieStyles.tsx\n");

/***/ }),

/***/ "./src/components/AddMovie/mutations.ts":
/*!**********************************************!*\
  !*** ./src/components/AddMovie/mutations.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_MOVIE\": function() { return /* binding */ ADD_MOVIE; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ADD_MOVIE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n  mutation AddMovie(\n    $name: String!\n    $description: String\n    $imdb_url: String!\n    $cover_image: String!\n  ) {\n    addMovie(\n      name: $name\n      description: $description\n      imdb_url: $imdb_url\n      cover_image: $cover_image\n    )\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllL211dGF0aW9ucy50cz82ZTlkIl0sIm5hbWVzIjpbIkFERF9NT1ZJRSIsImdxbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxTQUFTLEdBQUdDLCtDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FkTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FkZE1vdmllL211dGF0aW9ucy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgQUREX01PVklFID0gZ3FsYFxuICBtdXRhdGlvbiBBZGRNb3ZpZShcbiAgICAkbmFtZTogU3RyaW5nIVxuICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgJGltZGJfdXJsOiBTdHJpbmchXG4gICAgJGNvdmVyX2ltYWdlOiBTdHJpbmchXG4gICkge1xuICAgIGFkZE1vdmllKFxuICAgICAgbmFtZTogJG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cbiAgICAgIGltZGJfdXJsOiAkaW1kYl91cmxcbiAgICAgIGNvdmVyX2ltYWdlOiAkY292ZXJfaW1hZ2VcbiAgICApXG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AddMovie/mutations.ts\n");

/***/ }),

/***/ "./src/pages/addmovie.tsx":
/*!********************************!*\
  !*** ./src/pages/addmovie.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AddMovie_AddMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AddMovie/AddMovie */ \"./src/components/AddMovie/AddMovie.tsx\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/App */ \"./src/components/App.tsx\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ \"./src/components/Header/Header.tsx\");\nvar _jsxFileName = \"/Users/fonshettema/Development/incentro/next-graphql-api/frontend/src/pages/addmovie.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nconst AddMoviePage = () => __jsx(_components_App__WEBPACK_IMPORTED_MODULE_2__.default, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}), __jsx(_components_AddMovie_AddMovie__WEBPACK_IMPORTED_MODULE_1__.default, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddMoviePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3NyYy9wYWdlcy9hZGRtb3ZpZS50c3g/OTA4OSJdLCJuYW1lcyI6WyJBZGRNb3ZpZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxZQUFZLEdBQUcsTUFDbkIsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixDQURGOztBQU9BLCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FkZG1vdmllLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRNb3ZpZSBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRNb3ZpZS9BZGRNb3ZpZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuXG5jb25zdCBBZGRNb3ZpZVBhZ2UgPSAoKSA9PiAoXG4gIDxBcHA+XG4gICAgPEhlYWRlciAvPlxuICAgIDxBZGRNb3ZpZSAvPlxuICA8L0FwcD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/addmovie.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_components_App_tsx-src_components_Header_Header_tsx"], function() { return __webpack_exec__("./src/pages/addmovie.tsx"); });
module.exports = __webpack_exports__;

})();