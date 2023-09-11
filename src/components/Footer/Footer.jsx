import { useEffect } from 'react'
// import icon react 
import {FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore } from 'react-icons/md'
import {RxTwitterLogo } from 'react-icons/rx'
import {FiInstagram } from 'react-icons/fi'
import {FiFacebook } from 'react-icons/fi'
import {AiOutlineYoutube } from 'react-icons/ai'
import {BsWhatsapp } from 'react-icons/bs'
import {FiPhoneCall } from 'react-icons/fi'
import {FiChevronRight } from 'react-icons/fi'

// inport css style
import './footer.css'

// import video untuk halaman footer  
import video2 from '../../assets/img/water2.mp4'

// import aos 
import Aos from 'aos'
import 'aos/dist/aos.css'

// ==========================================================================
export default function Footer(){


    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
      
        <section className='Footer'>
                <div className='videoDiv'>
                         <video className='footerVideo' src={video2} loop autoPlay muted type="video/mp4">
                         </video>
                </div>

                <div className="secContent container section">
                    <div className="contactDiv flex">
                        <div data-aos="fade-up" className="text">
                            <small>KEEP IN TOUCH</small>
                            <h2>Travel With Us</h2>
                        </div> 

                        <div className="inputDiv flex">
                            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                            <button data-aos="fade-up" className='btn flex' type='submit'>
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

                            <div data-aos="fade-up" className="footerParagraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus minima ab. Architecto, minus id?
                            </div>
                            <div data-aos="fade-up" data-aos-duration="6000" className="footerSocials">
                                <RxTwitterLogo className='icon' />
                                <FiInstagram className='icon' />
                                <FiFacebook className='icon' />
                                <AiOutlineYoutube className='icon' />
                                <BsWhatsapp className='icon' />
                                <FiPhoneCall className='icon' />
                                </div>
                        </div>


                        <div className="footerLinks grid">
                        {/*  GROUP ONE FOR LINKS  */}
                            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                                <span className='groupTitle'>
                                    OUR AGENCY
                                </span>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Services
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Insurance
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Agency
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Tourism
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Payment
                                </li>

                            </div>


                        {/*  GROUP TWO FOR LINKS  */}
                            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                                <span className='groupTitle'>
                                    PARTNERTS
                                </span>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Booking
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Rentcars
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    HostelWorld
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Trivago
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    TripAdvisor
                                </li>

                            </div>


                        {/*  GROUP THREE FOR LINKS  */}
                            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                                <span className='groupTitle'>
                                 TOUR
                                </span>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    London
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    California
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Indonesia
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Europe
                                </li>

                                <li className="footerList flex">
                                    <FiChevronRight className='icon' />
                                    Oceania
                                </li>

                            </div>
                        </div>

                        <div className="footerDiv flex">
                            <small>Best Travel Website Theme</small>
                            <small>Copyright Reserved- Designed by <a href="">Sigimatika</a></small>
                        </div>
                    </div>


                </div>
        </section>
    )
}