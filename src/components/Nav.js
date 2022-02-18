import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import React from 'react'

const Nav = ({libStatus , setLibStatus}) => {
  return (
    <nav className='nav'>
        <h1>Wave</h1>
        <button onClick={()=> setLibStatus(!libStatus)}>Library <FontAwesomeIcon icon={faMusic} /> </button>
    </nav>
  )
}
export default Nav;