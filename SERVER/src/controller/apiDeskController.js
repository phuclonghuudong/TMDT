const apiServices = require("../services/apiDeskServices");

const getAllDesk = async (req, res) => {
     let data = await apiServices.getAllDesk();
     return res.send({ data: data });
};
const getDeskById = async (req, res) => {
     let data = await apiServices.getDeskById(req.query.id);
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
     getAllDesk,
     getDeskById,
};
