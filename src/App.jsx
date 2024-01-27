import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import SiteRoutes from "./routes/SiteRoutes";

function App() {
  return (
    <>
      <Header />
      <SiteRoutes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
