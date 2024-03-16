"use strict";
var _a;
module.exports = (_a = class ApiResponse {
    },
    _a.result = (status, res, result) => {
        res.json({ status, message: "success", result });
    },
    _a.error = (status, res, result) => {
        res.json({ status, message: "Error", result });
    },
    _a);
