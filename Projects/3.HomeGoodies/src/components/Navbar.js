import { Routes, Route, Link } from "react-router-dom";
import Home from "../routes/Home";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const Navbar= () => {
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand nav-link disabled text-info" href="#">Baked Goods</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-info" aria-current="page" href={Home}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-info" href="#">Treats</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-info dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Selection
          </a>
          <ul className="dropdown-menu text-info" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Email</a></li>
            <li><a className="dropdown-item" href="#">FAQ</a></li>
            <li><hr  className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Login</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-info">Photos</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Order</button>
        <button className="btn-outline-success " placeholder="Login"> Login</button>
      </form>
    </div>
  </div>
</nav>



    )
}

export default Navbar