"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const index_1 = __importDefault(require("./routes/index"));
// settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.json());
//routes
app.use('/api', index_1.default);
//folder para almacenar archivos publicos
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
