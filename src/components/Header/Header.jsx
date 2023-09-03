// import React from 'react'
import './header.css'
// import {GiTeePipe} from 'react-icons/md'

const header = () => {
    return(
        <section className='navbarSection'> 
            <header className='header flex'>

                <div className='logoDiv'>
                    <a href="#navbar" className='logo'>
                    <h1>Travels</h1>
                    </a>
                </div>

                <div className='navbar'>
                    <ul className='navLists flex'>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>About</a>
                        </li>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                        <li className='navItem'> 
                        <a href="#" className='navlink'>Home</a>
                        </li>
                    </ul>
                </div>

            </header>
        </section>
    )
}

export default header