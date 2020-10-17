import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";





function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
  
   
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
       
    };
useEffect(() => {
    showButton();
}, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                   
                  C<i class="fas fa-virus"></i>VID 19 
                    </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                      <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                          Home
                      </Link>  
                    </li>
                    <li className="nav-item">
                      <Link to='/checker' className='nav-link' onClick={closeMobileMenu}>
                          Checker
                      </Link>  
                    </li>
                    <li className="nav-item">
                      <Link to='/contact' className='nav-link' onClick={closeMobileMenu}>
                          Contact
                      </Link>  
                    </li>
                   

                </ul>
                {button && <Button  buttonStyle='btn--outline'>Donate</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
