import React from 'react'
import "../components/Popup.css";

const Popup = (props) => {
    return (
        <>
            <div className="popup-box">

                <div className="box">
                    <span className="close-icon" onClick={props.handleClose}>x</span>


                    <div className="text">
                        <h4>OPEN POSITION</h4>
                        <h1>{props.designation}</h1>
                        {console.log(props)}

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
                                    <label for="fname">Any Experience?</label> <br />
                                    <input type="text" />
                                </div>

                            </form>

                        </div>

                        <button className='submit-btn'>Submit</button>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Popup