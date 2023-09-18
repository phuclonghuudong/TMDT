const connection = require("../config/configDB");

const getAllFloor = async () => {
     let [results, fields] = await connection.query(`SELECT * FROM Floor`);
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
     getAllFloor,
};
