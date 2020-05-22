import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
    titulo: String,
    descripcion: String,
    imagePath: String
});

export interface Imagen extends Document{
    titulo:string,
    descripcion: string,
    imagePath: string
}

export default model<Imagen>('imagenes', schema);