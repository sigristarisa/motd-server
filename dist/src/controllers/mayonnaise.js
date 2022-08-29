"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMayonnaiseById = void 0;
const mayonnaise_1 = require("../models/mayonnaise");
const responses_1 = require("../helpers/responses");
const findMayonnaiseById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mayoId = +req.params.mayoId;
    try {
        const foundMayonnaise = yield mayonnaise_1.Mayonnaise.findById(mayoId);
        if (!foundMayonnaise) {
            return (0, responses_1.sendDataResponse)(res, 404, { id: "mayonnaise not found" });
        }
        return (0, responses_1.sendDataResponse)(res, 200, foundMayonnaise);
    }
    catch (error) {
        console.error("What happened?: ", error.message);
        return (0, responses_1.sendMessageResponse)(res, 500, "Unable to send mayonnaise");
    }
});
exports.findMayonnaiseById = findMayonnaiseById;
//# sourceMappingURL=mayonnaise.js.map