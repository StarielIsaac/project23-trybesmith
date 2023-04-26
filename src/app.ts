import express from 'express';
import 'express-async-errors';
import errorHandler from './middleware/errorHandle';
import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';
import ordersRouter from './routers/ordersRouter';
import loginRouter from './routers/loginRouter';

// é usada para lidar com erros assíncronos no Express.js 

// inicia o Express 
const app = express();
// converte a response no formato .json
app.use(express.json());

// rota para o endpoint "/products"
app.use('/products', productsRouter);

// rota para o endpoint "/users"
app.use('/users', usersRouter);

// rota para o endpoint "/orders"
app.use('/orders', ordersRouter); 

// rota para o endpoint "/login"
app.use('/login', loginRouter);

// middleware que trata erros
app.use(errorHandler);

export default app;
