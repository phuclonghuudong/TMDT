import React from "react";

const Navbar = () => {
     const navbarMenu = () => {
          return (
               <>
                    <li class="nav-item" role="presentation">
                         <a
                              class="btn btn-outline-secondary nav-link text-dark "
                              id="ex2-tab-1"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-1"
                              role="tab"
                              aria-controls="ex2-pills-1"
                              aria-selected="true"
                         >
                              {/* <i class="fa fa-mobile" aria-hidden="true"></i>{" "} */}
                              Trang chủ
                         </a>
                    </li>
                    <li class="nav-item ms-3" role="presentation">
                         <a
                              class="btn btn-outline-secondary nav-link text-dark "
                              id="ex2-tab-2"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-2"
                              role="tab"
                              aria-controls="ex2-pills-2"
                              aria-selected="false"
                         >
                              {/* <i class="fa fa-laptop" aria-hidden="true"></i>{" "} */}
                              Sản phẩm
                         </a>
                    </li>
                    <li class="nav-item ms-3" role="presentation">
                         <a
                              class="nav-link text-dark btn btn-outline-secondary"
                              id="ex2-tab-3"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-3"
                              role="tab"
                              aria-controls="ex2-pills-3"
                              aria-selected="false"
                         >
                              {/* <i
                                   class="fa fa-headphones"
                                   aria-hidden="true"
                              ></i>{" "} */}
                              Liên hệ
                         </a>
                    </li>
                    <li class="nav-item ms-3 " role="presentation">
                         <a
                              class="btn btn-outline-secondary nav-link text-dark"
                              id="ex2-tab-3"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-3"
                              role="tab"
                              aria-controls="ex2-pills-3"
                              aria-selected="false"
                         >
                              {/* <i class="fa fa-clock-o" aria-hidden="true"></i>{" "} */}
                              Tin tức
                         </a>
                    </li>
               </>
          );
     };
     return (
          <>
               <div className="container navbar d-flex justify-content-center fs-5 fw-bold border-top border-bottom mb-1 d-none d-md-block">
                    <ul class="nav nav-pills nav-fill" id="ex1" role="tablist">
                         {navbarMenu()}
                    </ul>
               </div>
               <div className="container navbar d-md-none">
                    <span
                         className="ps-3 fs-1 fw-bold"
                         data-bs-toggle="collapse"
                         href="#collapseExampleMenu"
                         role="button"
                         aria-expanded="false"
                         aria-controls="collapseExample"
                    >
                         <i class="fa fa-bars" aria-hidden="true"></i>
                    </span>

                    <div class="collapse fw-bold fs-5" id="collapseExampleMenu">
                         <ul
                              class="nav nav-pills nav-fill"
                              id="ex1"
                              role="tablist"
                         >
                              {navbarMenu()}
                         </ul>
                    </div>
               </div>
          </>
     );
};

export default Navbar;
