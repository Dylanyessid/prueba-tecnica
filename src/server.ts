import express from 'express';
import "./config/envs";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan';
import { mainRouter } from './routes';

//Server configuration
const app = express();

const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Prueba Técnica',
        version: '1.0.0',
        description: '',
      },
      servers: [
        {
          url: 'http://localhost:3000', 
        },
      ],
    },
    apis: ['./src/routes/*.ts'],
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", mainRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
export default app
