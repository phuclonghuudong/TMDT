const connection = require("../config/configDB");

const getAllCommodite = async () => {
     let [results, fields] = await connection.query(`SELECT * FROM commodite`);
     if (results && results.length > 0) {
          return {
               DT: results,
               EC: 0,
               EM: "SUCCESS",
          };
     } else {
          return {
               DT: "",
               EC: 1,
               EM: "ERROR",
          };
     }
};

module.exports = {
     getAllCommodite,
};
