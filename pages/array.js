import React from 'react'
import Pagina from './components/Pagina'


const array = () => {

  const carros = ['Opala', 'Classic', 'Ka', 'Omega', 'Fuscão']

  return (
    <Pagina titulo="Array">

      {carros.map(item=>(
        <p>{item}</p>
      ))}

    </Pagina>
  )
}

export default array