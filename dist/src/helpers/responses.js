"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageResponse = exports.sendDataResponse = void 0;
const STATUS_MESSAGES = {
    200: "success - OK",
    201: "success - created",
    400: "client error – bad request",
    401: "client error – unauthorized",
    403: "client error - forbidden",
    404: "client error – not found",
    500: "server error – internal server error",
};
const sendDataResponse = (res, statusCode, payload) => {
    return res.status(statusCode).json({
        status: STATUS_MESSAGES[statusCode],
        data: payload,
    });
};
exports.sendDataResponse = sendDataResponse;
const sendMessageResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({
        status: STATUS_MESSAGES[statusCode],
        message,
    });
};
exports.sendMessageResponse = sendMessageResponse;
//# sourceMappingURL=responses.js.map