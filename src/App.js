import React ,{useEffect} from "react"
import { Routes,Route,Link} from "react-router-dom";
import Feedpage1 from './Components/Feedpage1';
import Feedpage2 from './Components/Feedpage2';
import Feedpage3 from "./Components/Feedpage3";
import Footer from "./Components/Footer";
import logo from "./Assets/images/logo.png";
import './App.css';


const PaginationTabs =()=>{
  return(
    
    <ul className="tabs_holder">
      <li> prev </li>
      <li><Link to ="/page1">1</Link></li>
      <li><Link to ="/page2">2</Link></li>
      <li><Link to ="/page3">3</Link></li>  
      <li>next</li>
    </ul>
  )
}
function App() {

  return (
    <div className="App">
     <header className="nav">
       <img  src={logo} alt ="logo"/>
     </header>
     <Routes> 
       <Route exact path ="/" element ={<Feedpage1 />} />
       <Route exact path ="/page1" element ={<Feedpage1 />} />
       <Route exact path ="/page2" element ={<Feedpage2 />} />
       <Route exact path ="/page3" element ={<Feedpage3 />} />
    </Routes>
     <PaginationTabs />
     <Footer />
    </div>
  );
}

export default App;