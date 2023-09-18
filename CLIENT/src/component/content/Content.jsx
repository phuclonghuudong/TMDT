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
                         <div class="carousel-inner">
                              <div className="carousel-item active">
                                   <img
                                        className="image_sale"
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
                              class="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleControlsSale"
                              data-bs-slide="prev"
                         >
                              <span
                                   class="carousel-control-prev-icon"
                                   aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Previous</span>
                         </button>
                         <button
                              class="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleControlsSale"
                              data-bs-slide="next"
                         >
                              <span
                                   class="carousel-control-next-icon"
                                   aria-hidden="true"
                              ></span>
                              <span class="visually-hidden">Next</span>
                         </button>
                    </div>
               </>
          );
     };
     return (
          <div className="container">
               {contentSale()}
               <div class=" card mt-1">
                    <div className="card-header bg-warning d-flex justify-content-between">
                         <span className="text-dark fw-bold fs-4 d-none d-md-block">
                              GIỜ VÀNG DEAL SỐC
                         </span>
                         <span className="ms-4 fs-5">
                              Kết thúc trong:{" "}
                              <span className="badge bg-dark">00</span> :{" "}
                              <span className="badge bg-dark">00</span> :{" "}
                              <span className="badge bg-dark">00</span>{" "}
                         </span>
                         <span className="ms-4 fs-5 fw-bold d-none d-md-block">
                              Đang diễn ra:{" "}
                              <span className="text-danger">10/9 - 15/9</span>
                         </span>
                    </div>
                    <div className="card-body row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                         <div class="col">
                              <div class="card">
                                   <img
                                        src="..."
                                        class="card-img-top"
                                        alt="..."
                                   />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                             This is a longer card with
                                             supporting text below as a natural
                                             lead-in to additional content. This
                                             content is a little bit longer.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div class="col">
                              <div class="card">
                                   <img
                                        src="..."
                                        class="card-img-top"
                                        alt="..."
                                   />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                             This is a longer card with
                                             supporting text below as a natural
                                             lead-in to additional content. This
                                             content is a little bit longer.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div class="col">
                              <div class="card">
                                   <img
                                        src="..."
                                        class="card-img-top"
                                        alt="..."
                                   />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                             This is a longer card with
                                             supporting text below as a natural
                                             lead-in to additional content.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div class="col">
                              <div class="card">
                                   <img
                                        src="..."
                                        class="card-img-top"
                                        alt="..."
                                   />
                                   <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                             This is a longer card with
                                             supporting text below as a natural
                                             lead-in to additional content. This
                                             content is a little bit longer.
                                        </p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Content;
