import React from 'react'
import { useSelector } from 'react-redux'



const Secondcontainer = () => {

   const moviesapi = useSelector((state)=> state.movies.Moviesdata)
  //  console.log(moviesapi)

  const all = moviesapi?.movies?.map((lists)=> lists?.list) || []
  const allarrays = all.flat()
  console.log(allarrays)


  return (
    <div className='card'>
          {allarrays.map((card ,indx)=> 
         <div key={card.title} className='cards'>
          <img className='cardimg' src={card.image} alt="Movie Image" />
          <h3 className='cardtitle'>{card.title}</h3>
          {/* <p className='cardcategories'>[{card.categories.join(", ")}]</p> */}
         </div>
         )}
    </div>
  )
}

export default Secondcontainer