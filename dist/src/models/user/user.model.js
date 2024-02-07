"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        index: true
    },
    email: String,
    fullname: {
        type: String,
        index: true
    },
    avatar: String,
    coverImage: String,
    watchHistory: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'video'
        }
    ],
    password: String,
    refreshToken: String
}, { timestamps: true });
exports.user = mongoose_1.default.model('user', userSchema);
