import React, { useRef, useState } from "react";
import "../components/Catering.css";


import $ from "jquery";
import Birthday from "../images/Birthday.png";
import Shower from "../images/Shower.png";
import Corporate from "../images/Corporate.png";
import Wedding from "../images/Wedding.png";
import Graduation from "../images/Graduation.png";

import WeddingEvent from "../images/WeddingEvent.png";
import CorporateEvent from "../images/CorporateEvent.png";

import Contact from "./Contact";





const myFunctionCard = (e) => {

    var getimage = $(e.currentTarget).children().children().children('img').attr("src");
    $(e.currentTarget).addClass('colored');
    $(e.currentTarget).siblings().removeClass('colored');
    $(e.currentTarget).parent().siblings(".content-img1").children().attr("src", getimage)
    // alert(getimage);
}


const Catering = () => {


    return (
        <>

            <div className="backg-catering1">

                <div className="content-catering1">

                    <h1>Make Your Event <br /> Unforgettable With <br /> FiLLi Catering</h1>

                    <p>At FiLLi, we go above and beyond to create an unforgettable experience <br /> for you and your guests. From expertly crafted menus to impeccable <br /> service, we’ll work closely with you to ensure that every detail is taken <br /> care of.</p>

                    <button> Contact Us </button>

                </div>


                <div className="content-img1">
                    <img src={Birthday} alt="" width={500} height={500} />
                </div>


                <div className="allovercards">

                    <div className="card" onClick={myFunctionCard}>
                        <div className="cardcontent" >
                            <div className="card-img" style={{ height: "70px" }}>
                                <img src={Birthday} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>Birthday</h6>
                            </div>
                        </div>
                    </div>


                    <div className="card" onClick={myFunctionCard} >
                        <div className="cardcontent">
                            <div className="card-img" style={{ height: "70px" }}>
                                <img src={Graduation} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>Graduate</h6>
                            </div>
                        </div>
                    </div>



                    <div className="card" onClick={myFunctionCard}>
                        <div className="cardcontent">
                            <div className="card-img" style={{ height: "70px" }}>
                                <img src={Corporate} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>Corporate</h6>
                            </div>
                        </div>
                    </div>



                    <div className="card" onClick={myFunctionCard}>
                        <div className="cardcontent">
                            <div className="card-img" style={{ height: "70px" }}>
                                <img src={Wedding} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>Wedding</h6>
                            </div>
                        </div>
                    </div>



                    <div className="card" onClick={myFunctionCard}>
                        <div className="cardcontent">
                            <div className="card-img" style={{ height: "70px" }}>
                                <img src={Shower} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h6>Shower</h6>
                            </div>
                        </div>
                    </div>


                </div>



            </div>


            <div className="getintouch">

                <h4>GET IN TOUCH</h4>
                <hr />
                <h1>To Plan Your Next Event</h1>

            </div>


            <div className="backg-catering2">

                <div className="content-catering2">


                    <div className="connect">

                        <h1>How to <br /> Connect? </h1>
                        <p>Fill up the form and our team will get back to you within 24 hours.</p>

                        <div className="information">

                            <h4>Visit</h4>
                            <p>11920 S Texas 6, #600, <br /> Sugar Land, TX 77498</p>

                        </div>

                        <div className="information">

                            <h4>Call</h4>
                            <p>(832) 532-1018</p>

                        </div>

                        <div className="information">

                            <h4>Support</h4>
                            <p>support@fillicafetexas.com</p>

                        </div>

                    </div>


                </div>

                <div className="Form-connect">

                    <div className="Form-Information">

                        <form action="/action_page.php">



                            <div className="name">
                                <label>Full Name:</label> <br />
                                <input type="text" /> <br />
                            </div>


                            <div className="name">
                                <label>No.Of Attendes</label> <br />
                                <input type="text" />
                            </div>


                        </form>

                    </div>


                    <div className="Form-Information">


                        <form action="/action_page.php">

                            <div className="name">
                                <label for="fname">Email:</label> <br />
                                <input type="text" /> <br />
                            </div>


                            <div className="name">
                                <label for="fname">Phone Number:</label> <br />
                                <input type="text" />
                            </div>

                        </form>

                    </div>


                    <p className="event">What kind of an event are you looking to get catered?</p>


                    <form action="/action_page.php">

                        <div className="all-btn">

                            <div className="radio-btn">
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Graduation Party </label>
                            </div>



                            <div className="radio-btn">
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Wedding Ceremony </label>
                            </div>



                            <div className="radio-btn">
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Birthday Party</label>
                            </div>


                            <div className="radio-btn">
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Corporate Events</label>
                            </div>


                            <div className="radio-btn">
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Others</label>
                            </div>

                        </div>
                    </form>

                    <div className="message">

                        <p>Message</p>
                        <input type="text" />
                        <br />

                    </div>

                    <button className="send-btn">Send Now</button>

                </div>


            </div>

            <div className="getintouch">

                <h4>OUR RECENTS</h4>
                <hr />
                <h1>MEMORIES WE’VE MADE SO FAR</h1>
                <p>Experience the FiLLi Catering magic by taking a peek into some of the spectacular events we have catered</p>

                <div className="event-images">

                    <div className="image-container">
                        <img src={WeddingEvent} width={300} height={300} alt="" />
                        <p className="img_description">Wedding <br /> Events</p>
                    </div>



                    <div className="image-container">
                        <img src={CorporateEvent} width={300} height={300} alt="" />
                        <p className="img_description">Corprate<br /> Events</p>
                    </div>



                    <div className="image-container">
                        <img src={WeddingEvent} width={300} height={300} alt="" />
                        <p className="img_description">Wedding <br /> Events</p>
                    </div>

                    <div className="image-container">
                        <img src={CorporateEvent} width={300} height={300} alt="" />
                        <p className="img_description">Corprate <br /> Events</p>
                    </div>


                    <div className="image-container">
                        <img src={WeddingEvent} width={300} height={300} alt="" />
                        <p className="img_description">Wedding <br /> Events</p>
                    </div>


                    <div className="image-container">
                        <img src={CorporateEvent} width={300} height={300} alt="" />
                        <p className="img_description">Corporate <br /> Events</p>
                    </div>


                </div>

            </div>


            <Contact></Contact>


        </>

    )
}

export default Catering