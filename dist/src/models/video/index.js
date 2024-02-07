"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.video = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_aggregate_paginate_v2_1 = __importDefault(require("mongoose-aggregate-paginate-v2"));
const videoSchema = new mongoose_1.default.Schema({
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user'
    },
    videoFile: String,
    thumbNail: String,
    title: String,
    description: String,
    duration: Number,
}, { timestamps: true });
videoSchema.plugin(mongoose_aggregate_paginate_v2_1.default);
exports.video = mongoose_1.default.model("video", videoSchema);
