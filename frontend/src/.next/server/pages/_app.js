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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apolloClient.js":
/*!*****************************!*\
  !*** ./lib/apolloClient.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": function() { return /* binding */ APOLLO_STATE_PROP_NAME; },\n/* harmony export */   \"initializeApollo\": function() { return /* binding */ initializeApollo; },\n/* harmony export */   \"addApolloState\": function() { return /* binding */ addApolloState; },\n/* harmony export */   \"useApollo\": function() { return /* binding */ useApollo; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ \"lodash/isEqual\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';\nlet apolloClient;\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    ssrMode: true,\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n      uri: 'https://nextjs-graphql-with-prisma-simple.vercel.app/api',\n      // Server URL (must be absolute)\n      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`\n\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n      typePolicies: {\n        Query: {\n          fields: {\n            allPosts: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()\n          }\n        }\n      }\n    })\n  });\n}\n\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    // Get existing cache, loaded during client side data fetching\n    const existingCache = _apolloClient.extract(); // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n\n\n    const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {\n      // combine arrays using object equality (like in sets)\n      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter(d => sourceArray.every(s => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d, s)))]\n    }); // Restore the cache with the merged data\n\n    _apolloClient.cache.restore(data);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {\n    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n  }\n\n  return pageProps;\n}\nfunction useApollo(pageProps) {\n  const state = pageProps[APOLLO_STATE_PROP_NAME];\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(state), [state]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL2xpYi9hcG9sbG9DbGllbnQuanM/MGVlZCJdLCJuYW1lcyI6WyJBUE9MTE9fU1RBVEVfUFJPUF9OQU1FIiwiYXBvbGxvQ2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJhbGxQb3N0cyIsImNvbmNhdFBhZ2luYXRpb24iLCJpbml0aWFsaXplQXBvbGxvIiwiaW5pdGlhbFN0YXRlIiwiX2Fwb2xsb0NsaWVudCIsImV4aXN0aW5nQ2FjaGUiLCJleHRyYWN0IiwiZGF0YSIsIm1lcmdlIiwiYXJyYXlNZXJnZSIsImRlc3RpbmF0aW9uQXJyYXkiLCJzb3VyY2VBcnJheSIsImZpbHRlciIsImQiLCJldmVyeSIsInMiLCJpc0VxdWFsIiwicmVzdG9yZSIsImFkZEFwb2xsb1N0YXRlIiwiY2xpZW50IiwicGFnZVByb3BzIiwicHJvcHMiLCJ1c2VBcG9sbG8iLCJzdGF0ZSIsInN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsc0JBQXNCLEdBQUcsa0JBQS9CO0FBRVAsSUFBSUMsWUFBSjs7QUFFQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixTQUFPLElBQUlDLHdEQUFKLENBQWlCO0FBQ3RCQyxXQUFPLE1BRGU7QUFFdEJDLFFBQUksRUFBRSxJQUFJQyxvREFBSixDQUFhO0FBQ2pCQyxTQUFHLEVBQUUsMERBRFk7QUFDZ0Q7QUFDakVDLGlCQUFXLEVBQUUsYUFGSSxDQUVXOztBQUZYLEtBQWIsQ0FGZ0I7QUFNdEJDLFNBQUssRUFBRSxJQUFJQyx5REFBSixDQUFrQjtBQUN2QkMsa0JBQVksRUFBRTtBQUNaQyxhQUFLLEVBQUU7QUFDTEMsZ0JBQU0sRUFBRTtBQUNOQyxvQkFBUSxFQUFFQywwRUFBZ0I7QUFEcEI7QUFESDtBQURLO0FBRFMsS0FBbEI7QUFOZSxHQUFqQixDQUFQO0FBZ0JEOztBQUVNLFNBQVNDLGdCQUFULENBQTBCQyxZQUFZLEdBQUcsSUFBekMsRUFBK0M7QUFBQTs7QUFDcEQsUUFBTUMsYUFBYSxxQkFBR2pCLFlBQUgsMkRBQW1CQyxrQkFBa0IsRUFBeEQsQ0FEb0QsQ0FHcEQ7QUFDQTs7O0FBQ0EsTUFBSWUsWUFBSixFQUFrQjtBQUNoQjtBQUNBLFVBQU1FLGFBQWEsR0FBR0QsYUFBYSxDQUFDRSxPQUFkLEVBQXRCLENBRmdCLENBSWhCOzs7QUFDQSxVQUFNQyxJQUFJLEdBQUdDLGdEQUFLLENBQUNMLFlBQUQsRUFBZUUsYUFBZixFQUE4QjtBQUM5QztBQUNBSSxnQkFBVSxFQUFFLENBQUNDLGdCQUFELEVBQW1CQyxXQUFuQixLQUFtQyxDQUM3QyxHQUFHQSxXQUQwQyxFQUU3QyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsTUFBakIsQ0FBeUJDLENBQUQsSUFDekJGLFdBQVcsQ0FBQ0csS0FBWixDQUFtQkMsQ0FBRCxJQUFPLENBQUNDLHFEQUFPLENBQUNILENBQUQsRUFBSUUsQ0FBSixDQUFqQyxDQURDLENBRjBDO0FBRkQsS0FBOUIsQ0FBbEIsQ0FMZ0IsQ0FlaEI7O0FBQ0FYLGlCQUFhLENBQUNULEtBQWQsQ0FBb0JzQixPQUFwQixDQUE0QlYsSUFBNUI7QUFDRCxHQXRCbUQsQ0F1QnBEOzs7QUFDQSxZQUFtQyxPQUFPSCxhQUFQLENBeEJpQixDQXlCcEQ7O0FBQ0EsTUFBSSxDQUFDakIsWUFBTCxFQUFtQkEsWUFBWSxHQUFHaUIsYUFBZjtBQUVuQixTQUFPQSxhQUFQO0FBQ0Q7QUFFTSxTQUFTYyxjQUFULENBQXdCQyxNQUF4QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDaEQsTUFBSUEsU0FBSixhQUFJQSxTQUFKLGVBQUlBLFNBQVMsQ0FBRUMsS0FBZixFQUFzQjtBQUNwQkQsYUFBUyxDQUFDQyxLQUFWLENBQWdCbkMsc0JBQWhCLElBQTBDaUMsTUFBTSxDQUFDeEIsS0FBUCxDQUFhVyxPQUFiLEVBQTFDO0FBQ0Q7O0FBRUQsU0FBT2MsU0FBUDtBQUNEO0FBRU0sU0FBU0UsU0FBVCxDQUFtQkYsU0FBbkIsRUFBOEI7QUFDbkMsUUFBTUcsS0FBSyxHQUFHSCxTQUFTLENBQUNsQyxzQkFBRCxDQUF2QjtBQUNBLFFBQU1zQyxLQUFLLEdBQUdDLDhDQUFPLENBQUMsTUFBTXZCLGdCQUFnQixDQUFDcUIsS0FBRCxDQUF2QixFQUFnQyxDQUFDQSxLQUFELENBQWhDLENBQXJCO0FBQ0EsU0FBT0MsS0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2Fwb2xsb0NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudC91dGlsaXRpZXMnXG5pbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnXG5cbmV4cG9ydCBjb25zdCBBUE9MTE9fU1RBVEVfUFJPUF9OQU1FID0gJ19fQVBPTExPX1NUQVRFX18nXG5cbmxldCBhcG9sbG9DbGllbnRcblxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbmV4dGpzLWdyYXBocWwtd2l0aC1wcmlzbWEtc2ltcGxlLnZlcmNlbC5hcHAvYXBpJywgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgfSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgYWxsUG9zdHM6IGNvbmNhdFBhZ2luYXRpb24oKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xuICBjb25zdCBfYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50ID8/IGNyZWF0ZUFwb2xsb0NsaWVudCgpXG5cbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXG5cbiAgICAvLyBNZXJnZSB0aGUgZXhpc3RpbmcgY2FjaGUgaW50byBkYXRhIHBhc3NlZCBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wc1xuICAgIGNvbnN0IGRhdGEgPSBtZXJnZShpbml0aWFsU3RhdGUsIGV4aXN0aW5nQ2FjaGUsIHtcbiAgICAgIC8vIGNvbWJpbmUgYXJyYXlzIHVzaW5nIG9iamVjdCBlcXVhbGl0eSAobGlrZSBpbiBzZXRzKVxuICAgICAgYXJyYXlNZXJnZTogKGRlc3RpbmF0aW9uQXJyYXksIHNvdXJjZUFycmF5KSA9PiBbXG4gICAgICAgIC4uLnNvdXJjZUFycmF5LFxuICAgICAgICAuLi5kZXN0aW5hdGlvbkFycmF5LmZpbHRlcigoZCkgPT5cbiAgICAgICAgICBzb3VyY2VBcnJheS5ldmVyeSgocykgPT4gIWlzRXF1YWwoZCwgcykpXG4gICAgICAgICksXG4gICAgICBdLFxuICAgIH0pXG5cbiAgICAvLyBSZXN0b3JlIHRoZSBjYWNoZSB3aXRoIHRoZSBtZXJnZWQgZGF0YVxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKVxuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudFxuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFwb2xsb1N0YXRlKGNsaWVudCwgcGFnZVByb3BzKSB7XG4gIGlmIChwYWdlUHJvcHM/LnByb3BzKSB7XG4gICAgcGFnZVByb3BzLnByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdID0gY2xpZW50LmNhY2hlLmV4dHJhY3QoKVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VQcm9wc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKHBhZ2VQcm9wcykge1xuICBjb25zdCBzdGF0ZSA9IHBhZ2VQcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXVxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pXG4gIHJldHVybiBzdG9yZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/apolloClient.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globalStyles */ \"./styles/globalStyles.js\");\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/apolloClient */ \"./lib/apolloClient.js\");\nvar _jsxFileName = \"/Users/fonshettema/Development/incentro/next-graphql-api/frontend/pages/_app.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_5__.useApollo)(pageProps);\n  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n    client: apolloClient,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__.default, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.default,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvIiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU9BLE1BQU1BLEdBQW1DLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUN4RSxRQUFNQyxZQUFZLEdBQUdDLDREQUFTLENBQUNGLFNBQUQsQ0FBOUI7QUFFQSxTQUNFLHFFQUNFLE1BQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFQyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVFLGtEQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBSEYsQ0FERjtBQVNELENBWkQ7O0FBY0EsK0RBQWVGLEdBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9nbG9iYWxTdHlsZXNcIjtcbmltcG9ydCB7IHVzZUFwb2xsbyB9IGZyb20gXCIuLi9saWIvYXBvbGxvQ2xpZW50XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIENvbXBvbmVudDogYW55O1xuICBwYWdlUHJvcHM6IGFueTtcbn07XG5cbmNvbnN0IEFwcDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PjwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globalStyles.js":
/*!********************************!*\
  !*** ./styles/globalStyles.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  html {\n    box-sizing: border-box;\n    background: #F5F4F0;\n    display:block;\n    height: 100%;\n    max-width: 640px;\n    margin:0 auto;\n    padding: 0;\n  }\n\n  body {\n    background-color:#fafafa;\n    min-height:100vh;\n    padding: 1rem;\n    margin-top:0;\n    font-family:Verdana;\n  }\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3N0eWxlcy9nbG9iYWxTdHlsZXMuanM/YmQwMSJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsZ0VBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCQTtBQW9CQSwrREFBZUQsV0FBZiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6ICNGNUY0RjA7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmE7XG4gICAgbWluLWhlaWdodDoxMDB2aDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBmb250LWZhbWlseTpWZXJkYW5hO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/globalStyles.js\n");

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst theme = {\n  colors: {\n    primary: \"#fafafa\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3N0eWxlcy90aGVtZS5qcz8zNTU0Il0sIm5hbWVzIjpbInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEtBQUssR0FBRztBQUNaQyxRQUFNLEVBQUU7QUFDTkMsV0FBTyxFQUFFO0FBREg7QUFESSxDQUFkO0FBTUEsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9zdHlsZXMvdGhlbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aGVtZSA9IHtcbiAgY29sb3JzOiB7XG4gICAgcHJpbWFyeTogXCIjZmFmYWZhXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/theme.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/utilities");;

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("deepmerge");;

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash/isEqual");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();