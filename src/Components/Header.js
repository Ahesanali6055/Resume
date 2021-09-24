import React from 'react';

const Header = () => {

    return (

        <div className="Header2">
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>

            {/* ======= Header Navbar ======= */}

            <header id="header" className="d-flex flex-column justify-content-center">
                <nav className="nav-menu">
                    <ul>
                        <li className="active"><a href="#hero"><i className="bx bx-home" /> <span>Home</span></a></li>
                        <li><a href="#about"><i className="bx bx-user" /> <span>About</span></a></li>
                        <li><a href="#resume"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
                        <li><a href="#project"><i className="bx bx-server" /> <span>Project</span></a></li>
                    </ul>
                </nav>
            </header>

            {/* ======= Hero Section ======= */}

            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                    <h1>Ahesanali </h1>
                    <p>I'm Web Developer With
                        React Js.</p>
                    <div className="social-links">
                        <a href="https://twitter.com/Ehesanalimasi" target="_blank" className="twitter"><i className="bx bxl-twitter" size="2px" /></a>
                        <a href="https://www.facebook.com/Ehasanali.masi" target="_blank" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="https://www.instagram.com/ehesan_6055/" target="_blank" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="https://www.linkedin.com/in/ehesanali-masi-961a43193/" target="_blank" className="linkedin"><i className="bx bxl-linkedin" /></a>
                        <a href="https://twitter.com/Ehesanalimasi" target="_blank" className="twitter"><i className="bx bxl-github" size="2px" /></a>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Header;
