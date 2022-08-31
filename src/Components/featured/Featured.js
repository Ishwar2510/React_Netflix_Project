import React from 'react'
import './Featured.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Featured({type,setWatch}) {
  function watch(){
    console.log(setWatch)
    setWatch(true);
  }
  return (
    <div className='featured'>
        {
           type && (
            <div className='category'>
                <span style={{fontWeight:'bolder'}}>{(type==='movie'?"Movies":"Series")}</span>
                <select name="genre" id ="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
                </select>


            </div>
           ) 
        }
        <img  height="100%" width="100%" src="https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/the-avengers-facebook-cover.jpg"/>

        <div className='info' >

          
           <h1 style={{color:'white'}}>The Avengers</h1>
            <div className='buttons'>
                <button><PlayArrowIcon/><span onClick={watch}>Play</span></button>
                <button ><InfoOutlinedIcon/><span>Info</span></button>
            </div>
            <p style={{color:"Yellow"}}>The World is under the Thanoos Threat and its upto the Avengers to Save the World</p>


        </div>
    </div>
  )
}

export default Featured