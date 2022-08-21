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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rawMayonnaise_1 = require("./rawMayonnaise");
const rawDishes_1 = require("./rawDishes");
const client_1 = __importDefault(require("@prisma/client"));
const dbClient = new client_1.default.PrismaClient();
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield createMayonaisseData();
    yield createDishData();
    process.exit(0);
});
const createMayonaisseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const mayonnaiseArr = [];
    for (const mayonnaise of rawMayonnaise_1.rawMayonnaise) {
        const createdMayonnaise = yield dbClient.mayonnaise.create({
            data: mayonnaise,
        });
        mayonnaiseArr.push(createdMayonnaise);
    }
    return mayonnaiseArr;
});
const createDishData = () => __awaiter(void 0, void 0, void 0, function* () {
    const dishArr = [];
    for (const dish of rawDishes_1.rawDishes) {
        const createdDish = yield dbClient.dish.create({
            data: dish,
        });
        dishArr.push(dish);
    }
    return dishArr;
});
seed()
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
}))
    .then(() => process.exit(1));
//# sourceMappingURL=seed.js.map