"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserUpdate = exports.validateUserLogin = exports.validateUserRegister = void 0;
const joi_1 = __importDefault(require("joi"));
const userRegisterSchema = joi_1.default.object({
    username: joi_1.default.string().required().trim(),
    fullName: joi_1.default.string().required().trim(),
    email: joi_1.default.string().email().required().trim(),
    password: joi_1.default.string().required(),
    confirmPassword: joi_1.default.string().valid(joi_1.default.ref("password")).required(),
    avatar: joi_1.default.string(),
    coverImage: joi_1.default.string(),
});
const userLoginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().trim(),
    password: joi_1.default.string().required().trim(),
});
const userUpdateSchema = joi_1.default.object({
    fullName: joi_1.default.string().required().trim(),
    username: joi_1.default.string().required().trim(),
    email: joi_1.default.string().email().required().trim(),
    avatar: joi_1.default.string(),
    coverImage: joi_1.default.string(),
});
const validateUserRegister = (req, res, next) => {
    const { error } = userRegisterSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
};
exports.validateUserRegister = validateUserRegister;
const validateUserLogin = (req, res, next) => {
    const { error } = userLoginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
};
exports.validateUserLogin = validateUserLogin;
const validateUserUpdate = (req, res, next) => {
    const { error } = userUpdateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        });
    }
    next();
};
exports.validateUserUpdate = validateUserUpdate;
