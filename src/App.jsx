import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout/Layout";

function App() {
  const router = useRoutes(routes);
  return <Layout> {router}</Layout>;
}

export default App;
