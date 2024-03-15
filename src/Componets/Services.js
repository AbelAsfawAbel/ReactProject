import React from 'react'

import Card from './Card'
import Data from './Dta'

const Services = () => {
  return (
    <>
    <h1>Our Services</h1>
    <div className='services'>
      {Data.map((values)=>{
        return(
          <Card
          title={values.title}
          image={values.image}
          description={values.description}
          button={values.button}
          />

        )
      })}
    
      
    </div>
   
    
    </>
  )
}

export default Services
