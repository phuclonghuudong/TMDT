const apiServices = require("../services/apiFloorServices");

const getAllFloor = async (req, res) => {
     let data = await apiServices.getAllFloor();
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
     getAllFloor,
};
