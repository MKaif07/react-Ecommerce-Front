import NavBar from "../features/NavBar/Navbar";
import ProductList from "../features/product/components/ProductList";

function Home() {
    return (  <div>
        <NavBar>
            <ProductList></ProductList>
        </NavBar>
    </div>);
}

export default Home;