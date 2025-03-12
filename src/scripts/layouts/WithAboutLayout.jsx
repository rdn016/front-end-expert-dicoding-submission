// layouts/WithAboutLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

/**
 * Layout dengan About dan Hero.
 */
const WithAboutLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default WithAboutLayout;
