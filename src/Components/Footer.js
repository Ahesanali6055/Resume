import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <h3>Ahesanali Masi</h3>
                    <p>I declare that to the best of my knowledge and belief, this Resume correctly describes me, and my qualifications.</p>
                    <div className="social-links">
                        <a href="https://twitter.com/Ehesanalimasi" target="_blank" className="twitter"><i className="bx bxl-twitter" /></a>
                        <a href="https://www.facebook.com/Ehasanali.masi" target="_blank" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="https://www.instagram.com/ehesan_6055/" target="_blank" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="https://www.linkedin.com/in/ehesanali-masi-961a43193/" target="_blank" className="linkedin"><i className="bx bxl-linkedin" /></a>
                       
                    </div>
                    <div className="copyright">
                        © Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by Ehesanali Masi
                    </div>
                </div>
            </footer>
            <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
            {/* <div id="preloader"></div> */}

        </div>
    )
}

export default Footer;
