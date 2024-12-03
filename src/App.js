import "./App.css";
import "./Mycomponent/Styles/GlobalStyle.css"
import "./Mycomponent/Styles/Responsive400.css"
import "./Mycomponent/Styles/Responsive665.css"
import "./Mycomponent/Styles/Responsive900.css"
import "./Mycomponent/Styles/Responsive1035.css"
import Navbar from "./Mycomponent/JSs/Navbar";
import Home from "./Mycomponent/JSs/Home";
import About from "./Mycomponent/JSs/About";
import Products from "./Mycomponent/JSs/Products";
import Contact from "./Mycomponent/JSs/Contact";
import Login from "./Mycomponent/JSs/Login"

import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login}/>
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
