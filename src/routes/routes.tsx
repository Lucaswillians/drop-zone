
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "../pages/BasePage";
import Home from "../pages/Home";
import Documents from "../pages/Documents";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="documents" element={<Documents />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}