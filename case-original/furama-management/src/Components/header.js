import "./header.css"
import {NavLink, useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#046056", marginBottom: "15px"}}>
            <div className="container-fluid">
                <NavLink to="/" style={{textDecoration: "none"}}>
                <a className="navbar-brand" style={{color: "white"}}>FURAMA RESORT</a>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/contracts" style={{textDecoration: "none"}}>
                                <a className="nav-link" style={{color: "white"}}>Contract</a>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/customers" style={{textDecoration: "none"}}>
                                <a className="nav-link" style={{color: "white"}}>Customer</a>
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;