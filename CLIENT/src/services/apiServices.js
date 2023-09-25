import axios from "axios";

const getAllFakeApi = () => {
     return axios.get("https://fakestoreapi.com/products");
};
export { getAllFakeApi };
