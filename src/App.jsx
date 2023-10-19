import "./App.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
import ContactMe from "./pages/ContactMe";
import Header from "./components/Header";
import AbouteMe from "./pages/AbouteMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative font-fira-code bg-[#282C33] min-h-screen w-full p-4 flex flex-col">
      <Header />
      <Home />
      <Works />
      <AbouteMe />
      <ContactMe />
      <Footer />
    </div>
  );
}


export default App;
