/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEL_PRODUCT } from "../../redux/actions";
import store from "../../redux/store";

const Header = () => {
     const [number, setNumber] = useState(0);
     const product = useSelector((state) => state.addProduct);

     useEffect(() => {
          if (product && product.item.length > 0) {
               setNumber(product.item.length);
          } else {
               setNumber(0);
          }
     }, [product]);

     const handleDeleteCard = (item) => {
          store.dispatch(DEL_PRODUCT(item));
     };

     const topHeader = () => {
          return (
               <div
                    className="carousel slide carousel-fade d-none d-md-block "
                    id="carouselExampleControls"
                    data-bs-ride="carousel"
               >
                    <div class="carousel-inner">
                         <div className="carousel-item active ">
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
          );
     };
     return (
          <div className="container">
               {/* {topHeader()} */}
               <header className="row d-flex justify-content-between sticky-top">
                    <div className="col-md-3 col-sm-4 col-6">
                         <img
                              src={require("../../assets/image/logo.jpg")}
                              alt=""
                         />
                    </div>

                    <div className="col-md-4 col-6 col-sm-3 mt-3 mb-3 d-flex justify-content-center">
                         <div class="btn-group me-3">
                              <button
                                   type="button"
                                   class="btn btn-outline-secondary rounded text-dark"
                                   data-bs-toggle="dropdown"
                              >
                                   <span className="d-none d-lg-block">
                                        <i
                                             class="fa fa-user-o"
                                             aria-hidden="true"
                                        ></i>{" "}
                                        My Acount
                                   </span>
                                   <i class="fa fa-user-o d-block d-lg-none"></i>
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
                         <div className="vr"></div>

                         <div class="btn-group me-3 ms-3 dropdown">
                              <button
                                   type="button"
                                   class="btn btn-outline-secondary position-relative rounded text-dark "
                                   id="dropdownMenuButton1"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                              >
                                   <span className="d-none d-lg-block">
                                        <i
                                             class="fa fa-shopping-cart"
                                             aria-hidden="true"
                                        ></i>{" "}
                                        My Cart
                                   </span>
                                   <span>
                                        <i class="fa fa-shopping-cart d-block d-lg-none"></i>
                                   </span>

                                   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {number && +number > 0 ? number : 0}
                                   </span>
                              </button>
                              <ul
                                   class="dropdown-menu"
                                   aria-labelledby="dropdownMenuLink"
                              >
                                   {product && product.item.length > 0
                                        ? product.item.map((item) => {
                                               return (
                                                    <div className="content-card row">
                                                         <div className="col-2">
                                                              <img
                                                                   className="image-card"
                                                                   src={
                                                                        item.image
                                                                   }
                                                              />
                                                         </div>
                                                         <div className="col-6">
                                                              <p className="text-truncate">
                                                                   {item.title}
                                                              </p>
                                                         </div>
                                                         <div className="col-2">
                                                              <p className="text-truncate">
                                                                   x
                                                                   {!item.quantity
                                                                        ? 1
                                                                        : item.quantity}
                                                              </p>
                                                         </div>
                                                         <div className="col-2 ">
                                                              <span
                                                                   onClick={() =>
                                                                        handleDeleteCard(
                                                                             item
                                                                        )
                                                                   }
                                                              >
                                                                   <i
                                                                        class="fa fa-trash text-danger"
                                                                        aria-hidden="true"
                                                                   ></i>
                                                              </span>
                                                         </div>
                                                    </div>
                                               );
                                          })
                                        : ""}
                              </ul>
                         </div>
                    </div>
               </header>
          </div>
     );
};

export default Header;
