import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// localhost:3333
app.listen(3333); 

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscando uma informação
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// app.get('/users', (request, response) => {
//     // Query params: http://localhost:3333/users?search=raphael
//     // console.log(request.query);

//     // Route params (DELETE): http://localhost:3333/users/1 (identificar um recurso)
//     // console.log(request.params);

//     // Body: http://localhost:3333/users/1 (criar um recurso)
//     //console.log(request.body);

//     return response.json({
//         message: 'Hello World'
//     })
// });

