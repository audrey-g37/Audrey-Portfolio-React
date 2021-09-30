// import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Header />
        <Navigation />
      </div>
      <Footer />
    </>
  );
}

export default App;
