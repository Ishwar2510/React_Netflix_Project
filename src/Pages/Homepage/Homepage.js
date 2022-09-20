import React, { useState } from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Featured from '../../Components/featured/Featured'
import List from '../../Components/List/List'
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';



function Homepage({setWatch,restart,register}) { 
  const[count,setCount]=useState(0);



  const[data,setdata]=useState([
    {title:"Latest & Trending",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Popular show",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Popular Movie",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Hindi Movies",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Latest & Trending",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Popular show",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Popular Movie",card:[1,2,3,4,5,6,7,8,9,10]},
    {title:"Hindi Movies",card:[1,2,3,4,5,6,7,8,9,10]},])
  const [category,setCategory]=useState(data)
  function leftArrow(){
    

  }
  function rightArrow(){

  }
  return (
    <div className="home">
    <Navbar register={register} restart={restart}/>
    <Featured type="movie" setWatch={setWatch} />

    <div style={{display:"flex" ,flexDirection:"column", position:"relative"}}>
    {
      category.map((elem,index)=>{
        return (
          
            <div key={index}>
            <h3 style={{color:'white',marginLeft:'85px'}}>{elem.title}</h3>
            <div style={{display:"flex" ,flexDirection:"row", }}>
            <button style={{background:"none"}} onClick={leftArrow}><ArrowBackIosNewOutlinedIcon style={{width:'30px',height:"120px",color:"white"}}/></button>
            <div  style={{display:"flex" ,flexDirection:"row",overflow:"hidden" ,width:"100%"}}>
              <Link to ='/watch'><List card={elem.card} setWatch={setWatch}/></Link>
            </div>
            <button style={{background:"none"}} onClick={rightArrow}><ArrowForwardIosOutlinedIcon style={{width:'30px',height:"120px",color:"white"}}/></button>
            </div>
            </div>
            
          
        )
      })
    }

    </div>
    <div>
      <h3>Footer</h3>
    </div>
    </div>
    
  )
}

export default Homepage