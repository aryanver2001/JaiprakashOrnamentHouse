import "./App.css";
import Navbar from "./Mycomponent/JSs/Navbar";
import Footertail from "./Mycomponent/JSs/Footertail";
import Home from "./Mycomponent/JSs/Home";
import About from "./Mycomponent/JSs/About";
import Products from "./Mycomponent/JSs/Products";
import Contact from "./Mycomponent/JSs/Contact";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footertail />
    </div>
  );
}

export default App;
