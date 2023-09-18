const connection = require("../config/configDB");

const getDeskById = async (id) => {
     let [results, fields] = await connection.query(
          `SELECT * FROM desk WHERE idFloor = ?`,
          id
     );
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
     getDeskById,
};
