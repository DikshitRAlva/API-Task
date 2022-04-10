import { query, response, Router } from "express";
import { Agency } from './Agency';
import { Authentication } from '../../../middleware/authentication'

export class AgencyController {
    authCheck = new Authentication().verifyAuth;

    constructor(private router: Router) {
        this.intializeRoutes(this.router);
    }

    
    public intializeRoutes(router) {
        router.post('/agency', this.authCheck, this.createAgency);
    }
    

    createAgency(req, res) {
        const agency = new Agency();
        agency.createAgency(req.body).then(
            (response) => res.status(200).json(response),
            (error) => res.status(401).json(error)
        );
    }

}
