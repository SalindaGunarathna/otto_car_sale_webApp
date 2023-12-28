import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Categorypage from "../pages/categories/Categorypage";
import BikePage from "../pages/categories/sections/bikes/BikePage";
import CabsPage from "../pages/categories/sections/cabs/CabsPage";
import CarPage from "../pages/categories/sections/cars/CarPage";
import TrucksPage from "../pages/categories/sections/trucks/TrucksPage";
import VansPage from "../pages/categories/sections/vans/VansPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category/cars" element={<CarPage />} />
          <Route path="category" element={<Categorypage />} />
          <Route path="category/vans" element={<VansPage />} />
          <Route path="category/cabs" element={<CabsPage />} />
          <Route path="category/trucks" element={<TrucksPage />} />
          <Route path="category/motorcycles" element={<BikePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
