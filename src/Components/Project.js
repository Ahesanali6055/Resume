import React from 'react'

const Project = () => {
    const procal = "../Resume/images/cal.png"
    const proweather = "../Resume/images/weather.png"
    const protic = "../Resume/images/tic3.png"
    const propiano = "../Resume/images/piano1.jpg"
    const propcovid = "../Resume/images/covid.png"
    const propform = "../Resume/images/form.jpg"

    return (
        <div>
            <section id="project" className="project">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Project</h2>
                        <p>This is a collection of React JS practical projects for Beginners, that will guide you through some fun. This beginners practical projects series will take you on a fast-paced journey through building your own maintainable React JS application.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box iconbox-blue">
                                <div className="icon">
                                <img src={procal} className="img-fluid" alt="Calculator" />
                                </div>
                                <h4><a href>Calculator</a></h4>
                                <p>I Choose to create a react calculator as my first project. There can be no better way to calculate with a great start like this.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box iconbox-orange ">
                                <div className="icon">
                                <img src={proweather} className="img-fluid" alt="Weather" />
                                </div>
                                <h4><a href>Weather</a></h4>
                                <p>My Second Project is to make a Weather application work is the current temperature display, which is displayed by the API calling  which is the current temperature display in the air. You can search any location</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box iconbox-pink">
                                <div className="icon">
                                <img src={protic} className="img-fluid" alt="Game" />
                                </div>
                                <h4><a href>Tic-Toc-Toe (Game)</a></h4>
                                <p>A game in which two players cross two horizontal lines and alternately place X and O in a circle formed by two vertical even lines and try to get three X or three rows of O before each opponent Win. Let's see in React Js.With state.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box iconbox-yellow">
                                <div className="icon">
                                <img src={propiano} className="img-fluid" alt="Piano" />
                                </div>
                                <h4><a href>Piano</a></h4>
                                <p>In this project, we will see how to make a piano with React Js.How to listen to audio by clicking the button on the piano</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box iconbox-red">
                                <div className="icon">
                                <img src={propcovid} className="img-fluid" alt="Covid" />
                                </div>
                                <h4><a href>Covid-19</a></h4>
                                <p>In this project you will learn how to know current cases and data of any country through API calling in Covid 19 web app.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box iconbox-teal">
                                <div className="icon">
                                <img src={propform} className="img-fluid" alt="Form" />
                                </div>
                                <h4><a href>Invoice-Form</a></h4>
                                <p>Creating reports is a key feature of most applications. When developing for the web, prefer to create reports using PDF. We will see how to create a PDF from HTML / CSS in React JS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Project;
