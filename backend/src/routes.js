const {Router} = require("express");
const routes = Router();
const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

//HTTP methods: GET, POST, PUT, DELETE

// Query params: request.query (Filters, sort, pagination, ...)
// Route params: request.params (Identify an resource on delete or update)
// Body: request.body (Change or create data)

routes.get("/search",SearchController.index);

routes.get("/devs",DevController.index);
routes.post("/devs",DevController.store);


module.exports = routes;