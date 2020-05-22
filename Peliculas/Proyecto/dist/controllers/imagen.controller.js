"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePelicula = exports.deletePelicula = exports.crearImagen = exports.getPelicula = exports.getPhotos = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const imagenes_1 = __importDefault(require("../models/imagenes"));
async function getPhotos(req, res) {
    const Imagenes = await imagenes_1.default.find();
    return res.json(Imagenes);
}
exports.getPhotos = getPhotos;
async function getPelicula(req, res) {
    const { id } = req.params;
    const Imagenes = await imagenes_1.default.findById(id);
    return res.json(Imagenes);
}
exports.getPelicula = getPelicula;
async function crearImagen(req, res) {
    const { titulo, descripcion } = req.body;
    const newPelicula = {
        titulo,
        descripcion,
        imagePath: req.file.path
    };
    const Imagenes = new imagenes_1.default(newPelicula);
    await Imagenes.save();
    return res.json({
        message: 'Se guardo la pelicula de manera exitosa',
        Imagenes
    });
}
exports.crearImagen = crearImagen;
async function deletePelicula(req, res) {
    const { id } = req.params;
    const Imagenes = await imagenes_1.default.findByIdAndRemove(id);
    if (Imagenes) {
        await fs_extra_1.default.unlink(path_1.default.resolve(Imagenes.imagePath));
    }
    return res.json({
        message: 'Pelicula eliminada :C',
    });
}
exports.deletePelicula = deletePelicula;
async function updatePelicula(req, res) {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const updatedPelicula = await imagenes_1.default.findByIdAndUpdate(id, {
        titulo,
        descripcion
    });
    return res.json({
        message: 'Se actualizo correctamente',
        updatedPelicula
    });
}
exports.updatePelicula = updatePelicula;
