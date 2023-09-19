import React from "react";

const Navbar = () => {
     return (
          <div className="container-fluild navbar d-flex justify-content-center fs-5 fw-bold bg-warning">
               <ul class="nav nav-pills nav-fill" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                         <a
                              class="btn btn-outline-warning nav-link text-dark "
                              id="ex2-tab-1"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-1"
                              role="tab"
                              aria-controls="ex2-pills-1"
                              aria-selected="true"
                         >
                              <i class="fa fa-mobile" aria-hidden="true"></i>{" "}
                              Điện thoại
                         </a>
                    </li>
                    <li class="nav-item ms-3" role="presentation">
                         <a
                              class="btn btn-outline-warning nav-link text-dark "
                              id="ex2-tab-2"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-2"
                              role="tab"
                              aria-controls="ex2-pills-2"
                              aria-selected="false"
                         >
                              <i class="fa fa-laptop" aria-hidden="true"></i>{" "}
                              Laptop
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
                              <i
                                   class="fa fa-headphones"
                                   aria-hidden="true"
                              ></i>{" "}
                              Phụ kiện
                         </a>
                    </li>
                    <li class="nav-item ms-3 " role="presentation">
                         <a
                              class="btn btn-outline-warning nav-link text-dark"
                              id="ex2-tab-3"
                              data-mdb-toggle="pill"
                              href="#ex2-pills-3"
                              role="tab"
                              aria-controls="ex2-pills-3"
                              aria-selected="false"
                         >
                              <i class="fa fa-clock-o" aria-hidden="true"></i>{" "}
                              Đồng hồ
                         </a>
                    </li>
               </ul>
          </div>
     );
};

export default Navbar;
