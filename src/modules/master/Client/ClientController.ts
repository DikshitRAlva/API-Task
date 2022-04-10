import { query, response, Router } from "express";
import { Client } from './Client';
import { Authentication } from '../../../middleware/authentication'

export class ClientController {
    authCheck = new Authentication().verifyAuth;

    constructor(private router: Router) {
        this.intializeRoutes(this.router);
    }

    
    public intializeRoutes(router) {
        router.get('/client', this.authCheck, this.getClient);
        router.put('/client', this.authCheck, this.updateClient);
    }
    

  
    getClient(req, res) {
        const client = new Client();
        client.getClient(req.query).then(
            (response) => res.status(200).json(response),
            (error) => res.status(401).json(error)
        );
    }

    updateClient(req, res) {
        const client = new Client();
        client.updateClient(req.body).then(
            (response) => res.status(200).json(response),
            (error) => res.status(401).json(error)
        )
    }

}
