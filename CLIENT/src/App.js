import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
const App = () => {
     return (
          <>
               <BrowserRouter>
                    <AppRoutes />
                    <ToastContainer
                         position="top-right"
                         autoClose={1000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                         theme="light"
                    />
               </BrowserRouter>
          </>
     );
};

export default App;
