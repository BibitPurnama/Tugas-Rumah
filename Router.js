import React from 'react';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import Home from './Home';
import Bio from './Bio';
import About from './About';
import App from './App'

const Router =()=>{
	return(
			<div>
				<Route path="/" exact component={App} />
				<Route path="/Home" component={Home} />
				<Route path="/Bio" component={Bio} />
				<Route path="/About" component={About} />
			</div>
		)
}

export default Router;