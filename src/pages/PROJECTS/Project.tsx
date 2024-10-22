import './pro.css'
import data from './pr'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Project:React.FC=()=>{

   const defaultobject={name:data[0].name,Link:data[0].Link,img:data[0].img}

   const [pro,setpro]=useState<any>(defaultobject)


  const  PROJECTROUTE=((a:Object)=>{
    setpro(a)

  })



  



  
    return(
        <>
        <div className="BODY">
            <div className='project'>

            <div className="sidebar">
            {data.map((value,i)=>{
                return <button key={i} className='button' onClick={()=>PROJECTROUTE(value)}>{data[i].name}</button>
            })}
            </div>

            <div className="promain">
            <div className='proimg'>
            <a href={pro.Link} target="_blank" rel="noopener noreferrer"><img src={pro.img} alt='img'></img></a>
            </div>

            <div>
            {/* <p>{pro.rule}</p> */}
            </div>
            </div>
           
           </div>

        </div>
        </>
    )
}

export default Project
