import express from 'express';
import cors from 'cors';
import { limitToUpload } from './constants';

const app = express();

app.use(cors())
app.use(express.json({ limit: limitToUpload }));
app.use(express.urlencoded({ extended: true, limit: limitToUpload }));
app.use(express.static('public'));


export { app }

