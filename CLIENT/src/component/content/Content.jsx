/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Product from "./Product";
import Carousel from "react-multi-carousel";

const Content = () => {
     const number = 10;
     const contentSale = () => {
          return (
               <>
                    <div
                         className="carousel slide carousel-fade d-none d-md-block"
                         id="carouselExampleControlsSale"
                         data-bs-ride="carousel"
                    >
                         <div className="carousel-inner">
                              <div className="carousel-item active ">
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
                              className="carousel-control-prev carousel-control-prev-sale"
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
                              className="carousel-control-next carousel-control-next-sale"
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

     const responsive = {
          superLargeDesktop: {
               // the naming can be any, depends on you.
               breakpoint: { max: 3000, min: 1024 },
               items: 6,
          },
          desktop: {
               breakpoint: { max: 1024, min: 856 },
               items: 4,
          },
          tablet: {
               breakpoint: { max: 856, min: 464 },
               items: 2,
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1,
          },
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
                              Đang diễn ra {"   "}
                              <br className="d-block d-lg-none" />
                              <span className="text-danger">10/9 - 15/9</span>
                         </span>
                    </div>
                    {/* <div className="card-body row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-2 bg-warning-subtle rounded"> */}
                    <Carousel responsive={responsive}>
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                         <Product />
                    </Carousel>

                    {/* </div> */}
               </div>
          </div>
     );
};

export default Content;
