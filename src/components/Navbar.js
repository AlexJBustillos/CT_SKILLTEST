import React from 'react';

const Navbar = () => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide Navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                        <li className="current floatleft">
                            <a className="smoothscroll floatleft" href="#home">LOSANGELES MOUNTAINS</a>
                        </li>
                        <li className="smoothscroll ">
                            <a className="smoothscroll " href="#history">01.HISTORY</a>
                        </li>
                        <li className="smoothscroll ">
                            <a className="smoothscroll " href="#team">02.TEAM</a>
                        </li>
                </ul>
            </nav>
            <div className="banner">
                <div className="banner-text">
                    <h1>LOSANGELES MOUNTAINS</h1>
                </div>
            </div>
        </header>
    )
}

export default Navbar;