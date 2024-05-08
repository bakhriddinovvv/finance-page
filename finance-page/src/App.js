import Analiytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Analiytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
