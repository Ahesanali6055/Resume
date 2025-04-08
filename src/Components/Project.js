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
                <div className="container main_proj" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Project</h2>
                        <p>This collection of React JS projects is designed to help developers build robust, maintainable React applications. This series will guide you through advanced concepts and real-world applications, focusing on performance optimization, state management, and scalable architecture.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box iconbox-blue">
                                {/* <div className="icon">
                                    <img src={procal} className="img-fluid" alt="Calculator" />
                                </div> */}
                                {/* <h4><a href>Weather</a></h4> */}
                                <h5 className='projHeader'>FAM <span ><h6>(Payment Intigration App)</h6></span></h5>
                                <p>Developed a modern, secure payment processing solution that integrates multiple payment gateways and offers real-time transaction tracking.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box iconbox-orange ">
                                <h5 className='projHeader'>POD <span><h6>(Print On Demand)</h6></span></h5>
                                <p>Developed a Shopify-integrated platform that enables merchants to launch custom apparel without upfront inventory, featuring a dynamic design canvas for real-time preview and customization, while streamlining design, order placement, and fulfillment processes.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box iconbox-pink">
                                <h5 className='projHeader'>Cart - App <span><h6>(Shopify Embedded & Non-Embedded Cart Customization)</h6></span></h5>
                                <p>Designed a Shopify app that offers a highly customizable cart experience through a dual environment approach: an embedded admin dashboard for settings and a standalone React app for real-time preview and drag-and-drop customization.</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box iconbox-pink">
                                <h5 className='projHeader'>BPM <span><h6> (Business Process Management) System</h6></span></h5>
                                <p>Developed a web-based BPM platform for government agencies to facilitate the creation and management of business processes related to diverse license applications and exam forms.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box iconbox-red">
                                <h5 className='projHeader'>MyBlogTime <span><h6>(Blog Posting Web App)</h6></span></h5>
                                <p>Created a sleek and efficient blog management application that enables users to create, edit, delete, and restore blog posts, while focusing on performance and SEO through server-side rendering.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <p>This is a collection of React JS practical projects for Beginners, that will guide you through some fun. This beginners practical projects series will take you on a fast-paced journey through building your own maintainable React JS application.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100}>
                            <div className="icon-box iconbox-blue">
                                <div className="icon">
                                    <img src={procal} className="img-fluid" alt="Calculator" />
                                </div>
                                <h4><a href>Calculator</a></h4>
                                <p>I Choose to create a react calculator as my first project. There can be no better way to calculate with a great start like this.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box iconbox-orange ">
                                <div className="icon">
                                    <img src={proweather} className="img-fluid" alt="Weather" />
                                </div>
                                <h4><a href>Weather</a></h4>
                                <p>My Second Project is to make a Weather application work is the current temperature display, which is displayed by the API calling  which is the current temperature display in the air. You can search any location</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box iconbox-pink">
                                <div className="icon">
                                    <img src={protic} className="img-fluid" alt="Game" />
                                </div>
                                <h4><a href>Tic-Toc-Toe (Game)</a></h4>
                                <p>A game in which two players cross two horizontal lines and alternately place X and O in a circle formed by two vertical even lines and try to get three X or three rows of O before each opponent Win. Let's see in React Js.With state.</p>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}>
                            <div className="icon-box iconbox-pink">
                                <div className="icon">
                                    <img src={propiano} className="img-fluid" alt="Piano" />
                                </div>
                                <h4><a href>Piano</a></h4>
                                <p>In this project, we will see how to make a piano with React Js.How to listen to audio by clicking the button on the piano</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={200}>
                            <div className="icon-box iconbox-red">
                                <div className="icon">
                                    <img src={propcovid} className="img-fluid" alt="Covid" />
                                </div>
                                <h4><a href>Covid-19</a></h4>
                                <p>In this project you will learn how to know current cases and data of any country through API calling in Covid 19 web app.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay={300}>
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
