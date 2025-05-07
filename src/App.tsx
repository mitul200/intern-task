import AccordianFeactures from "./components/AccordianFeactures";
import Banner from "./components/Banner";
import CardSection from "./components/CardSection";

import ProductsSlider from "./components/ProductsSlider";
// import Navber from "./components/Navber";

function App() {
  return (
    <>
      <Banner />
      <div className=" max-w-[1480px] mx-auto ">
        <ProductsSlider />
        <CardSection />
        <AccordianFeactures />
      </div>
    </>
  );
}

export default App;
