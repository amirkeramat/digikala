import Home from './pages/home/Home'
import AllProducts from "./pages/allProducts/AllProducts";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Categories from './pages/categories/Categories';
const routes = [
  { path: "/", element: <Home /> },
  { path: "products", element: <AllProducts /> },
  { path: "productInfo/:productId", element: <ProductInfo /> },
  { path: "category/:categoryName/:pageNumber", element: <Categories /> },
  // { path: "checkout/cart", element: <ProductInfo /> },
];

export default routes;
