import { Router } from "express";

import { AgencyController } from './Agency/AgencyController';

import { ClientController } from './Client/ClientController';

export class MasterRoutesDef {
    public router: Router = Router();
    constructor() {
        new AgencyController(this.router);
        new ClientController(this.router);
    }
}

export const MasterRoutes : Router = new MasterRoutesDef().router;
