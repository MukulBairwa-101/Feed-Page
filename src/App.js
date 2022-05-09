import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Feedpage1 from "./Components/Feedpage1";
import Feedpage2 from "./Components/Feedpage2";
import Feedpage3 from "./Components/Feedpage3";
import Footer from "./Components/Footer";
import logo from "./Assets/images/logo.png";
import "./App.css";

const PaginationTabs = () => {
  const [active, setActive] = useState({
    one: true,
    two: false,
    three: false,
  });

  const handleActivePage = (page) => {
    if (page === "one") {
      setActive({
        one: true,
        two: false,
        three: false,
      });
    } else if (page === "two") {
      setActive({
        one: false,
        two: true,
        three: false,
      });
    } else if (page === "three") {
      setActive({
        one: false,
        two: false,
        three: true,
      });
    } else setActive({ one: true, two: false, three: true });
  };

  return (
    <ul className="tabs_holder">
      <li className={active.one === true ? 'active' :''}>
        <Link to="/page1" onClick={() => handleActivePage("one")}>
          1
        </Link>
      </li>
      <li className={active.two === true ? 'active' :''}>
        <Link to="/page2" onClick={() => handleActivePage("two")}>
          2
        </Link>
      </li>
      <li className={active.three === true ? 'active' :''}>
        <Link to="/page3" onClick={() => handleActivePage("three")}>
          3
        </Link>
      </li>
    </ul>
  );
};
function App() {
  return (
    <div className="App">
      <header className="nav">
        <img src={logo} alt="logo" />
      </header>
      <Routes>
        <Route exact path="/" element={<Feedpage1 />} />
        <Route exact path="/page1" element={<Feedpage1 />} />
        <Route exact path="/page2" element={<Feedpage2 />} />
        <Route exact path="/page3" element={<Feedpage3 />} />
      </Routes>
      <PaginationTabs />
      <Footer />
    </div>
  );
}

export default App;
