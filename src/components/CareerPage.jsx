import React, { useState } from 'react'
import "../components/CareerPage.css";
import Contact from "./Contact";
import $ from "jquery";
import Popup from "../components/Popup";

// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';




$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.backg-career2').addClass('topauto');
    } else {
        $('.backg-career2').removeClass('topauto');
    }
});



const CareerPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [curdesign, setcurdesign] = useState("");



    const togglePopup = (e) => {

        setIsOpen(!isOpen);

        var getdesignation = $(e.currentTarget).parent().siblings('h1').html();
        setcurdesign(getdesignation)

    }







    return (
        <>

            <div className="backg-career1">
                <h4>CAREERS AT FILLI</h4>
                <h1>Brew your Success <br />
                    <span> with FiLLi </span></h1>
                <button>View Vacancies</button>
            </div>


            <div className="backg-career2">

                <div className="careercontent2">
                    <h4>WE'RE HIRING!</h4>
                    <hr />
                    <h1>Become a part of the <br />
                        <span> FiLLi Family </span></h1>
                    <p>We’re looking for passionate people to join us on our mission. We value your skills and we’re excited to grow with you.</p>


                </div>



                <div className="hiring-info">
                    <h1>Café Manager</h1>
                    <p>We’re looking for a café manager to join our café team.</p>
                    <button>⌚ Full Time</button> <br />

                    <div className='apply'>

                        <input
                            type="button"
                            value="Apply Now"
                            onClick={togglePopup}
                        />



                    </div>

                    <hr />
                </div>


                <div className="hiring-info">
                    <h1>Operation Manager</h1>
                    <p>We’re looking for a café manager to join our café team.</p>
                    <button>⌚ Full Time</button>


                    <div className='apply'>

                        <input
                            type="button"
                            value="Apply Now"
                            onClick={togglePopup}
                        />

                        {/* {isOpen && <Popup handleClose={togglePopup} />} */}

                    </div>

                    <hr />
                </div>


                <div className="hiring-info">
                    <h1>Customer Service</h1>
                    <p>We’re looking for a café manager to join our café team.</p>
                    <button>⌚ Part Time</button>

                    <div className='apply'>

                        <input
                            type="button"
                            value="Apply Now"
                            onClick={togglePopup}
                        />

                        {/* {isOpen && <Popup handleClose={togglePopup} />} */}

                    </div>


                    <hr />
                </div>


                <div className="hiring-info">
                    <h1>Chef</h1>
                    <p>We’re looking for a café manager to join our café team.</p>
                    <button>⌚ Full Time</button>

                    <div className='apply'>

                        <input
                            type="button"
                            value="Apply Now"
                            onClick={togglePopup}
                        />

                        {/* {isOpen && <Popup handleClose={togglePopup} />} */}

                    </div>


                    <hr />
                </div>
            </div>


            <Contact></Contact>

            {isOpen && <Popup handleClose={togglePopup} designation={curdesign} />}

        </>
    )
}

export default CareerPage