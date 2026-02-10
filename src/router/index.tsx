import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "../pages/about-me";
import { ContactMe } from "../pages/contact-me";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
};