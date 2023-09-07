
import './home.css'
import video from '../../assets/air.mp4'

import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
// import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


// import {FiFacFaTripadvisorebook} from 'react-icons/fi'




export default function Home() {
    
    return(
            <section className='home'>
                <div className='overlay'></div>
                <video src={video} muted autoPlay loop type="video/mp4"></video>
            

            <div className="homeContent container">
                
                <div className='textDiv'>
                    <span className='smallText'>
                        Our Packages
                    </span>
                    <h1 className='homeTitle'>
                        Search Your Goods

                    </h1>
                </div>

                <div className='cardDiv grid'>
                        <div className="destinationInput">
                            <label htmlFor="city">Search</label>
                            <div className="input flex">
                                <input type="text" placeholder='Enter The Name ....' />
                                <GrLocation className="icon"/>
                            </div>
                        </div>
                        <div className="dateInput">
                            <label htmlFor="date">Search</label>
                            <div className="input flex">
                                <input type="date" placeholder='Enter The Name ....' />
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

                <div className='homeFooterIcons flex'>
                    <div className='rightIcons'>
                        <FiFacebook className='icon' />
                        <AiOutlineInstagram className='icon' />
                        {/* <FiFacFaTripadvisorebook className='icon' /> */}
                    </div>
                   
                    <div className='leftIcons'>
                        <TbApps className='icon' />
                        <TbApps className='icon' />

                        {/* <FiFacFaTripadvisorebook className='icon' /> */}
                    </div>
                    

                </div>
            </div>
            
            </section> 
 )
}