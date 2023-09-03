// import React from 'react'
import './navbar.css'
import { GiTeePipe } from 'react-icons/gi'

const navbar = () => {
    return(
        <section className='navbarSection'> 
            <header className='header flex'>

                <div className='logoDiv'>
                    <a href="#navbar" className='logo'>
                    <h1><GiTeePipe className='icon' />  Sigitmatika Air Solutions</h1>
                    {/* <h1>Sigitmatika Air Solutions</h1> */}
                    </a>
                </div>

                {/* <div className='navbar'>
                    <ul className='navLists flex'>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                    </ul>
                </div> */}

            </header>
        </section>
    )
}

export default navbar 