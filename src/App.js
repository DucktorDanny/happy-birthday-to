// import { useState, useEffect } from 'react';
import HappyXDay from './Components/HappyXDay.js';
import './App.css';

const emojisKey = {
   smile: '😃',
   cake: '🎂',
   celebrate: '🥳',
   party: '🎉',
   gift: '🎁',
   heart: '❤️'
}

function getUrlVars() {
	let vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		 vars[key] = value.split('_').join(' ');
	});
	return vars;
}

const parameters = getUrlVars();

let { emojis } = parameters;
if (emojis) {
	const convertedEmojis = [];
	emojis = emojis.split(' ')
	for (let i = 0; i < emojis.length; i++) {
		if (emojisKey[emojis[i]]) {
			convertedEmojis.push(emojisKey[emojis[i]]);
		}
	}
	parameters.emojis = convertedEmojis;
}
console.log(parameters);
const App = () => {
	return(
		<div className='App'>
			<HappyXDay type={parameters.type} name={ parameters.name } emojis={ parameters.emojis } />
		</div>
	);
}

export default App;
