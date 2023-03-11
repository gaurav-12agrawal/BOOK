import { FaQuestionCircle } from 'react-icons/fa';
import '../App.css'
function Navbar() {
    return (
        <>
            <div className="Navbar_maincontainer" >
                <div className="Navbar_left" >

                    <li className='Navbar_li'> <img src="images/logo.jpg" alt="logo" className='logo_navbar' /></li>
                    <li className='Navbar_li Name_comp' >GymEase</li>
                    <div className='Navbar_search'>
                        <input type="search" id="" name="" className='navbar_search_inp' placeholder='Find Your Gym...'></input>
                        <button className='navbar_search_button' >Search</button>
                    </div>



                </div>
                <div className="Navbar_right" >

                    <li className='Navbar_li li_item'>Home</li>
                    <li className='Navbar_li li_item'>Privacy & Policy</li>
                    <li className='Navbar_li li_item faq_unhide'><FaQuestionCircle /></li>
                    <p className='Navbar_hide_faq'> FAQ's</p>
                    <li className='Navbar_li li_item'>About Us</li>
                    <li className='Navbar_li li_item'>Contact Us</li>
                    <li className='Navbar_li'> <button className='Login_button_navbar' > Login / Signup</button>  </li>

                </div>
            </div>
        </>
    );
}

export default Navbar;