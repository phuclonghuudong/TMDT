require("dotenv").config();

const configCords = (app) => {
     app.use(function (req, res, next) { 
          res.setHeader('Access-Control-Allow-Origin',process.env.REACT_URL);
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
          res.setHeader('Access-Control-Allow-Credentials', true);
          next();
     });
}
module.exports = configCords;