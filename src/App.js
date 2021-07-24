import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Task from './Pages/Task';
import User from './Pages/User';
import Navbar from './Components/Navbar/Index';
import Login, { logstate } from './Components/Login';
import { abc } from './Pages/User';

function App() {
return (
	<>	
	<>
	<Router>
		<Navbar/>
	<Switch>
	
		<Route path='/home' component={Home} />
		<Route path='/task' component={Task} />
		<Route path='/user' component={User} />
	</Switch>
	</Router>
	</>

	</>
);
}

export default App;
