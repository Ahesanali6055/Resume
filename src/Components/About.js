import React from 'react'

const About = () => {
    const imgabout = "../Resume/images/Ehesanali.png"
    return (
        <div>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2><br />
                        <p>
                            “ To become a successful expert in the field of Information Technology by channelizing my
                            technical knowledge and skills to ensure personal and growth and to contribute to the
                            prosperity of the organization.”
                        </p>
                    </div><br />
                    <div className="row">
                        <div className="col-lg-4 image-Ehesan">
                            <img src={imgabout} className="img-fluid" alt />
                        </div>
                        <div className="col-lg-7 pt-4 pt-lg-0 content">
                            <h3>Web Developer.</h3>
                            <p className="font-italic">
                                {/* Getting your first anything without experience is hard, but it's not impossible.
                             There is a position out there for you. It's waiting on you to do the work to get it though in (IT) field. */}
                                A highly motivated and results-driven ReactJs developer with 3 years of hands-on experience,
                                specializing in HTML, CSS, TailwindCSS, ReactJS, NextJS, Redux, JavaScript, TypeScript. As an enthusiastic competitive programmer, I am always eager to learn new concepts and improve my logical thinking. I have a strong expertise in building dynamic, responsive web applications with a strong focus on user experience and design. Committed to continuous learning and growth in frontend development and problem-solving.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="mb-0">
                                        <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong>  5 Aug 1999</li>
                                        <li><i className="icofont-rounded-right" /> <strong>Phone: </strong><a href="tel:+91 9687909530">+91 9687909530</a>
                                        </li>
                                        <li><i className="icofont-rounded-right" /> <strong>City:</strong> Ahemdabad, Gujarat, India</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="mb-0">
                                        <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 25</li>
                                        <li><i class="icofont-rounded-right"></i> <strong>Degree:</strong> B.tech (Computer Engineering)</li>
                                        <li><i className="icofont-rounded-right" /> <strong>E-Mail:</strong> <a href="mailto:ahesanalimasi326@gmail.com">ahesanalimasi326@gmail.com</a></li>
                                    </ul>
                                </div>
                                <div className="col-12">
                                    <p className="my-3">
                                        {/* Hi ! Thanks For Visiting My Profile, Currently I am looking for a good opportunity to enhance my knowledge. I would like to work as Frontend developer with the latest technology like a React Js. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;
