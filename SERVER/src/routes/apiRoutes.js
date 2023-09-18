const express = require("express");
const apiDeskController = require("../controller/apiDeskController");
const apiFloorController = require("../controller/apiFloorController");
const apiCommoditeController = require("../controller/apiCommoditeController");
const apiProductController = require("../controller/apiProductController");

const router = express.Router();

const initApiRoutes = (app) => {
     router.get("/floor", apiDeskController.getDeskById); //List DESK by id FLOOR

     router.get("/floor/read", apiFloorController.getAllFloor); // All List FLOOR

     router.get("/commodite/read", apiCommoditeController.getAllCommodite); //All List

     router.get("/product/read", apiProductController.getAllProduct); //All List PRODUCT
     router.get("/commodite", apiProductController.getProductByIdCommodite); //List PRODUCT by id COMMODITECOMMODITE

     return app.use("/api/v1/", router);
};

module.exports = initApiRoutes; //export default
