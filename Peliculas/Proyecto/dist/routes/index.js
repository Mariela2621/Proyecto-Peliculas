"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const imagen_controller_1 = require("../controllers/imagen.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/photos')
    .get(imagen_controller_1.getPhotos)
    .post(multer_1.default.single('image'), imagen_controller_1.crearImagen);
router.route('/photos/:id')
    .get(imagen_controller_1.getPelicula)
    .delete(imagen_controller_1.deletePelicula)
    .put(imagen_controller_1.updatePelicula);
exports.default = router;
