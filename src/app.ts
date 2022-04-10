import { default as express } from "express";
import * as bodyParser from "body-parser";

import { MasterRoutes } from './modules/master/MasterRoutes';
import { Agency } from "./modules/master/Agency/Agency";

export class App {
    public app: express.Application;
    public port: number;

    constructor(port) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.accessControl();
        this.initializeControllers();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private accessControl() {
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, PATCH, DELETE, OPTIONS"
            );
            next();
        });
    }

    private initializeControllers() {
        this.app.use("/api/master", MasterRoutes);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
