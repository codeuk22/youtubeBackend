"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const constants_1 = require("./constants");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: constants_1.limitToUpload }));
app.use(express_1.default.urlencoded({ extended: true, limit: constants_1.limitToUpload }));
app.use(express_1.default.static('public'));
app.use((0, cookie_parser_1.default)());
//import routes
const index_1 = __importDefault(require("./routes/user/index"));
//route declaration
app.use("/api/v1/users", index_1.default);
