import express, { json } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
//Route Params: Qual recurso atualizar/deletar - request.params
//Query Params: Paginação, Filtros, Ordenação, etc - request.query

/*app.get('/', (request, response) => {
  return response.json({message: "Server"});
});*/


app.listen(3333);