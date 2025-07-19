import React, { useEffect } from 'react'
import Header from './Header'

// import { useNavigate } from 'react-router-dom';
import FirstContainer from './FirstContainer';
import Secondcontainer from './Secondcontainer';
import GptSearch from './GptSearch';
import useMoviesApi from '../Utils/useMoviesApi';
import { useDispatch, useSelector } from 'react-redux';


const Browse = () => {


  useMoviesApi()
  const Showgpt = useSelector((store) => store.gpt.Showgpt)


  return (
    
    <div> 
       
          <Header />
        
         {Showgpt ? ( <GptSearch/> )
      : (
         <>
      <div className='Fisrtcontainer'>

        <FirstContainer/>

      </div>

      <div className="Secondcontainer">

        <Secondcontainer/>

      </div>
      </>
      )}

    </div>
  )
}

export default Browse