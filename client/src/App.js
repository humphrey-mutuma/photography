import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import { ToastContainer } from "react-toastify";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Gallery />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="*"
          element={
            <main className="w-full h-screen grid place-items-center">
              <h1 className="h1">Page Not Found!</h1>
            </main>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default App;
