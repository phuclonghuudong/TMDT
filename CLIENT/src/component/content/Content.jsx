/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Carousel from "react-multi-carousel";
import { getAllFakeApi } from "../../services/apiServices";

const Content = () => {
     const number = 10;
     const [listData, setListData] = useState([]);
     const [search, setSearch] = useState("");

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

     useEffect(() => {
          getAllProduct();
     }, []);

     const getAllProduct = async () => {
          const data = await getAllFakeApi();
          if (data && +data.status === 200 && data.data.length > 0) {
               setListData(data.data);
          }
     };
     return (
          <div className="container">
               {/* {contentSale()} */}
               <div className=" card mt-1">
                    <div className="card-header bg-warning d-flex justify-content-between ">
                         <span className="text-dark fw-bold fs-3 align-middle mt-lg-0 mt-md-3 ">
                              <i className="fa fa-pied-piper-alt fs-1 text-secondary"></i>{" "}
                              Sản phẩm
                         </span>
                         <div className="search-product">
                              <input
                                   type="text"
                                   class="form-control border-warning input-search"
                                   placeholder="Search...."
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2"
                                   onChange={(e) => setSearch(e.target.value)}
                              />
                              <button
                                   class="btn btn-success text-dark btn-search"
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

                    <div className="d-grid gap-3">
                         <Carousel responsive={responsive}>
                              {listData && listData.length > 0 ? (
                                   listData
                                        .filter((item) => {
                                             return search.toLocaleLowerCase() ===
                                                  ""
                                                  ? item
                                                  : item.title
                                                         .toLocaleLowerCase()
                                                         .includes(search);
                                        })
                                        .map((item) => {
                                             return (
                                                  <>
                                                       <Product data={item} />
                                                  </>
                                             );
                                        })
                              ) : (
                                   <></>
                              )}
                         </Carousel>
                    </div>
               </div>
          </div>
     );
};

export default Content;
