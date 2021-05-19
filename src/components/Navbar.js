import React, {useState} from 'react'
import {Link} from 'gatsby'
import {FiAlignJustify} from "react-icons/fi"
import logo from "../assets/images/logo.svg"
// const Navbar = () => {
//     return (
//         <nav>
//             <FiAlignJustify />
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                     <Link to="/recipes">Recipes</Link>
//                 </li>
//                 <li>
//                     <Link to="/tags">Tags</Link>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const toggleMenu = (event) =>{
        // console.log("toggle Menu called");

        setToggle(!toggle);
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="simply recipe" />
                    </Link>
                    <button className="nav-btn" onClick={toggleMenu}><FiAlignJustify /></button>
                </div>
                <div className={`nav-links ${toggle ? 'show-links' : ''}`}>
                    <Link onClick={toggleMenu} to="/" className="nav-link" activeClassName="active-link">Home</Link>
                    <Link onClick={toggleMenu} to="/recipes" className="nav-link" activeClassName="active-link">Recipes</Link>
                    <Link onClick={toggleMenu} to="/tags" className="nav-link" activeClassName="active-link">Tags</Link>
                    <Link onClick={() => setToggle(false)} to="/about" className="nav-link" activeClassName="active-link">About</Link>
                    <div className="nav-link contact-link">
                        <Link to="/contact" className="btn">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
