import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";
import ProductDetails from "../features/product/components/ProductDetails";

function ProductDetailPage() {
  return (
    <>
      <NavBar>
        <ProductDetails></ProductDetails>;
      </NavBar>
      <Footer></Footer>
    </>
  );
}

export default ProductDetailPage;
