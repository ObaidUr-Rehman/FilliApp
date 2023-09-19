import React from 'react';
import "../components/Blog.css";
import Contact from "./Contact";

import Blogpic1 from "../images/Blogpic1.png";
import Blogpic2 from "../images/Blogpic2.png";
import Blogpic3 from "../images/Blogpic3.png";
import Blogpic4 from "../images/Blogpic4.png";
import $ from "jquery";




$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.blog-backg2').addClass('topauto');
    } else {
        $('.blog-backg2').removeClass('topauto');
    }
});





const Blog = () => {
    return (
        <>
            <div className="blog-backg1">
                <h4>OUR BLOGS</h4>
                <h1>Writings From <br />
                    <span>  FiLLi Café  </span></h1>
                <button>Explore More</button>
            </div>

            <div className="blog-backg2">

                <div className="content-blog2">
                    <h4>TRENDING</h4>
                    <hr />
                    <h1>Lifestyle</h1>
                </div>

                <div className="blogallimg">

                    <div className="blogimage1">

                        <div className="blog1">
                            <img src={Blogpic3} alt="" height={500} />

                            <div className="contblog1">
                                <h2>One Month <br /> Sugar Detox</h2>
                                <button>Read More 📖</button>
                            </div>

                        </div>

                        <div className="blog2">
                            <img src={Blogpic4} alt="" height={500} />

                            <div className="contblog2">
                                <h2>Wake Up and <br /> Smell Your Tea</h2>
                                <button>Read More 📖</button>
                            </div>

                        </div>

                        <div className="blog2">
                            <img src={Blogpic2} alt="" height={500} />

                            <div className="contblog2">
                                <h2>Your Mid Night <br /> Snacks </h2>
                                <button>Read More 📖</button>
                            </div>

                        </div>

                    </div>

                    <div className="blogimage1" style={{ paddingLeft: "35px" }}>

                        <div className="blog2">
                            <img src={Blogpic3} alt="" height={500} />

                            <div className="contblog1" style={{ left: "70px" }}>
                                <h2>One Month <br /> Sugar Detox</h2>
                                <button>Read More 📖</button>
                            </div>

                        </div>

                        <div className="blog2">
                            <img src={Blogpic4} alt="" height={500} />
                            <div className="contblog2">
                                <h2>Wake Up and <br /> Smell Your Tea</h2>
                                <button>Read More 📖</button>
                            </div>
                        </div>

                        <div className="blog1">
                            <img src={Blogpic2} alt="" height={500} />
                            <div className="contblog2" style={{ left: "100px" }}>
                                <h2>Your Mid Night <br /> Snacks </h2>
                                <button>Read More 📖</button>
                            </div>
                        </div>

                    </div>


                    <div className="blogimage1">

                        <div className="blog1">
                            <img src={Blogpic3} alt="" height={500} />
                            <div className="contblog1">
                                <h2>One Month <br /> Sugar Detox</h2>
                                <button>Read More 📖</button>
                            </div>
                        </div>

                        <div className="blog2">
                            <img src={Blogpic4} alt="" height={500} />
                            <div className="contblog2">
                                <h2>Wake Up and <br /> Smell Your Tea</h2>
                                <button>Read More 📖</button>
                            </div>

                        </div>

                        <div className="blog2">
                            <img src={Blogpic2} alt="" height={500} />
                            <div className="contblog2">
                                <h2>Your Mid Night <br /> Snacks </h2>
                                <button>Read More 📖</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <Contact></Contact>





        </>
    )
}

export default Blog