import {useState} from 'react'
import {GiTeePipe } from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
import './navbar.css'

export default function Navbar(){
    const [active, setActive] = useState('navBar');

    
    // function untuk togleNavbar 

    const showNavbar = () => {
        setActive('navBar activeNavbar');
    }

    // function untuk closeNavbar 
    const closeNavbar = () => {
        setActive('navBar');
      }      

    return(
        <section className='navBarSections'> 
            <header className='Header flex'>
                <div className='logoDiv'>
                    <a href="" className='logo flex'>
                    <GiTeePipe className='icon' /><h1>Travel</h1>
                    {/* <h1>Sigitmatika Air Solutions</h1> */}
                    </a>
                </div>

                <div className={active}>
                    <ul className='navlists flex'>
                        <li className='navitem '>
                            <a href="" className='navLink'>Home</a>
                        </li>

                        <li className='navitem'>
                            <a href="" className='navLink'>Packages</a>
                        </li>

                        <li className='navitem'>
                            <a href="" className='navLink'>Shop</a>
                        </li>

                        <li className='navitem'>
                            <a href="" className='navLink'>About</a>
                        </li>

                        <li className='navitem'>
                            <a href="" className='navLink'>Pages</a>
                        </li>

                        <li className='navitem'>
                            <a href="" className='navLink'>News</a>
                        </li>

                        <li className='navitem'>
                            <a href="" className='navLink'>Contacts</a>
                        </li>

                        <button className='btn'>
                            <a href="#">LOGIN</a>
                        </button>

                     <div onClick={closeNavbar} className='closeNavbar'>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                    </ul>
                </div>

                <div onClick={showNavbar} className="toggleNavbar">
                    <PiDotsNineBold className='icon'/>
                </div>
            
            </header>
        </section>
    )
}