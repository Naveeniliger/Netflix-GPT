import React from 'react'
import { useSelector } from 'react-redux'
import GptCards from './GptCards'




const GptMovieSuggetions = () => {


  const { movieNames, movieResults } = useSelector((store) => store.gpt)
  if (!movieNames) return null
  if (!movieResults) return null

return (

  <div className='box'>

    <GptCards/>
 
  </div>
)


}

export default GptMovieSuggetions