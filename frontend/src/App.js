import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import { ToastContainer } from "react-toastify";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import CreateGallery from "./pages/create-gallery";

const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<Gallery />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/create-gallery" element={<CreateGallery />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
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
