"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mayonnaise_1 = require("../controllers/mayonnaise");
const router = (0, express_1.Router)();
router.get("/:mayoId", mayonnaise_1.findMayonnaiseById);
exports.default = router;
//# sourceMappingURL=mayonnaise.js.map