import React from 'react'
import data from "./Data.json";

const Card = () => {
  return (
    <>
        {
            data.map(({title,image,time,location,desc,company})=>{
                return(
                    <div className='card-container'>
                
                <div className='card-content'>
                <div className='card-title'>
                  <h3> {title} </h3> 
                  <p>{time}</p></div>
              
                <div className='card-body'>
                   <p>{location}</p> 

                   <p>{desc}</p>
                   <h5> {company}</h5>
                </div>
                <div className='image-container'>
                    <img src={image} alt=''></img>
                </div>
              </div>
                <div className='btn'>
                    <button>
                        <a>View More</a>
                    </button>
                </div>
                </div>
                )
            })
        }
   
     
    </>
  )
}

export default Card
