import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Rodape from './components/Rodape'
import Pagina from './components/Pagina';

const pagina2 = () => {
  return (
    <>
      <Pagina/>
        <h1>Página 2</h1>
        <Rodape/>
    </>
  )
}

export default pagina2
