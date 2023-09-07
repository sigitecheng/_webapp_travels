// import {useState} from 'react'

// import icon 
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FcViewDetails } from 'react-icons/fc';
// import {GiTeePipe } from 'react-icons/gi'

//import tools 
import './mains.css'


// import image 
import img from '../../assets/img/1.jpg'
// import img from '../../assets/img/2.jpg'


// ===========================================================

export default function Mains(){

const Data = [
    {
        id: 1,
        imgSrc: img,
        // https://picsum.photos/id/105/200/300
        destTitle: 'Jakarta',
        locations : 'Tanggerang',
        grade : 'Cultural Relax',
        fee : '$500',
        descriptions : 'Animi nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
    },
    // {
    //     id: 2,
    //     imgSrc: img, 
    //     destTitle: 'Jakarta',
    //     locations : 'Jakarta',
    //     grade : 'A',
    //     fee : '$500',
    //     descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
    // }
    // ,{
    //     id: 3,
    //     imgSrc: img3, 
    //     destTitle: 'Jakarta',
    //     locations : 'Jakarta',
    //     grade : 'A',
    //     fee : '$500',
    //     descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
    // },{
    //     id: 4,
    //     imgSrc: img4, 
    //     destTitle: 'Jakarta',
    //     locations : 'Jakarta',
    //     grade : 'A',
    //     fee : '$500',
    //     descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
    // },{
    //     id: 5,
    //     imgSrc: img5, 
    //     destTitle: 'Jakarta',
    //     locations : 'Jakarta',
    //     grade : 'A',
    //     fee : '$500',
    //     descriptions : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea optio autem aperiam incidunt fuga deleniti obcaecati unde cum sint, animi accusamus iusto eos dolorum molestiae consequatur nulla eum quisquam sunt totam. Tempora modi provident, ducimus nesciunt omnis animi velit eligendi fuga aliquid voluptatum nisi? Natus voluptatem quidem iusto nihil. Quia porro aperiam nobis enim, beatae consectetur explicabo quisquam voluptas esse itaque sapiente est maiores, at natus dolorum, rerum ab atque alias numquam maxime libero. Quos incidunt veritatis suscipit earum nobis vitae nostrum tempore nisi delectus perferendis iusto saepe corporis, iure eum quibusdam accusantium, quia magnam quas? Nihil, rerum',
    // }
];

// ============================================================

    return(

        <section className='Mains container section'>
                <div className="secTitle">
                    <h3 className='title'>
                        Most Viewed Destinations 
                    </h3>
                </div>

                <div className="secContent grid">
                    {/* <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, officia?</h1> */}
                    {
                        Data.map(({id, imgSrc, destTitle, locations, grade, fee, descriptions}) => { 
                            return(
                            <div key={id} className='singleDestination'>
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
                                    Details<FcViewDetails className='icon'/>  
                                    </button>

                                </div>
                            </div>    
                        )})
                    }
                </div>
           
        </section>
    );
  
}