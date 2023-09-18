const apiServices = require("../services/apiProductServices");

const getAllProduct = async (req, res) => {
     let data = await apiServices.getAllProduct();
     if (data && +data.EC === 0) {
          return res.send({
               DT: data.DT,
               EC: data.EC,
               EM: data.EM,
          });
     } else {
          return res.send({
               DT: data.DT,
               EC: data.EC,
               EM: data.EM,
          });
     }
};
const getProductByIdCommodite = async (req, res) => {
     let data = await apiServices.getProductByIdCommodite(req.query.id);
     console.log("id", data);
     if (data && +data.EC === 0) {
          return res.send({
               DT: data.DT,
               EC: data.EC,
               EM: data.EM,
          });
     } else {
          return res.send({
               DT: data.DT,
               EC: data.EC,
               EM: data.EM,
          });
     }
};
module.exports = {
     getAllProduct,
     getProductByIdCommodite,
};
