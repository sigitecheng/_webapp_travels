
// import icon react 
import {FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore } from 'react-icons/md'
import {RxTwitterLogo } from 'react-icons/rx'
import {FiInstagram } from 'react-icons/fi'
import {FiFacebook } from 'react-icons/fi'
import {AiOutlineYoutube } from 'react-icons/ai'
import {BsWhatsapp } from 'react-icons/bs'
import {FiPhoneCall } from 'react-icons/fi'

// inport css style
import './footer.css'

// import video untuk halaman footer  
import video2 from '../../assets/air.mp4'



// ==========================================================================
export default function Footer(){
    return(
      
        <section className='Footer'>
                <div className='videoDiv'>
                         <video className='footerVideo' src={video2} loop autoPlay muted type="video/mp4">
                         </video>
                </div>

                <div className="secContent container">
                    <div className="contactDiv flex">
                        <div className="text">
                            <small>KEEP IN TOUCH</small>
                            <h2>Travel With Us</h2>
                        </div> 

                        <div className="inputDiv flex">
                            <input type="text" placeholder='Enter Email Address' />
                            <button className='btn flex' type='submit'>
                              Send <FiSend className='icon'/>
                            </button>
                        </div>
                    </div>


                    <div className="footerCard flex">
                        <div className="footerIntro flex">
                            <div className="logoDiv">
                                <a href="" className='logo flex'>
                                    <MdOutlineTravelExplore className='icon' />Travels
                                </a>
                            </div>

                            <div className="footerParagraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus minima ab. Architecto, minus id?
                            </div>

                            <div className="footerSocials">
                                <RxTwitterLogo className='icon' />
                                <FiInstagram className='icon' />
                                <FiFacebook className='icon' />
                                <AiOutlineYoutube className='icon' />
                                <BsWhatsapp className='icon' />
                                <FiPhoneCall className='icon' />
                                </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}