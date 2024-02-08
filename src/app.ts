import express from 'express';
import cors from 'cors';
import { limitToUpload } from './constants';

const app = express();

app.use(cors())
app.use(express.json({ limit: limitToUpload }));
app.use(express.urlencoded({ extended: true, limit: limitToUpload }));
app.use(express.static('public'));
app.use(cookieParser())


//import routes

import router from './routes/user/index';




//route declaration

app.use("/api/v1/users",router)


export { app }

function cookieParser(): any {
    throw new Error('Function not implemented.');
}

