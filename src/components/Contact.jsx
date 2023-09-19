import React from "react";

import LogoFilli from "../images/LogoFilli.png";
import bottle from "../images/milk-bottle.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import "../components/Contact.css"

const Contact = () => {
    return (
        <>
            <div className="background-image7">

                <div className="content7">
                    <h4 className="contact">CONTACT US</h4>
                    <hr />
                    <h1>How to <br />Communicate?</h1>
                    <h3>Visit<span style={{ color: "#38414C", marginLeft: "12%", fontSize: "21px", fontFamily: "ARSMAQUETTE" }}>11920 S Texas 6, #6001,<br /><span style={{ marginLeft: "19%", fontFamily: "ARSMAQUETTE" }}>Sugar Land, TX 77498</span></span></h3>
                    <h3>Call <span style={{ color: "#38414C", marginLeft: "13%", fontSize: "21px", fontFamily: "ARSMAQUETTE" }}> 832 532-1010</span></h3>
                    <h3>Support <span style={{ color: "#38414C", marginLeft: "55px", fontSize: "21px", fontFamily: "ARSMAQUETTE" }}>support@fillicafetexas.com</span></h3>


                    <h4 className="contact">OUR TIMINGS</h4>
                    <hr />
                    <h1>When <br />To Come?</h1>

                    <h3>Mon to Thur <span style={{ color: "#FF5100", marginLeft: "90px" }}>Friday</span></h3>
                    <p style={{ fontFamily: "ARSMAQUETTE" }}>11 AM - 11 PM <span style={{ color: "#38414C", marginLeft: "15%", fontFamily: "ARSMAQUETTE" }}>11 AM - 1 PM</span></p>

                    <h3>Saturday <span style={{ color: "#FF5100", marginLeft: "130px" }}>Sunday</span></h3>
                    <p style={{ fontFamily: "ARSMAQUETTE" }}>10 AM - 1 PM <span style={{ color: "#38414C", marginLeft: "16%", fontFamily: "ARSMAQUETTE" }}>11 AM - 1 PM</span></p>
                </div>


                <div className="right">
                    <div className="bottom-right">
                        <p>NOW BREWING IN</p>
                        <h1>HOUSTON, TEXAS</h1>
                        <p>UNITED STATES</p>
                    </div>

                </div>



            </div>

            {/* page#9 */}
            <div className="background-image8">
                <div className="content8">
                    <h4 style={{ fontSize: "16px" }}>SUBSCRIBE NOW</h4>
                    <hr />
                    <h1>Get The <br /> Latest Updates</h1>
                    <input type="text" placeholder="email" /> <br />
                    <button>Subscribe</button>
                    <hr style={{ width: "100%", color: "lightgray", marginTop: "50px", opacity: "0.2" }}></hr>
                    {/* <h1 style={{ fontFamily: "Brush Script MT", fontSize: "4.0em" }}>Filli</h1> */}
                    <img src={LogoFilli} alt="" height={100} width={140} />

                    <div className="icons">
                        <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGooglePlay}></FontAwesomeIcon>
                    </div>


                </div>


                <div>

                    <div className="bottle-img">
                        <img src={bottle} alt="" width={150} height={200} />
                    </div>

                    <div className="first" style={{ color: "lightgray" }}>
                        <ul style={{ fontSize: "22px", paddingTop: "25%", paddingLeft: "20%" }}>
                            <li>Home</li>
                            <li>Stories</li>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Blogs</li>
                        </ul>
                    </div>

                    <div className="footer">

                        <div>
                            <h4 style={{ color: "white" }}>United States</h4>
                            <p>11920 S Texas 6, <br /> #600, Sugar Land, <br />TX 77498</p>
                        </div>

                        <div>
                            <h4 style={{ color: "white" }}>Headquarter</h4>
                            <p>11920 S Dubai 6, <br /> #689, Ajman, <br /> DB 12345</p>
                        </div>

                        <div>
                            <h5>Privacy Policy</h5>
                            <h5>Compliance</h5>
                            <h5>Terms & Condition</h5>
                            <h5>Cookies</h5>


                        </div>


                    </div>

                    <div>

                        <div className="icons">
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>

                            <div style={{ paddingTop: "10px", color: "#e9ecef" }}>
                                <p>© 2022 FiLLiTexas - Houston. All rights reserved</p>
                            </div>

                        </div>



                    </div>

                </div>
            </div>



        </>
    )
}

export default Contact;