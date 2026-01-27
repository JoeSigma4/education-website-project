import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu-icon.png";
function Navbar () {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setDarkMode(true) : setDarkMode(false);
    });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }
  return (
    <nav className={`container ${darkMode ? "dark-nav" : ""}`}>

      <img src= {logo} alt='' className='logo'/>

      <ul className={menuOpen ? "" : "hide-menu"}>
         <li><Link to="hero" smooth = {true} offset={0} duration={500}>Home</Link></li>
         <li><Link to="programs" smooth = {true} offset={-260} duration={500}>Program</Link></li>
         <li><Link to="campus" smooth = {true} offset={-150} duration={500}>Campus</Link></li>
         <li><Link to="about" smooth = {true} offset={-260} duration={500}>About Us</Link></li>
         <li><Link to="testimonials" smooth = {true} offset={-260} duration={500}>Testimonial</Link></li>
         <li><Link to="contact" smooth = {true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;
