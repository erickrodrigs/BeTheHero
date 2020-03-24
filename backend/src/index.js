const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recursos
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação np backend
 * POST: Criar uma informaçao no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o ? 
 * e que geralmente servem para filtros
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar
 * recursos
 */

app.listen(3333);