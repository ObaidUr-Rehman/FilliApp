import React, { useRef } from "react";
import "../components/MenuPage.css"


import $ from "jquery";
import Samosa from "../images/Samosa.png";
import NutellaParatha from "../images/Nutella_Paratha.png";
import VegetableOmlette from "../images/Vegetable_Omlette.png";
import VegetablePasta from "../images/Vegetable_Pasta.png";
import Serena from "../images/Serena_Ansari.png";
import DesiMasalaOmlette from "../images/Desi-Masala-Omlette.png";
import ScrollToTop from "react-scroll-to-top";


import "swiper/css/pagination";

// import Menu from "../components/Menu";
// import DesiBreadOmlette from "../images/DesiBreadOmlette.png";
// import bggreen from "../images/bg-green.png"
// import MilkShake from "../images/Milk-Shake.png";
// import SpicyChicken from "../images/Spicy-Chicken-Foodles.png";
// import BottleMilkShake from "../images/Bottle-MilkShake.png";
// import PouchFilliTea1 from "../images/Pouch-Filli-Tea1.png";
// import Pouc// import Slider from "react-slick";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";


import Contact from "./Contact";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// const data = [
//     {
//         id: "1",
//         key: "1",
//         title: "CHATPATA SAMOSA",
//         text: "TEXT1",
//         img: Samosa
//     },
//     {
//         id: "2",
//         key: "2",
//         title: "Nutella Paratha",
//         text: "Text2.",
//         img: NutellaParatha
//     },
//     {
//         id: "3",
//         key: "3",
//         title: "Vegetable Omlette",
//         text: "Text3.",
//         img: VegetableOmlette
//     },
//     {
//         id: "4",
//         key: "4",
//         title: "VegetablePasta",
//         text: "Text4",
//         img: VegetablePasta
//     }
// ];


const myFunction = (e) => {

    var getheading = $(e.currentTarget).children('p').html();
    $('#banner_title').html(getheading)

    var getimage = $(e.currentTarget).children('img').attr("src");
    $('#banner_image').attr("src", getimage)
    // alert(getimage);

}

const myFunctionCate = (e) => {

    var getheading = $(e.currentTarget).children('p').html();
    $(e.currentTarget).parent().siblings('h1').html(getheading)

    var getimage = $(e.currentTarget).children('img').attr("src");
    $(e.currentTarget).parent().parent().siblings().children().attr("src", getimage)
    // alert(getimage);

}

const MenuPage = () => {

    const button1Ref = useRef();
    const button2Ref = useRef();
    const button3Ref = useRef();
    const button4Ref = useRef();
    const button5Ref = useRef();


    const handleScroll = ref => {
        window.scrollTo({
            behavior: "smooth",
            top: ref.current.offsetTop
        });
    };

    return (
        <>
            <div className="background-menu1">

                <div className="menucontent">

                    <div className="image">
                        <img id="banner_image" src={Samosa} alt="" />
                    </div>

                    <div className="text">

                        <h4>NEW LAUNCH</h4>
                        <hr />
                        <h1 id="banner_title">CHATPATA <br /> SAMOSA</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero <br />
                            augue mauris id enim aliquam lorem. Vitae tellus <br />
                            diam dolor sit ornare proin amet id.</p>
                        <button>Order Now</button>


                    </div>

                </div>


                <div className="allimages">

                    <div className="smallimage" >

                        <div onClick={myFunction} className="photo">
                            <img src={Samosa} alt="" />
                            <p>Chapata Samosa</p>
                        </div>

                        <div onClick={myFunction} className="photo">
                            <img src={NutellaParatha} alt="" />
                            <p>Nutella  Paratha</p>
                        </div>

                        <div onClick={myFunction} className="photo">
                            <img src={VegetableOmlette} alt="" />
                            <p>Vegetable  Omlette</p>
                        </div>

                        <div onClick={myFunction} className="photo">
                            <img src={VegetablePasta} alt="" />
                            <p>Vegetable  Pasta</p>
                        </div>

                    </div>



                    <div className="review">

                        <div className="carddata">

                            <div className="cardimg">
                                <img src={Serena} className="card-img-top" alt="..." height={50} width={100} />
                            </div>

                            <div className="card-info">

                                <div className="card-body">
                                    <h6 className="card-title">Serena Ansari</h6>
                                    <p style={{ fontSize: "12px", fontWeight: "bold" }} className="card-text">Social Media Specialist</p>
                                </div>

                            </div>

                        </div>


                        <div className="review-content">
                            <p style={{ fontSize: "15px", fontFamily: "ARSMAQUETTE" }}>Experience at FiLLi is always fun, cool and relaxing, <br />
                                because we believe in making your day! Once in, FiLLi <br />
                                offers you the chance to use the space as it suits your <br />
                                moods the best, whether it’s a break from work or time <br />
                                with your friend.</p>
                        </div>
                    </div>
                </div>
            </div >

            {/* page#2 */}


            <div className="menunavbar">
                <div className="menu-tab d-flex">

                    <button className="menu-btn" ref={button1Ref} onClick={() => handleScroll(button1Ref)} >Breakfast</button>
                    <button className="menu-btn" ref={button2Ref} onClick={() => handleScroll(button2Ref)} >All Day Snack</button>
                    <button className="menu-btn" ref={button3Ref} onClick={() => handleScroll(button3Ref)} >Filli Signature </button>
                    <button className="menu-btn" ref={button4Ref} onClick={() => handleScroll(button4Ref)} >Loaded Fries</button>
                    <button className="menu-btn" ref={button5Ref} onClick={() => handleScroll(button5Ref)} >Pizza & Foodles</button>

                </div>
            </div>

            <div className="background-menu2">


                <div className="menucontent2" ref={button1Ref} >
                    <h4>BREAKFAST</h4>
                    <hr />
                    <h1>Desi <br /> Bread Masala <br /> Omelette</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. In odio tincidun pellentesque <br />
                        ellentesque scelerisque neque amet. Quam felis sit diam at massa mo <br />
                        rbi cras. Adipiscing tempus a ull amcorper odio sed.</p>
                    <button>Order Online</button>


                    <div className="slideimage">
                        <div className="photo" onClick={myFunctionCate}>
                            <img src={Samosa} alt="" />
                            <p>Samosa <br /> Chat</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={NutellaParatha} alt="" />
                            <p>Nutella <br />  Paratha</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetableOmlette} alt="" />
                            <p>Vegetable <br /> Omlette</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetablePasta} alt="" />
                            <p>Vegetable <br /> Pasta</p>
                        </div>
                    </div>


                </div>

                <div className="menucontentimg2" style={{ borderTopLeftRadius: "120px" }}>
                    <img src={DesiMasalaOmlette} alt="" />
                </div>

            </div>

            {/* page 3 */}

            <div className="background-menu3">

                <div className="menucontentimg3">
                    <img src={Samosa} alt="" />
                </div>

                <div className="menucontent3" ref={button2Ref}  >
                    <h4>ALL DAY SNACK</h4>
                    <hr />

                    <h1 id="banner_title" >Samosa <br /> Chaat With <br />  Sauces</h1>

                    <p>Lorem ipsum dolor sit amet consectetur. In odio tincidun pellentesque <br />
                        ellentesque scelerisque neque amet. Quam felis sit diam at massa mo <br />
                        rbi cras. Adipiscing tempus a ull amcorper odio sed.</p>
                    <button>Order Online</button>


                    {/* <Slider {...settings}  > */}
                    <div className="slideimage">


                        <div className="photo" onClick={myFunctionCate}>
                            <img src={Samosa} alt="" />
                            <p>Samosa Chat <br /> With Sauces</p>
                        </div>


                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetablePasta} alt="" />
                            <p>Vegetable <br /> Pasta</p>
                        </div>



                        <div className="photo" onClick={myFunctionCate} >
                            <img src={VegetableOmlette} alt="" />
                            <p>Vegetable <br /> Burji</p>
                        </div>



                        <div className="photo" onClick={myFunctionCate}>
                            <img src={NutellaParatha} alt="" />
                            <p>Spicy <br /> Chicken</p>
                        </div>


                    </div>
                    {/* </Slider> */}
                </div>

            </div>


            {/* PAGE 4 */}

            <div className="background-menu4">


                <div className="menucontent2" ref={button3Ref}>
                    <h4>FILLI SIGNATURE'S</h4>
                    <hr />

                    <h1 id="banner_title">Creamy <br /> Mango <br /> Milkshake </h1>

                    <p>Lorem ipsum dolor sit amet consectetur. In odio tincidun pellentesque <br />
                        ellentesque scelerisque neque amet. Quam felis sit diam at massa mo <br />
                        rbi cras. Adipiscing tempus a ull amcorper odio sed.</p>
                    <button>Order Online</button>

                    <div className="slideimage">


                        <div className="photo" onClick={myFunctionCate}>
                            <img src={Samosa} alt="" />
                            <p>Samosa Chat <br /> With Sauces</p>
                        </div>


                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetablePasta} alt="" />
                            <p>Vegetable <br /> Pasta</p>
                        </div>



                        <div className="photo" onClick={myFunctionCate} >
                            <img src={VegetableOmlette} alt="" />
                            <p>Vegetable <br /> Burji</p>
                        </div>



                        <div className="photo" onClick={myFunctionCate}>
                            <img src={NutellaParatha} alt="" />
                            <p>Spicy <br /> Chicken</p>
                        </div>


                    </div>
                    {/* <div className="slideimage" style={{ justifyContent: "space-between", paddingTop: "15px" }}>

                        <div className="photo2" onClick={myFunctionCate}>
                            <img src={MilkShake} alt="" />
                            <p> Creamy <br /> Mango <br /> Milkshake </p>
                        </div>

                        <div className="photo2" onClick={myFunctionCate}>
                            <img src={BottleMilkShake} alt="" />
                            <p>Bottle <br /> MilkShake</p>
                        </div>

                        <div className="photo2" onClick={myFunctionCate}>
                            <img src={PouchFilliTea1} alt="" />
                            <p>Pouch <br /> Filli Tea</p>
                        </div>

                        <div className="photo2" onClick={myFunctionCate}>
                            <img src={PouchFilliTea2} alt="" />
                            <p>Pouch <br /> Filli Tea</p>
                        </div>


                    </div> */}


                </div>

                <div className="menucontentimg4">
                    <img src={Samosa} alt="" />
                </div>

            </div>

            {/* PAGE # 5 */}

            <div className="background-menu5">

                <div className="menucontentimg5" >
                    <img src={VegetablePasta} alt="" />
                </div>

                <div className="menucontent5" ref={button4Ref}>
                    <h4>LOADED FRIES</h4>
                    <hr />
                    <h1>Loaded <br /> Cheese Fries </h1>
                    <p>Lorem ipsum dolor sit amet consectetur. In odio tincidun pellentesque <br />
                        ellentesque scelerisque neque amet. Quam felis sit diam at massa mo <br />
                        rbi cras. Adipiscing tempus a ull amcorper odio sed.</p>
                    <button>Order Online</button>

                    <div className="slideimage">

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={Samosa} alt="" />
                            <p>Samosa <br /> Chat</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={NutellaParatha} alt="" />
                            <p>Nutella <br />  Paratha</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetableOmlette} alt="" />
                            <p>Vegetable <br /> Omlette</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetablePasta} alt="" />
                            <p>Vegetable <br /> Pasta</p>
                        </div>

                    </div>

                </div>

            </div>

            {/* PAGE 6 */}


            <div className="background-menu2">


                <div className="menucontent2" ref={button5Ref}>
                    <h4>PIZZA & FOODLES</h4>
                    <hr />
                    <h1>Pepperoni  <br /> Pizza</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. In odio tincidun pellentesque <br />
                        ellentesque scelerisque neque amet. Quam felis sit diam at massa mo <br />
                        rbi cras. Adipiscing tempus a ull amcorper odio sed.</p>
                    <button>Order Online</button>


                    <div className="slideimage">


                        <div className="photo" onClick={myFunctionCate}>
                            <img src={Samosa} alt="" />
                            <p>Samosa <br /> Chat</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={NutellaParatha} alt="" />
                            <p>Nutella <br /> Paratha</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetableOmlette} alt="" />
                            <p>Vegetable <br /> Omlette</p>
                        </div>

                        <div className="photo" onClick={myFunctionCate}>
                            <img src={VegetablePasta} alt="" />
                            <p>Vegetable <br /> Pasta</p>
                        </div>
                    </div>


                </div>

                <div className="menucontentimg2" style={{ borderTopLeftRadius: "100px" }}>
                    <img src={DesiMasalaOmlette} alt="" />
                </div>

            </div>
            <ScrollToTop smooth />

            <Contact></Contact>






        </>
    );
}





export default MenuPage;