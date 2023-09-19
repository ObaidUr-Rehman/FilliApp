import React from 'react';
import $ from "jquery";
import Logo from "../images/Logo.png";
import { NavLink } from 'react-router-dom';




$("#sads").click(function () {
    $('#ss').removeClass('shrink');
});

const Navbar = () => {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.main').addClass('shrink');
        } else {
            $('.main').removeClass('shrink');
        }
    });

    const handleClick = (e) => {
        e.preventDefault();
        $('#ss').removeClass('shrink');
    }

    return (
        <>

            <div className="main" id='ss'>
                <div className='main-nav-wrapper'>
                    <div className="first">
                        <ul className='nav-menu'>

                            <NavLink to='/'>Home</NavLink>

                            <NavLink to='/#about'>About</NavLink>

                            <NavLink to='/CareerPage'>Careers</NavLink>

                            <NavLink to='/Blog'>Blog</NavLink>

                            <NavLink to='/Contact'>Contact</NavLink>


                        </ul>
                    </div>

                    <div className="second">
                        {/* <h1 style={{ color: "#E85235", fontFamily: "Brush Script MT", paddingRight: "60px", fontSize: "4.0em" }}>Filli</h1> */}
                        <img src={Logo} alt="" height={50} width={100} />
                    </div>




                    <div className="third">
                        {/* <button>Explore Our Menu</button> */}

                        <NavLink to='/MenuPage'>Explore Our Menu</NavLink>

                        <NavLink to='/Catering'>Catering</NavLink>



                    </div>
                </div>


                <div className='humbrgr' id='sads' onClick={handleClick}>
                    Menu 📝
                </div>

            </div>



        </>
    )
}

export default Navbar