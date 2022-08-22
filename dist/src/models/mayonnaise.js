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
exports.Mayonnaise = void 0;
const client_1 = __importDefault(require("@prisma/client"));
const dbClient = new client_1.default.PrismaClient();
class Mayonnaise {
    constructor(id, name, ingredient, portion, image, combination) {
        this.id = id;
        this.name = name;
        this.ingredient = ingredient;
        this.portion = portion;
        this.image = image;
        this.combination = combination;
    }
    static fromClient(json) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = json;
            return new Mayonnaise(+id, "", "", "", "", []);
        });
    }
    static fromDb(mayonnaise) {
        return new Mayonnaise(mayonnaise.id, mayonnaise.name, mayonnaise.ingredient, mayonnaise.portion, mayonnaise.image, mayonnaise.combination);
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundMayonnaise = yield dbClient.mayonnaise.findFirst({
                where: { id },
                include: {
                    combination: true,
                },
            });
            if (foundMayonnaise) {
                return Mayonnaise.fromDb(foundMayonnaise);
            }
            return null;
        });
    }
}
exports.Mayonnaise = Mayonnaise;
//# sourceMappingURL=mayonnaise.js.map