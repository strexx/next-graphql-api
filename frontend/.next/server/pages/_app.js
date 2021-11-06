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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/apolloClient.js":
/*!*********************************!*\
  !*** ./src/lib/apolloClient.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": () => (/* binding */ APOLLO_STATE_PROP_NAME),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ \"lodash/isEqual\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nlet apolloClient;\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    ssrMode: true,\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n      uri: \"http://localhost:4000\",\n      // Server URL (must be absolute)\n      credentials: \"same-origin\" // Additional fetch() options like `credentials` or `headers`\n\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n      typePolicies: {\n        Query: {\n          fields: {\n            allPosts: (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__.concatPagination)()\n          }\n        }\n      }\n    })\n  });\n}\n\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    // Get existing cache, loaded during client side data fetching\n    const existingCache = _apolloClient.extract(); // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n\n\n    const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {\n      // combine arrays using object equality (like in sets)\n      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter(d => sourceArray.every(s => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d, s)))]\n    }); // Restore the cache with the merged data\n\n    _apolloClient.cache.restore(data);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {\n    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n  }\n\n  return pageProps;\n}\nfunction useApollo(pageProps) {\n  const state = pageProps[APOLLO_STATE_PROP_NAME];\n  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => initializeApollo(state), [state]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Fwb2xsb0NsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNTyxzQkFBc0IsR0FBRyxrQkFBL0I7QUFFUCxJQUFJQyxZQUFKOztBQUVBLFNBQVNDLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSVIsd0RBQUosQ0FBaUI7QUFDdEJTLElBQUFBLE9BQU8sTUFEZTtBQUV0QkMsSUFBQUEsSUFBSSxFQUFFLElBQUlULG9EQUFKLENBQWE7QUFDakJVLE1BQUFBLEdBQUcsRUFBRSx1QkFEWTtBQUNhO0FBQzlCQyxNQUFBQSxXQUFXLEVBQUUsYUFGSSxDQUVXOztBQUZYLEtBQWIsQ0FGZ0I7QUFNdEJDLElBQUFBLEtBQUssRUFBRSxJQUFJWCx5REFBSixDQUFrQjtBQUN2QlksTUFBQUEsWUFBWSxFQUFFO0FBQ1pDLFFBQUFBLEtBQUssRUFBRTtBQUNMQyxVQUFBQSxNQUFNLEVBQUU7QUFDTkMsWUFBQUEsUUFBUSxFQUFFZCwwRUFBZ0I7QUFEcEI7QUFESDtBQURLO0FBRFMsS0FBbEI7QUFOZSxHQUFqQixDQUFQO0FBZ0JEOztBQUVNLFNBQVNlLGdCQUFULENBQTBCQyxZQUFZLEdBQUcsSUFBekMsRUFBK0M7QUFBQTs7QUFDcEQsUUFBTUMsYUFBYSxxQkFBR2IsWUFBSCwyREFBbUJDLGtCQUFrQixFQUF4RCxDQURvRCxDQUdwRDtBQUNBOzs7QUFDQSxNQUFJVyxZQUFKLEVBQWtCO0FBQ2hCO0FBQ0EsVUFBTUUsYUFBYSxHQUFHRCxhQUFhLENBQUNFLE9BQWQsRUFBdEIsQ0FGZ0IsQ0FJaEI7OztBQUNBLFVBQU1DLElBQUksR0FBR25CLGdEQUFLLENBQUNlLFlBQUQsRUFBZUUsYUFBZixFQUE4QjtBQUM5QztBQUNBRyxNQUFBQSxVQUFVLEVBQUUsQ0FBQ0MsZ0JBQUQsRUFBbUJDLFdBQW5CLEtBQW1DLENBQzdDLEdBQUdBLFdBRDBDLEVBRTdDLEdBQUdELGdCQUFnQixDQUFDRSxNQUFqQixDQUF5QkMsQ0FBRCxJQUN6QkYsV0FBVyxDQUFDRyxLQUFaLENBQW1CQyxDQUFELElBQU8sQ0FBQ3pCLHFEQUFPLENBQUN1QixDQUFELEVBQUlFLENBQUosQ0FBakMsQ0FEQyxDQUYwQztBQUZELEtBQTlCLENBQWxCLENBTGdCLENBZWhCOztBQUNBVixJQUFBQSxhQUFhLENBQUNQLEtBQWQsQ0FBb0JrQixPQUFwQixDQUE0QlIsSUFBNUI7QUFDRCxHQXRCbUQsQ0F1QnBEOzs7QUFDQSxZQUFtQyxPQUFPSCxhQUFQLENBeEJpQixDQXlCcEQ7O0FBQ0EsTUFBSSxDQUFDYixZQUFMLEVBQW1CQSxZQUFZLEdBQUdhLGFBQWY7QUFFbkIsU0FBT0EsYUFBUDtBQUNEO0FBRU0sU0FBU1ksY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0NDLFNBQWhDLEVBQTJDO0FBQ2hELE1BQUlBLFNBQUosYUFBSUEsU0FBSixlQUFJQSxTQUFTLENBQUVDLEtBQWYsRUFBc0I7QUFDcEJELElBQUFBLFNBQVMsQ0FBQ0MsS0FBVixDQUFnQjdCLHNCQUFoQixJQUEwQzJCLE1BQU0sQ0FBQ3BCLEtBQVAsQ0FBYVMsT0FBYixFQUExQztBQUNEOztBQUVELFNBQU9ZLFNBQVA7QUFDRDtBQUVNLFNBQVNFLFNBQVQsQ0FBbUJGLFNBQW5CLEVBQThCO0FBQ25DLFFBQU1HLEtBQUssR0FBR0gsU0FBUyxDQUFDNUIsc0JBQUQsQ0FBdkI7QUFDQSxRQUFNZ0MsS0FBSyxHQUFHdkMsOENBQU8sQ0FBQyxNQUFNbUIsZ0JBQWdCLENBQUNtQixLQUFELENBQXZCLEVBQWdDLENBQUNBLEtBQUQsQ0FBaEMsQ0FBckI7QUFDQSxTQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3NyYy9saWIvYXBvbGxvQ2xpZW50LmpzPzRhODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgY29uY2F0UGFnaW5hdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiZGVlcG1lcmdlXCI7XG5pbXBvcnQgaXNFcXVhbCBmcm9tIFwibG9kYXNoL2lzRXF1YWxcIjtcblxuZXhwb3J0IGNvbnN0IEFQT0xMT19TVEFURV9QUk9QX05BTUUgPSBcIl9fQVBPTExPX1NUQVRFX19cIjtcblxubGV0IGFwb2xsb0NsaWVudDtcblxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIixcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxuICAgIH0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIGFsbFBvc3RzOiBjb25jYXRQYWdpbmF0aW9uKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUgPSBudWxsKSB7XG4gIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KCk7XG5cbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xuXG4gICAgLy8gTWVyZ2UgdGhlIGV4aXN0aW5nIGNhY2hlIGludG8gZGF0YSBwYXNzZWQgZnJvbSBnZXRTdGF0aWNQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlLCB7XG4gICAgICAvLyBjb21iaW5lIGFycmF5cyB1c2luZyBvYmplY3QgZXF1YWxpdHkgKGxpa2UgaW4gc2V0cylcbiAgICAgIGFycmF5TWVyZ2U6IChkZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSkgPT4gW1xuICAgICAgICAuLi5zb3VyY2VBcnJheSxcbiAgICAgICAgLi4uZGVzdGluYXRpb25BcnJheS5maWx0ZXIoKGQpID0+XG4gICAgICAgICAgc291cmNlQXJyYXkuZXZlcnkoKHMpID0+ICFpc0VxdWFsKGQsIHMpKVxuICAgICAgICApLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHdpdGggdGhlIG1lcmdlZCBkYXRhXG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpO1xuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBvbGxvU3RhdGUoY2xpZW50LCBwYWdlUHJvcHMpIHtcbiAgaWYgKHBhZ2VQcm9wcz8ucHJvcHMpIHtcbiAgICBwYWdlUHJvcHMucHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV0gPSBjbGllbnQuY2FjaGUuZXh0cmFjdCgpO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2VQcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhwYWdlUHJvcHMpIHtcbiAgY29uc3Qgc3RhdGUgPSBwYWdlUHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV07XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKHN0YXRlKSwgW3N0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwiQXBvbGxvQ2xpZW50IiwiSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwiY29uY2F0UGFnaW5hdGlvbiIsIm1lcmdlIiwiaXNFcXVhbCIsIkFQT0xMT19TVEFURV9QUk9QX05BTUUiLCJhcG9sbG9DbGllbnQiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFBvc3RzIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsImRhdGEiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsInJlc3RvcmUiLCJhZGRBcG9sbG9TdGF0ZSIsImNsaWVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwidXNlQXBvbGxvIiwic3RhdGUiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/apolloClient.js\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/apolloClient */ \"./src/lib/apolloClient.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/fonshettema/Development/incentro/next-graphql-api/frontend/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_1__.useApollo)(pageProps);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloProvider, {\n      client: apolloClient,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7O0FBT0EsTUFBTUUsR0FBbUMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFELEtBQThCO0FBQ3hFLFFBQU1DLFlBQVksR0FBR0osNERBQVMsQ0FBQ0csU0FBRCxDQUE5QjtBQUVBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsWUFBTSxFQUFFQyxZQUF4QjtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQU9ELENBVkQ7O0FBWUEsaUVBQWVGLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLWFwb2xsby8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiLi4vbGliL2Fwb2xsb0NsaWVudFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBDb21wb25lbnQ6IGFueTtcbiAgcGFnZVByb3BzOiBhbnk7XG59O1xuXG5jb25zdCBBcHA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9Qcm92aWRlciIsInVzZUFwb2xsbyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsb0NsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEqual");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();