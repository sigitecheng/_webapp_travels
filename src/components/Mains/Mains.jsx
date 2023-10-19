 import {useEffect} from 'react'

// import icon 
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FcViewDetails } from 'react-icons/fc';
// import {GiTeePipe } from 'react-icons/gi'

//import tools 
import './mains.css'

// import aos 
import Aos from 'aos'
import 'aos/dist/aos.css'

// import image 
import img from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'
import img5 from '../../assets/img/5.jpg'
import img6 from '../../assets/img/6.jpg'

// https://picsum.photos/id/237/200/300


// ===========================================================

export default function Mains(){

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

const Data = [
    {
        id: 1,
        imgSrc: img,
        // https://picsum.photos/id/105/200/300
        destTitle: 'Kuta Beach',
        locations : 'Bali',
        grade : 'Cultural Relax',
        fee : '$--',
        descriptions : 
        'Kuta Beach stands as an illustrious destination cherished for its awe-inspiring natural splendor. This coastal gem boasts an extensive stretch of powdery white sand, delivering consistent, surf-worthy waves, and presenting mesmerizing sunsets, rendering Kuta Beach a haven for both avid surfers and sun-worshippers. Furthermore, Kuta Beach pulsates with a dynamic nightlife scene, as it is adorned with an array of seaside restaurants, bars, and nightclubs. Amidst the coastal charm, visitors have the opportunity to immerse themselves in the rich local culture, with several Balinese temples, such as the esteemed Pura Petitenget, gracing the nearby landscape. Notably, Kuta Beach is a versatile destination that caters to a wide spectrum of interests and '
    },
    {
        id: 2,
        imgSrc: img2, 
        destTitle: 'Pulau Seribu',
        locations : 'Jakarta',
        grade : 'Cultural Relax',
        fee : '$--',
        descriptions :
        'Pulau Seribu, also known as the Thousand Islands, is an idyllic tropical archipelago situated in the Bay of Jakarta, Indonesia. Among its many attractions, the archipelago hosts several shark conservation programs and sanctuaries aimed at protecting and preserving shark populations in the Indonesian waters. These sanctuaries provide valuable insights into the vital role of sharks in marine ecosystems, as well as opportunities for visitors to observe and learn about these magnificent creatures up close. Pulau Seribus dedication to shark conservation aligns with its commitment to maintaining the delicate balance of marine life, making it a unique destination for those interested in both marine conservation and the natural beauty of Indonesias coastal environment'
        }
    ,{
        id: 3,
        imgSrc: img3, 
        destTitle: 'Nihi Sumba',
        locations : 'Sumba',
        grade : 'Cultural Relax',
        fee : '$--',
        descriptions : 
        'Sumba in Indonesia, is a world-renowned and exclusive luxury resort that has consistently been ranked among the best in the world. Set amidst the breathtaking natural beauty of Sumba, the resort offers a unique blend of pristine beaches, lush rainforests, and traditional Sumbanese culture. Guests can stay in sumptuous villas overlooking white sandy beaches and the rolling waves of the Indian Ocean. The resort also emphasizes sustainable and community-driven practices, making it not only a luxurious destination but also a socially and environmentally responsible one. With its unparalleled beauty and commitment to conservation, Nihi Sumba provides an extraordinary and unforgettable experience for its visitors'
    },
    {
        id: 4,
        imgSrc: img4, 
        destTitle: 'Jimbaran Beach',
        locations : 'Bali',
        grade : '',
        fee : '$--',
        // descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
        descriptions : 
        'Jimbaran Beach, situated on the southwestern coast of Bali, is renowned for its picturesque coastal beauty and tranquil atmosphere. With its soft, golden sands and gentle waves, it provides an ideal setting for a relaxing beach day. What sets Jimbaran apart is its famous seafood dining scene, where seafood restaurants line the shoreline, offering delectable fresh catches of the day, making it a perfect place to savor a sumptuous meal by the sea. Additionally, the beach is celebrated for its mesmerizing sunsets, casting a warm and romantic glow over the bay, making it a popular choice for those seeking both culinary and natural delights'
    },
    {
        id: 5,
        imgSrc: img5, 
        destTitle: 'Maluk Beach',
        locations : 'Sumbawa',
        grade : '',
        fee : '$--',
        // descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
        descriptions : 
        'Maluk Beach, located in Sumbawa, Indonesia, is a serene coastal haven known for its crystal-clear waters and gentle waves. This tranquil beach is a popular destination for both swimming and water sports, offering a relaxing atmosphere and beautiful natural surroundings. Visitors can unwind on the soft, sandy shores, take a dip in the calm sea, and enjoy the peaceful ambiance that Pantai Maluk provides. Its an ideal spot for those seeking a tranquil beach escape away from the more crowded tourist areas in Indonesia,  spot for those seeking a tranquil beach escape away from the more crowded tourist areas in Indonesia,  spot for those seeking '
    },
    {
        id: 6,
        imgSrc: img6, 
        destTitle: 'Parangtritis Beach',
        locations : 'Yogyakarta',
        grade : '',
        fee : '$--',
        // descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
        descriptions : 
        'Pantai Parangtritis, located on the southern coast of Yogyakarta, Indonesia, region. Renowned for its vast expanse of dark volcanic sands, powerful waves, and stunning sunsets, Parangtritis offers a blend of natural beauty and Javanese culture. Visitors can witness the strong cultural influence as they explore the beach, with opportunities to take a horse-drawn carriage ride (dokar), visit the mystical Parangtritis Cave, or observe traditional rituals at the beach. The turbulent waves make it a popular spot for experienced surfers, while its cultural significance adds a unique dimension to the beach experience, making it a must-visit destination in Yogyakarta'
    },
    
];

// ============================================================

    return(

        <section className='Mains container section'>
                <div className="secTitle">
                    <h3 data-aos="fade-right" data-aos-duration="3000" className='title'>
                        Most Viewed Destinations 
                    </h3>
                </div>

                <div className="secContent grid">
                    {/* <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia?</h1> */}
                    {
                        Data.map(({id, imgSrc, destTitle, locations, grade, fee, descriptions}) => { 
                            return(
                            <div data-aos='fade-up' key={id} className='singleDestination'>
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{locations}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                            <h5>{fee}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{descriptions}</p>
                                    </div>

                                    <button className='btn flex'>
                                    DETAILS<FcViewDetails className='icon'/>  
                                    </button>

                                </div>
                            </div>    
                        )})
                    }
                </div>
           
        </section>
    );
  
}