import React from 'react';
import ButtonLink from './components/ButtonLink';


function ButtonLink(props) {
   return (
     <a href={rops.href} className={props.className}>
         {props.children}
     </a>
    );
}


export default ButtonLink;