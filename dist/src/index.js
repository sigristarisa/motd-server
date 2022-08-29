"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mayonnaise_1 = __importDefault(require("./routes/mayonnaise"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("assets"));
app.use(express_1.default.static("mayo-image"));
app.use(express_1.default.static("dish-image"));
app.use("/assets", express_1.default.static("assets"));
app.use("/mayonnaise", mayonnaise_1.default);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`\n Server is running on http://localhost:${port}\n`);
});
//# sourceMappingURL=index.js.map