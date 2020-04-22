const { Router } = require("express");
const ZoweController = require('./controllers/ZoweController');


const routes = Router();

routes.post("/users",ZoweController.list );
routes.post("/resume",ZoweController.resume );
routes.post("/revoke",ZoweController.revoke );


module.exports = routes;
