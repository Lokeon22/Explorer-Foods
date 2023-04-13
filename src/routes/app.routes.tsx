import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateDish } from "../pages/CreateDish";
import { EditDish } from "../pages/EditDish";
import { Payment } from "../pages/Payment";
import { Search } from "../pages/Search";
import { Favorites } from "../pages/Favorites";

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
        <Route path="/editdish/:id" element={<EditDish />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
