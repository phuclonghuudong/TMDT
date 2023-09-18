const connection = require("../config/configDB");

const getAllProduct = async (id) => {
     let [results, fields] = await connection.query(
          `SELECT * FROM products ORDER BY idCommodite`
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
const getProductByIdCommodite = async (id) => {
     let [results, fields] = await connection.query(
          `SELECT * FROM products WHERE idCommodite = ?`,
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
     getProductByIdCommodite,
     getAllProduct,
};
