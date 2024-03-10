import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import VehicleFull from "../components/cards/VehicleFull";
import Home from "../pages/Home/Home";
import Categorypage from "../pages/categories/Categorypage";
import BikePage from "../pages/categories/sections/bikes/BikePage";
import CabsPage from "../pages/categories/sections/cabs/CabsPage";
import CarPage from "../pages/categories/sections/cars/CarPage";
import TrucksPage from "../pages/categories/sections/trucks/TrucksPage";
import VansPage from "../pages/categories/sections/vans/VansPage";
import ContactUs from "../pages/contactUS/ContactUs";
import SignUp from "../pages/SignIn";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Categorypage />} />
          <Route path="category/cars" element={<CarPage />}/>
          <Route path="category/cars/:id" element={<VehicleFull />}/>
          <Route path="category/vans" element={<VansPage />} />
          <Route path="category/vans/:id" element={<VehicleFull />} />
          <Route path="category/cabs" element={<CabsPage />} />
          <Route path="category/cabs/:id" element={<VehicleFull />} />
          <Route path="category/trucks" element={<TrucksPage />} />
          <Route path="category/trucks/:id" element={<VehicleFull />} />
          <Route path="category/motorcycles" element={<BikePage />} />
          <Route path="category/motorcycles/:id" element={<VehicleFull />} />
          <Route path="contact-us" element={<ContactUs/>} />
          <Route path="signup" element={<SignUp/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
