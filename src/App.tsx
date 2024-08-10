import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
