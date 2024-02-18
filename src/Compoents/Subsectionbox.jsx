import React from 'react'
import Report from '../assets/report.png'
import Economey from '../assets/e.png'
import Metrics from '../assets/m.png'
import './Subsection.css'
function Subsection(){

    let data=[{
        id:1,
        img:Report,
        heading:"Reporting",
        paragraph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusdam nesciunt? Consectetur saepe dignissimos, mollitia animi exercitationem cum aut expedita amet nemo. Expedita deleniti, illo perspiciatis quos qui esse assumenda!"
    },
    {
        id:2,
        img:Economey,
        heading:"Economey",
        paragraph:"Lorem it is about econoemy consectetur adipisicing elit. Voluptates, quibusdam nesciunt? Consectetur saepe dignissimos, mollitia animi exercitationem cum aut expedita amet nemo. Expedita deleniti, illo perspiciatis quos qui esse assumenda!"
    },
    {
        id:3,
        img:Metrics,
        heading:"Metrics",
        paragraph:"Lorem it is about a metrics of a company adipisicing elit. Voluptates, quibusdam nesciunt? Consectetur saepe dignissimos, mollitia animi exercitationem cum aut expedita amet nemo. Expedita deleniti, illo perspiciatis quos qui esse assumenda!"
    },
   
]

    return(
        <>
        <div className="maincontainer">
        <h1 className='subheading'>Our <span>Services</span></h1>
          <div className="subcontainer">
            
            {data.map((item)=>(

                
                    <div className="cards" key={item.id}>    
                    <img src={item.img} alt="" />
                    <h2>{item.heading}</h2>
                    <p>{item.paragraph}</p>
                
                </div>
            ))}
                
            </div>  
            </div>
        
        </>
    )
}

export default Subsection;