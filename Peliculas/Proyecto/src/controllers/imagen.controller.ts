import {Request, Response} from 'express'
import path from 'path'
import fs from 'fs-extra'

import imagenes, { Imagen } from '../models/imagenes'


export async function getPhotos(req: Request, res: Response): Promise<Response>{
   const Imagenes = await imagenes.find();
   return  res.json(Imagenes);
}

export async function getPelicula(req:Request, res: Response):Promise<Response>{
    const {id} = req.params;
    const Imagenes = await imagenes.findById(id);
    return res.json(Imagenes);
}

export async function crearImagen(req:Request, res: Response):Promise<Response>{
    
    const {titulo , descripcion } = req.body;
    const newPelicula={
        titulo,
        descripcion,
        imagePath: req.file.path
    };
    const Imagenes = new imagenes(newPelicula); 
    await Imagenes.save();
    return res.json({
        message: 'Se guardo la pelicula de manera exitosa',
        Imagenes
    })
}

export async function deletePelicula(req:Request, res: Response):Promise<Response>{
    const {id} = req.params;
    const Imagenes = await imagenes.findByIdAndRemove(id) as Imagen;
    if(Imagenes){
      await fs.unlink(path.resolve(Imagenes.imagePath))
    }
    return res.json({
        message: 'Pelicula eliminada :C',
     
    })
}


export async function updatePelicula(req: Request, res: Response): Promise<Response>{
    const {id} = req.params;
    const{titulo, descripcion} = req.body;
    const updatedPelicula = await imagenes.findByIdAndUpdate(id,{
        titulo,
        descripcion
    }, );
    return res.json({
        message: 'Se actualizo correctamente',
        updatedPelicula
    })

}