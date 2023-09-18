import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";

const AppRoutes = (props) => {
     return (
          <>
               <div>
                    <Routes>
                         <Route path="/" element={<Home />}></Route>
                         <Route path="*">404</Route>
                    </Routes>
               </div>
          </>
     );
};

export default AppRoutes;
