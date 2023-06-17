import { useRoutes } from "react-router-dom"
import routes from "./routes"
import Navbar from './components/navbar/Navbar'
import Menu from "./components/menu/Menu"
import Footer from './components/footer/Footer'
function App() {
  const router = useRoutes(routes)
  return (
    <>
      <Navbar />
      {/* {router}
      <Footer/> */}
    </>
  );
}

export default App
