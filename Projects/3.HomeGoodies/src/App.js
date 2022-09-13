import {Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import RecipeList from './components/RecipeList';
import Home from "./routes/Home";

// import Home from "./routes/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RecipeList/>

         {/* Code links so on click it route to payments page */}
        <ul> 
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/truffle">Truffle</Link></li> 
          <li><Link to=""></Link></li> 
        </ul>  
        <Routes>
        <Route path="/home" element={<Home/>}/> 
      
    </Routes> 

    </div>
  );
}

export default App;
