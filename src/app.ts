import express from 'express';
import errorHandler from './middleware/errorHandle';

require('express-async-errors');

const app = express();
app.use(express.json());

app.use(errorHandler);

export default app;
