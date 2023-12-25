import "./header.css"
import {NavLink, useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#EAD7BB", marginBottom: "15px"}}>
            <div className="container-fluid">
                <NavLink to="/" style={{textDecoration: "none"}}>
                <a className="navbar-brand" style={{color: "black"}}>FURAMA RESORT</a>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/contracts" style={{textDecoration: "none"}}>
                                <a className="nav-link" style={{color: "black"}}>Contract</a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customers" style={{textDecoration: "none"}}>
                                <a className="nav-link" style={{color: "black"}}>Customer</a>
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search"/>
                        <button className="btn btn-outline-light" style={{color: "black"}} type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;