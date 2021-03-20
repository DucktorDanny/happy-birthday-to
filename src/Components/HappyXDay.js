import React from 'react';
import { FallingEmojis } from 'falling-emojis';
import './HappyBirthday.css';

const HappyXDay = ({ type, name, emojis }) => {
   return(
      <div className='HappyBirthday'>
         <h1>Happy{ !type || type === '' ? ' birthday' : ` ${ type.trim() }` }{ !name || name === '' ? '' : ` ${ name.trim() }`}! { !emojis ? '🎂' : emojis }</h1>
         <FallingEmojis emoji={'🥳'} />
      </div>
   );
}

export default HappyXDay;