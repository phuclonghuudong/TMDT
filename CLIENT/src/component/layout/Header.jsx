/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../assets/css/Header.css";

const Header = () => {
     return (
          <div className="container">
               <div
                    className="carousel slide carousel-fade d-none d-md-block"
                    id="carouselExampleControls"
                    data-bs-ride="carousel"
               >
                    <div class="carousel-inner">
                         <div className="carousel-item active">
                              <img
                                   class="mx-auto d-block"
                                   src={require("../../assets/image/header_panner.jpg")}
                                   alt=""
                              />
                         </div>
                         <div className="carousel-item">
                              <img
                                   class="mx-auto d-block"
                                   src={require("../../assets/image/header_panner_1.jpg")}
                                   alt=""
                              />
                         </div>
                         <div className="carousel-item">
                              <img
                                   class="mx-auto d-block"
                                   src={require("../../assets/image/header_panner_2.jpg")}
                                   alt=""
                              />
                         </div>
                    </div>

                    <button
                         class="carousel-control-prev"
                         type="button"
                         data-bs-target="#carouselExampleControls"
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
                         data-bs-target="#carouselExampleControls"
                         data-bs-slide="next"
                    >
                         <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                         ></span>
                         <span class="visually-hidden">Next</span>
                    </button>
               </div>
               <header className="row d-flex justify-content-between">
                    <div className="col-md-3 col-sm-6 col-6">
                         <img
                              src={require("../../assets/image/logo.jpg")}
                              alt=""
                         />
                    </div>
                    <div className="col-md-3 col-12 col-sm-6 d-none d-sm-block">
                         <div class="input-group mb-3 mt-3">
                              <input
                                   type="text"
                                   class="form-control "
                                   placeholder="Search...."
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2"
                              />
                              <button
                                   class="btn btn-outline-warning"
                                   type="button"
                                   id="button-addon2"
                              >
                                   <i
                                        class="fa fa-search"
                                        aria-hidden="true"
                                   ></i>
                              </button>
                         </div>
                    </div>
                    <div className="col-md-4 col-6 col-sm-6 mt-3 mb-3 d-flex justify-content-center">
                         <div class="btn-group me-3">
                              <button
                                   type="button"
                                   class="btn btn-outline-warning rounded"
                                   data-bs-toggle="dropdown"
                              >
                                   <span className="d-none d-sm-block">
                                        <i
                                             class="fa fa-user-o"
                                             aria-hidden="true"
                                        ></i>{" "}
                                        My Cart
                                   </span>
                                   <i class="fa fa-user-o d-block d-sm-none"></i>
                              </button>
                              <ul class="dropdown-menu">
                                   <li>
                                        <a class="dropdown-item" href="#">
                                             Action
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             class="dropdown-item active"
                                             href="#"
                                        >
                                             Another action
                                        </a>
                                   </li>
                                   <li>
                                        <a class="dropdown-item" href="#">
                                             Something else here
                                        </a>
                                   </li>
                                   <li>
                                        <hr class="dropdown-divider" />
                                   </li>
                                   <li>
                                        <a class="dropdown-item" href="#">
                                             Separated link
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         <div class="btn-group me-3">
                              <button
                                   type="button"
                                   class="btn btn-outline-warning position-relative rounded"
                              >
                                   <span className="d-none d-sm-block">
                                        <i
                                             class="fa fa-shopping-cart"
                                             aria-hidden="true"
                                        ></i>{" "}
                                        My Cart
                                   </span>
                                   <span>
                                        <i class="fa fa-shopping-cart d-block d-sm-none"></i>
                                   </span>

                                   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        999+
                                   </span>
                              </button>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header;
