import React ,{useEffect} from "react"
import { Routes,Route,Link} from "react-router-dom";
import Feedpage1 from './Components/Feedpage1';
import Feedpage2 from './Components/Feedpage2';
import Feedpage3 from "./Components/Feedpage3";
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
  // useEffect(() => {

  // }, [])
  
  return (
    <div className="App">
     Feed is loading.....
     <Routes> 
       <Route exact path ="/" element ={<Feedpage1 />} />
       <Route exact path ="/page1" element ={<Feedpage1 />} />
       <Route exact path ="/page2" element ={<Feedpage2 />} />
       <Route exact path ="/page3" element ={<Feedpage3 />} />
    </Routes>
     <PaginationTabs />
    </div>
  );
}

export default App;