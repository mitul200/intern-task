import AccordianFeactures from "./components/AccordianFeactures";
import Banner from "./components/Banner";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

import ProductsSlider from "./components/ProductsSlider";
// import ServiceFeactures from "./components/serviceFeactures";
// import Navber from "./components/Navber";

function App() {
  return (
    <>
      <Banner />
      <div className="  mx-auto ">
        <ProductsSlider />
        {/* <ServiceFeactures /> */}
        <CardSection />
        <AccordianFeactures />
        <Footer />
      </div>
    </>
  );
}

export default App;
