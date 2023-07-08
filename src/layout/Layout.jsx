import { Container } from "./layout.style";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Menu from "../components/layout/menu/Menu";
const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Menu />
      <main className="h-full">{children}</main>
      <Footer/>
    </Container>
  );
};

export default Layout;
