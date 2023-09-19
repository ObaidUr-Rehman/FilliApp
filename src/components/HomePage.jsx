import React, { useState } from "react";
import Menu from "../components/Menu";
import box from "../images/box.png";
import image2 from "../images/burger.png";
import can from '../images/Can.png';
import tea from '../images/Tea.png';
import cup from "../images/Cup.png";
import icecream from "../images/Ice-cream.png";
import fifthbg from "../images/fifth-bg.png";
import greenbg from "../images/green-bg.png"
import FilliCoffe from "../images/FilliCoffe.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

import Contact from "./Contact";



const HomePage = () => {



    const [item, setitem] = useState(Menu);
    const filterItem = (myitem) => {
        const updateditem = Menu.filter((curele) => {
            return curele.category === myitem;

        });
        setitem(updateditem);
    }



    let settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: false,
    }



    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.background-image2').addClass('topauto');
        } else {
            $('.background-image2').removeClass('topauto');
        }
    });



    return (
        <>

            {/* page#1 */}
            <div className="background-image">
                <Slider {...settings}  >

                    <div className="main-div">

                        <div className="content">
                            <h1 className="heading">Brewed To <br /> Perk You Up</h1>
                            <p style={{ fontSize: "19px", fontWeight: "bold", fontFamily: "ARSMAQUETTE" }}> Lorem ipsum dolor sit amet consectetur amety eget<br /> adipisicing elit. Quod excepturi nam quisquam elit <br />  repellat error ipsam ab maiores inventore volup <br /> tates soluta!</p>
                            <button>Our Experiences</button>
                        </div>


                        <div>
                            <img className="image1" src={box} alt="" width={200} height={400} />
                        </div>

                    </div>



                    <div className="main-div">

                        <div className="content">
                            <h1 className="heading">Brewed To <br /> Perk You Up</h1>
                            <p style={{ fontFamily: "ARSMAQUETTE", fontSize: "19px", fontWeight: "bold", }}>Lorem ipsum dolor sit amet consectetur amety <br /> adipisicing elit. Quod excepturi nam quisquam <br />  repellat error ipsam ab maiores inventore volup <br /> tates soluta!</p>
                            <button>Our Experiences</button>
                        </div>

                        <div >
                            <img className="image1" src={can} alt="" width={400} height={500} />
                        </div>

                    </div>




                    <div className="main-div">

                        <div className="content">
                            <h1 className="heading">Brewed To <br /> Perk You Up</h1>
                            <p style={{ fontFamily: "ARSMAQUETTE", fontSize: "19px", fontWeight: "bold", }}>Lorem ipsum dolor sit amet consectetur amety <br /> adipisicing elit. Quod excepturi nam quisquam <br />  repellat error ipsam ab maiores inventore volup <br /> tates soluta!</p>
                            <button>Our Experiences</button>
                        </div>

                        <div>
                            <img className="image1" src={tea} alt="" width={300} height={500} />
                        </div>

                    </div>

                </Slider>

            </div>

            {/* page#2 */}
            <div className="background-image2">

                <div className="content2" id="about">

                    <h4>ABOUT US</h4>
                    <hr />
                    <h1 className="heading2">Continuing <br /> The Legacy <br /> Of Filli Dubai</h1>

                    <p style={{ color: "white", paddingTop: "20px", fontWeight: "500", fontFamily: "ARSMAQUETTE" }}>Three phrases is all it takes to describe FiLLi. Tea n’ Talk:<br /> There is always time to have your tea and finish all your talk <br />
                        at FiLLi. Our vision: to be the largest and most admired tea <br />
                        brand in the World by uniting people’s love for tea; motivates <br />
                        each member of the FiLLi family to reach a level where FiLLi <br />
                        would be known for its proficiency in Tea and will be a Second <br />
                        home not just for people in Texas, but also for tea lovers <br />
                        across USA.
                    </p>
                </div>

                <div className="img2" >
                    <img src={image2} alt="" width={750} height={820} />
                </div>

            </div>



            {/* page#3 */}
            <div className="background-image3">

                <div className="content3">
                    <h4>TOP RATED</h4>
                    <hr />
                    <h1>Customer <br /> Most <span style={{ color: "#F05223" }}>Favourite</span></h1>
                    <p style={{ color: "#393939", paddingTop: "10px", fontFamily: "ARSMAQUETTE" }}>Lorem ipsum dolor sit amet consectetur. Gravida tincidunt <br />
                        neque amet adipiscing molestie. Senectus enim eget feug <br />
                        at pellentesque dolor. Metus pharetra turpis malesuada  <br />
                        enim venenatis orci libero.</p>
                    <button>Order Online </button>
                </div>

                <div className="img3" >
                    <img src={icecream} alt="" width={700} height={650} />
                </div>



            </div>
            {/* page#4 */}
            <div className="backimag4">

                <div className="headingg">
                    <h1>A <br /> WORLD FILLED <br /> WITH <span style={{ textShadow: "2px 2px 2px #FF8000" }}> CHAI </span> </h1>
                </div>

                <div className="section">

                    <div className="teaimg">
                        <img src={FilliCoffe} alt="" height={330} width={350} />
                    </div>

                    <div className="teacontent">
                        <h3>OUR SPECIALITY</h3>
                        <hr />
                        <h1>ZAFRAN TEA</h1>
                        <p style={{ fontFamily: "ARSMAQUETTE" }}>Our own signature blend of FiLLi Zafran Tea has united many Tea <br />
                            Lovers to have long talks. Zafran is beneficial to health and when <br />
                            added to your beverage,it’s a combination that one can never get <br />
                            enough of.<br />
                            <br />
                            FiLLi Zafran Tea has been a all time favorite of people from all <br />
                            age-groups, be it teens, working professionals or senior citizens. <br />
                            All of them make time to enjoy their cup of tea over long talks.</p>
                    </div>


                </div>

            </div>




            {/* page#5 */}
            <div className="background-image4">

                <h4 style={{ color: "darkgreen", letterSpacing: "8px", paddingTop: "3%" }}>OUR CATEGORIES</h4>
                <h1>We Have Items That You <br /> <span style={{ color: "darkgreen" }}>Will Love</span></h1>
                <p style={{ paddingTop: "10px", fontFamily: "ARSMAQUETTE" }}>We have a unique chai and food range using premium using premium ingredients served in <br /> a fashionable environment</p>


                <div className="maincontent">

                    <div className="image4">
                        <img src={greenbg} alt="" height={400} width={200} />
                        <div className="top">Today's Special <p style={{ color: "#FFFFFF", fontSize: "20px", marginTop: "12px", fontFamily: "ARSMAQUETTE", fontWeight: "400" }}>Enjoy special promos from us</p></div>
                    </div>


                    <div className="button">

                        <div className="menu-tab d-flex">


                            <button className="menu-btn" onClick={() => setitem(Menu)}>All</button>
                            <button className="menu-btn" onClick={() => filterItem('breakfast')}>Breakfast</button>
                            <button className="menu-btn" onClick={() => filterItem('loaded fries')}>Loaded Fries</button>
                            <button className="menu-btn" onClick={() => filterItem('All Day Snack')}>All Day Snack</button>
                            {/* <button className="btn btn-warning" onClick={() => filterItem('evening')}>Evening</button> */}


                        </div>

                        <div className="allcards">
                            {

                                item.map((elem) => {

                                    const { id, name, image, price } = elem;
                                    return (
                                        <>

                                            <div className="cards">

                                                <div className="cardcontent">

                                                    <div className="card-img">
                                                        <img src={image} className="card-img-top" alt="..." />
                                                    </div>

                                                    <div className="card-info">

                                                        <div className="card-body">
                                                            <h6 className="card-title" style={{ color: "#1B634E" }}>{name}</h6>
                                                            <h5 className="card-text">{price}</h5>
                                                        </div>

                                                        <div style={{ paddingRight: "50px" }}>
                                                            <button className="button2">Order Now</button>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>





            </div>



            {/* page#6 */}
            <div className="background-image5">

                <div className="fifthbg">
                    <img src={fifthbg} alt="" height={1050} width={600} />
                </div>

                <div className="content5">
                    <h4>NEW LAUNCH</h4>
                    <hr />
                    <h1>Chicken Chapli<br />FiLL Bunz</h1>
                    <p style={{ color: "#38414C", paddingTop: "22px", fontSize: "20px", fontFamily: "ARSMAQUETTE" }}>Experience at FiLLi is always fun, cool and relaxing,
                        because<br />we believe in making your day! Once in, FiLLi offers you the  <br />chance to use the space as it suits your moods the best, <br /> whether it's a break from work or time with your friends.</p>
                    <button>Order Online</button>
                </div>


            </div>



            {/* page#7 */}
            <div className="background-image9">

                <div className="img9" >
                    <img src={cup} alt="" width={500} height={600} />
                </div>

                <div className="content6">
                    <h4>OUR STORIES</h4>
                    <hr />
                    <h1>The Filli<br />Experience</h1>
                    <p style={{ color: "#38414C", paddingTop: "22px", fontSize: "21px", fontFamily: "ARSMAQUETTE" }}>Experience at FiLLi is always fun, cool and relaxing,
                        because<br />we believe in making your day! Once in, FiLLi offers you the  <br />chance to use the space as it suits your moods the best, <br /> whether it’s a break from work or time with your friends.</p>
                    <button>Our Experience</button>
                </div>

            </div>

            <Contact></Contact>



        </>
    )
}

export default HomePage;