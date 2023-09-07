// import {useState} from 'react'
import {GiTeePipe } from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'
import './navbar.css'

export default function navBar(){
    

    // const [active, setActive] = useState('navBar');

    
    // function untuk togleNavbar 

    // const showNav = () => {
    //     setActive('navBar activeNavbar');
    // }

    // function untuk closeNavbar 
    // const removeNabvar = () => {
    //     setActive('navBar');
    // }

    return(
        <section className='navBarSections'> 
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href="" className='logo flex'>
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

                  <div className='closeNavbar'>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                    </ul>
                </div>

        
                <div className="toggleNavbar">
                    <PiDotsNineBold className='icon'/>
                </div>

                 
            </header>
        </section>
    )

}