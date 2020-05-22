import {Router} from 'express'

const router = Router();

import { crearImagen,getPhotos, getPelicula, deletePelicula, updatePelicula } from '../controllers/imagen.controller';

import multer from '../libs/multer'

router.route('/photos')
      .get(getPhotos)
      .post(multer.single('image'),crearImagen)

router.route('/photos/:id')
    .get(getPelicula)
    .delete(deletePelicula)
    .put(updatePelicula);
      

export default router;