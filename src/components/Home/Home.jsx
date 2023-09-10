import {useEffect} from 'react'

import './home.css'
import video from '../../assets/air.mp4'

// import icon
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbApps} from 'react-icons/tb'


// import aos 
import Aos from 'aos'
import 'aos/dist/aos.css'
// ===================================================================================================
export default function Home() {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    // install npm i aos 

    return(
            <section className='Home'>
                <div className='overlay'></div>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            

            <div className="homeContent container">
                
                <div className='textDiv'>
                    <span data-aos="fade-up" className='smallText'>
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search Your Destinations

                    </h1>
                </div>

                <div data-aos="fade-up" className='cardDiv grid'>
                        <div className="destinationInput">
                            <label htmlFor="city">Search Your Destinations</label>
                            <div className="input flex">
                                <input type="text" placeholder='Enter The Name' />
                                <GrLocation className="icon"/>
                            </div>
                        </div>

                        <div className="dateInput">
                            <label htmlFor="date">Search Your Date</label>
                            <div className="input flex">
                                <input type="date" />
                                <GrLocation className="icon"/>
                            </div>
                        </div>

                        <div className="priceInput">
                           <div className="tabel_total flex">
                            <label htmlFor="price">Max Price</label>
                                <h3 className="total">$5000</h3>
                           </div>
                           <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                           </div>
                        </div>

                        <div className="searchOptions flex" >
                            <HiFilter className="icon" />
                            <span>More Filter</span>
                        </div>

                </div>

                <div data-aos="fade-up" className='homeFooterIcons flex'>
                    <div data-aos="fade-up" className='rightIcons'>
                        <FiFacebook className='icon' />
                        <AiOutlineInstagram className='icon' />
                        {/* <FiFacFaTripadvisorebook className='icon' /> */}
                    </div>
                   
                    <div data-aos="fade-up" className='leftIcons'>
                        <TbApps className='icon' />
                        <AiOutlineInstagram className='icon' />

                        {/* <FiFacFaTripadvisorebook className='icon' /> */}
                    </div>
                    

                </div>
            </div>
            
            </section> 
 )
}