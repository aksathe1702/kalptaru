import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <div className="full_bg">
      <header className="header-area">
        <div className="container-fluid">
          <div className="row d_flex">
            <div className="col-md-2 col-sm-3">
              <div className="logo">
                <Link to="/">Agro<span>Pro</span></Link> {/* Use Link instead of a tag */}
              </div>
            </div>
            <div className="col-md-8 col-sm-9">
              <div className="navbar-area">
                <nav className="site-navbar">
                  <ul>
                    <li><Link className="active" to="/">Home</Link></li> {/* Use Link instead of a tag */}
                    <li><Link to="/about">About</Link></li> {/* Use Link instead of a tag */}
                    <li><Link to="/service">Service</Link></li> {/* Use Link instead of a tag */}
                    <li><Link to="/projects">Projects</Link></li> {/* Use Link instead of a tag */}
                    <li><Link to="/testinomial">Testimonail</Link></li> {/* Use Link instead of a tag */}
                    <li><Link to="/blog">Blog</Link></li> {/* Use Link instead of a tag */}
                    <li><Link to="/contact">Contact</Link></li> {/* Use Link instead of a tag */}
                  </ul>
                  <button className="nav-toggler">
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
            <div className="col-md-2 padd_0 d_none">
              <ul className="email text_align_right">
                <li><Link to="/login">Login</Link></li> {/* Use Link instead of a tag */}
                <li><Link to="/search"><i className="fa fa-search" aria-hidden="true"></i></Link></li> {/* Use Link instead of a tag */}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
