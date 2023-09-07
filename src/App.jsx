import "./App.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
import ContactMe from "./pages/ContactMe";
import Header from "./components/Header";
import AbouteMe from "./pages/AbouteMe";

function App() {
  return (
    <main className="relative font-fira-code bg-[#282C33] min-h-screen w-full p-4 flex flex-col">
      <Header />
      <Home />
      <Works />
      <AbouteMe />
      <ContactMe />
    </main>
  );
}

export default App;
