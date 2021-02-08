import { useState, useEffect } from 'react';
import HappyBirthday from './Components/HappyBirthday.js';
import './App.css';

const nameByPath = window.location.pathname.replace('/', '');
const App = () => {
	return(
		<div className='App'>
			<HappyBirthday name={ nameByPath } />
		</div>
	);
}

export default App;
