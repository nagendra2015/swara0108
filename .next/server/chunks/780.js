"use strict";
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 5780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    // Set the base URL for your API
    baseURL: "http://localhost:3001/api/v1"
});
// Attach the authorization header to every request
axiosInstance.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    console.log("token " + token);
    const authToken = token; // Replace with your actual authorization token
    // config.headers.Authorization = 'Bearer ${authToken}';
    config.headers.Authorization = "Bearer " + authToken;
    console.log("config file is " + config);
    return config;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;