"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const app_1 = require("./app");
dotenv_1.default.config();
(0, db_1.connectDB)().then(() => {
    app_1.app.on("error", (error) => {
        console.log("error in listen", error);
        throw error;
    });
    app_1.app.listen(process.env.PORT, () => {
        console.log(`Server is live at ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log("DB Connection error", error);
});
