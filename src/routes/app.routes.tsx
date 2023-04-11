import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateDish } from "../pages/CreateDish";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/Helper/NotFound";

export function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/createdish" element={<CreateDish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
