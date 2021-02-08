import React from 'react';
import { FallingEmojis } from 'falling-emojis';
import './HappyBirthday.css';

const HappyBirthday = ({ name }) => {
   return(
      <div className='HappyBirthday'>
         <h1>Happy Birthday{ name.trim() === '' ? '' : ` to ${ name.trim() }`}! 🎂</h1>
         <FallingEmojis emoji={'🥳'} />
      </div>
   );
}

export default HappyBirthday;