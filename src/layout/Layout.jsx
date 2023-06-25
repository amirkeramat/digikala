import { Container } from "./layout.style";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import Menu from "../components/layout/menu/Menu";
const Layout = ({ children }) => {
  return (
    <Container>
       {/* <img src='https://dkstatics-public.digikala.com/digikala-adservice-banners/6cd5d0b683a535db3c9304db3dad4d357896174e_1687638592.jpg?x-oss-process=image/quality,q_95/format,webp' /> */}
      <Header />
      <Menu />
      <main>{children}</main>
      {/* <Footer/> */}
    </Container>
  );
};

export default Layout;
