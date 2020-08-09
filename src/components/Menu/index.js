import React from 'react';
import {Link} from 'react-router-dom';
import silflix from '../../assets/img/silflixblue.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
   return (
     <nav className="Menu">
         <Link to='/'>
             <img className="Logo" src={silflix} alt="Logo"/>
         </Link>
         <Button as={Link} className="ButtonLink" to='/cadastro/video'>
             que doido
         </Button>
     </nav>
    );
}


export default Menu;