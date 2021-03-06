import react from "react";

function Navbar(params) {
  return (
    <section className="template-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./images/logo.png" className="nav-img" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-div" id="navbarNavDropdown" style={{paddingLeft: '40%'}}>
                    <ul className="navbar-nav nav-ul">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                            Home
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Pages
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                                >
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                    Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            Contact
                            </a>
                        </li>
                        <li className="d-flex">
                          <div className="icon-position">
                             <i className="fa-solid fa-cart-shopping" style={{color: ''}}></i>
                         </div>
                         <div className="icon-position">
                              <i className="fa-solid fa-magnifying-glass" style={{color: ''}}></i>
                         </div>
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    </section>
  );
}

export default Navbar;
