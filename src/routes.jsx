import Home from "./pages/home/Home";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Categories from "./pages/categories/Categories";
import Search from "./pages/search/Search";
const routes = [
  { path: "/", element: <Home /> },
  { path: "productInfo/:productId", element: <ProductInfo /> },
  { path: "category/:categoryName", element: <Categories /> },
  { path: "search/:productName/:pageNumber", element: <Search /> },
  // { path: "checkout/cart", element: <ProductInfo /> },
];

export default routes;
