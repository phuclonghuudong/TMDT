import axios from "axios";

const getAllDesk = () => {
     return axios.get("http://localhost:1999/api/v1/desk/read");
};
const getDeskByIdFloor = (id) => {
     return axios.get(`http://localhost:1999/api/v1/floor?id=${id}`);
};
const getAllFloor = () => {
     return axios.get("http://localhost:1999/api/v1/floor/read");
};
const getAllCommodite = () => {
     return axios.get("http://localhost:1999/api/v1/commodite/read");
};
const getAllProduct = () => {
     return axios.get("http://localhost:1999/api/v1/product/read");
};
const getProductByIdCommodite = (id) => {
     return axios.get(`http://localhost:1999/api/v1/commodite?id=${id}`);
};
export {
     getAllDesk,
     getAllFloor,
     getDeskByIdFloor,
     getAllCommodite,
     getAllProduct,
     getProductByIdCommodite,
};
