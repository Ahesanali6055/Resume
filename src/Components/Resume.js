import React from 'react'

const Resume = () => {
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Resume</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Ahesanali Masi</h4>
                                <p><em>
                                    {/* Currently I am looking for a good opportunity 
                                to enhance my knowledge. I would like to work as Frontend developer with the latest technology like a 
                                React Js. */}
                                    Creating seamless digital experiences with precision and innovation
                                </em></p>
                                <ul>
                                    <li>Ahemdabad,</li>
                                    <li><a href="tel:+91 9687909530">+91
                                        9687909530</a>
                                    </li>
                                    <li> <a href="mailto:ahesanalimasi326@gmail.com">ahesanalimasi326@gmail.com</a></li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Computer Engineering</h4>
                                <h5>2016 - 2020</h5>
                                <p><em>Sankalchand Patel University, Visnagar</em></p>
                                <p>“ To secure a job in the IT industry where I can utilize my knowledge for the organization’s growth. ” </p>
                            </div>


                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Experience</h3>
                            <div className="resume-item">
                                <h4>Shiv Technolabs PVT. LTD.</h4>
                                {/* <h5>October 2021 - Present</h5> */}
                                <h5><em><b>Web Developer</b></em> ( April 2022 - Present )</h5>
                                <ul>
                                    <li> Developed and maintained dynamic websites and web applications using HTML, CSS, TailwindCSS, JavaScript, TypeScript, ReactJS, and NextJS.</li>
                                    <li> Developed user-facing features using React Toolkit, created reusable React components, and optimized components for improved performance.</li>
                                    <li> Experienced with project management tools, version control systems, and integrating third-party libraries like React Flow for flow diagram visualization.</li>
                                    <li> Designed and implemented scalable React application architectures with supporting APIs to ensure optimal performance and reliability.</li>
                                    <li> Collaborated with cross-functional teams including designers and project managers to ensure timely delivery of features.</li>
                                    <li> Wrote clean, maintainable, and well-documented code following best practices and coding standards.</li>
                                </ul>
                                <h5><em><b>Trainee</b></em> ( October 2021 - March 2022 )</h5>
                                <ul>
                                    <li> Built responsive web apps using HTML, CSS, Bootstrap, JavaScript and ReactJS with a focus on components and hooks.</li>
                                    <li> Created dynamic UIs by integrating APIs, reusing components, and optimizing performance.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>React Js. ( internship )</h4>
                                <h5>January 2021 - October 2021</h5>
                                <p><em>Tech440, Ahemdabad</em></p>
                                <ul>
                                    <li>
                                        As a Frontend Developer, I’m working here on HTML, CSS, Bootstrap, JavaScript, React Js.
                                    </li>
                                    <li>
                                        Working on a few many projects. Responsible to develop static or dynamic frontend.
                                    </li>
                                    <li> Co-ordinate with developers to help them out in frontend design and development.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Resume;
