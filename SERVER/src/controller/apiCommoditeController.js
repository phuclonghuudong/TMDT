const apiServices = require("../services/apiCommoditeServices");

const getAllCommodite = async (req, res) => {
     let data = await apiServices.getAllCommodite();
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
     getAllCommodite,
};
