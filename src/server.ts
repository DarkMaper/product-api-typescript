import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import './database';

import { ProductRoute } from './routes';

/**
 * Server class
 * *App class server. All configs go here
 */

export default class App {

    private app: Application;
    private productRoute: ProductRoute;
    private port: number;

    /**
     * App Constructor
     * @param port number Port of the API server
     */

    constructor(port: number = 5000) {
        this.app = express();
        this.port = parseInt(process.env.PORT || port.toString());
        this.productRoute = new ProductRoute();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }

    private routes() {
        this.app.use('/api/products', this.productRoute.router);
    }

    listen() {
        this.app.listen(this.port);
        console.log('Server listening in port', this.port);
    }
}