// import React from 'react'
import './navbar.css'
import { GiTeePipe } from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
// import {CgLogIn} from 'react-icons/cg'

const navbar = () => {
    return(
        <section className='navbarSection'> 
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href="#navbar" className='logo flex'>
                    <h1><GiTeePipe className='icon' />  Travel</h1>
                    {/* <h1>Sigitmatika Air Solutions</h1> */}
                    </a>
                </div>

                <div className='navBar'>
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
                    </ul>
                </div>


                <div className='navBar'>
                        <AiFillCloseCircle className='icon'/>
                    </div>

                    <div className="togglenavbar">
                        <PiDotsNineBold className='icon'/>
                    </div>
            </header>
        </section>
    )
}

export default navbar 