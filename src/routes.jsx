import Home from './pages/home/Home'
import AllProducts from "./pages/allProducts/AllProducts";
import ProductInfo from "./pages/productInfo/ProductInfo";

const routes = [
  { path: "/", element: <Home /> },
  { path: "products", element: <AllProducts /> },
  { path: "productInfo/:productName/:productId", element: <ProductInfo /> },
  // { path: "category/:categoryName", element: <ProductInfo /> },
  // { path: "checkout/cart", element: <ProductInfo /> },
];

export default routes;
