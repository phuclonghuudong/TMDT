/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Content = () => {
     const contentSale = () => {
          return (
               <>
                    <div
                         className="carousel slide carousel-fade d-none d-md-block"
                         id="carouselExampleControlsSale"
                         data-bs-ride="carousel"
                    >
                         <div className="carousel-inner">
                              <div className="carousel-item active">
                                   <img
                                        className="image_sale w-100"
                                        src={require("../../assets/image/sale_2.jpg")}
                                   />
                              </div>
                              <div className="carousel-item ">
                                   <img
                                        className="image_sale"
                                        src={require("../../assets/image/sale_1.jpg")}
                                   />
                              </div>
                         </div>

                         <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleControlsSale"
                              data-bs-slide="prev"
                         >
                              <span
                                   className="carousel-control-prev-icon"
                                   aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                         </button>
                         <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleControlsSale"
                              data-bs-slide="next"
                         >
                              <span
                                   className="carousel-control-next-icon"
                                   aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                         </button>
                    </div>
               </>
          );
     };
     const contentProductSale = () => {
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
                              <div className="my-1">
                                   <button className="btn button-custom btn-sm">
                                        64GB Xanh
                                   </button>
                                   <button className="btn button-custom btn-sm">
                                        128GB
                                   </button>
                                   <button className="btn button-custom btn-sm">
                                        1T Trắng
                                   </button>
                              </div>
                              <h5 className="card-text fw-bold text-danger text-center fs-5 mb-0">
                                   8.999.000 đ
                              </h5>
                              <div className="text-center mb-2 ">
                                   <span className="card-text text-secondary text-opacity-50 text-center text-sale me-2">
                                        8.000.000 đ
                                   </span>
                                   <span className="bg-danger text-sale1 bg-opacity-25 ms-2 rounded ps-1 pe-1 fw-bold">
                                        -10%
                                   </span>
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
                              <div
                                   className="progress"
                                   role="progressbar"
                                   aria-label="Info example"
                                   aria-valuenow="50"
                                   aria-valuemin="0"
                                   aria-valuemax="100"
                              >
                                   <div
                                        className="progress-bar progress-bar-striped bg-warning overflow-visible text-dark fw-bold progress-bar-animated"
                                        style={{ width: "70%" }}
                                   >
                                        <span className=" ">Còn 4/10 xuất</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          );
     };
     return (
          <div className="container">
               {contentSale()}
               <div className=" card mt-1">
                    <div className="card-header bg-warning d-flex justify-content-between ">
                         <span className="text-dark fw-bold fs-3 d-none d-md-block align-middle mt-lg-0 mt-md-3 ">
                              <i className="fa fa-pied-piper-alt fs-1 text-secondary"></i>{" "}
                              GIỜ VÀNG DEAL SỐC
                         </span>
                         <span className="ms-4 fs-5 fw-bold mt-2">
                              Kết thúc trong{" "}
                              <br className="d-block d-lg-none" />
                              <span className="badge bg-dark">00</span> :{" "}
                              <span className="badge bg-dark">00</span> :{" "}
                              <span className="badge bg-dark">00</span>{" "}
                         </span>
                         <span className="ms-4 fs-5 fw-bold mt-2">
                              Đang diễn ra
                              <br className="d-block d-lg-none" />
                              <span className="text-danger">10/9 - 15/9</span>
                         </span>
                    </div>
                    <div className="card-body row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-2 ">
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                         {contentProductSale()}
                    </div>
               </div>
          </div>
     );
};

export default Content;
