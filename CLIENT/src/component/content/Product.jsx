import React from "react";
import store from "../../redux/store";
import { ADD_PRODUCT } from "../../redux/actions";

const Product = (props) => {
     const item = props.data;
     const handleClick = () => {
          store.dispatch(ADD_PRODUCT(item));
     };

     return (
          <div className="p-2" key={item}>
               <div className="card pt-3">
                    <div className="card-img">
                         <img
                              src={item.image}
                              className="card-img-top w-75 mx-auto"
                              alt="..."
                         />
                    </div>
                    <div className="card-body">
                         <h5 className="card-title text-center fs-6 col-12 text-truncate">
                              {item.title}
                         </h5>

                         <h5 className="pt-1 card-text fw-bold text-danger text-center fs-5 mb-0">
                              {item.price}
                              <sup>$</sup>
                         </h5>
                    </div>
               </div>
               <button
                    className="btn btn-add-to-card btn-warning"
                    onClick={() => handleClick(item)}
               >
                    <p>ADD TO CARD</p>
               </button>
          </div>
     );
};

export default Product;
