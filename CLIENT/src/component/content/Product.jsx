import React from "react";

const Product = () => {
     const number = 10;

     return (
          <div className="col">
               <div className="card pt-2">
                    <img
                         src={require("../../assets/image/ip14pro256.jpg")}
                         className="card-img-top w-75 mx-auto"
                         alt="..."
                    />
                    <div className="card-body">
                         <h5 className="card-title text-center fs-6 col-12 text-truncate">
                              Iphone 14 Pro 256GB
                         </h5>
                         <div className="">
                              <span className="me-1 ps-1 pe-1 bg-secondary bg-opacity-25">
                                   6.7"
                              </span>
                              <span className="ps-1 pe-1 bg-secondary bg-opacity-25">
                                   Full HD
                              </span>
                         </div>
                         <h5 className="pt-1 card-text fw-bold text-danger text-center fs-5 mb-0">
                              8.999.000<sup>đ</sup>
                         </h5>
                         <div className="text-center">
                              <span className="card-text text-secondary text-opacity-75 text-center text-sale me-2">
                                   7.574.000<sup>đ</sup>
                              </span>
                              <span className="fs-6 pe-1">-10%</span>
                         </div>
                         <div className="text-center">
                              <i
                                   class="fa fa-star pe-1 text-warning"
                                   aria-hidden="true"
                              ></i>
                              <i
                                   class="fa fa-star pe-1 text-warning"
                                   aria-hidden="true"
                              ></i>
                              <i
                                   class="fa fa-star-half-o pe-1 text-warning"
                                   aria-hidden="true"
                              ></i>
                              <i
                                   class="fa fa-star-o pe-1 text-warning"
                                   aria-hidden="true"
                              ></i>
                              <i
                                   class="fa fa-star-o pe-1 text-secondary"
                                   aria-hidden="true"
                              ></i>
                         </div>
                         <div className="progress1">
                              <div
                                   className="progress1-bar"
                                   style={{
                                        width: `${+number}%`,
                                        height: "20px",
                                        borderRadius: `${
                                             +number === 100
                                                  ? "20px"
                                                  : "20px 0 0 20px"
                                        }`,
                                   }}
                              ></div>
                              <span
                                   className="progress1-text"
                                   style={{
                                        marginLeft: `${-number + 20}%`,
                                        lineHeight: "18px",
                                   }}
                              >
                                   Còn 4/10 xuất
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Product;
