import AccordianFeactures from "./components/AccordianFeactures";
import Banner from "./components/Banner";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import ProductsSlider from "./components/ProductsSlider";

function App() {
  return (
    <>
      <Banner />
      <div className="  mx-auto ">
        <ProductsSlider />

        <CardSection />
        <AccordianFeactures />
        <Footer />
      </div>
    </>
  );
}

export default App;
