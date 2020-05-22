import multer from 'multer';
import {v4 as uuidv4} from 'uuid';
import path from 'path'

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req , File, cb) => {
        cb(null,uuidv4() + path.extname(File.originalname));
    }
});

export default multer({storage});