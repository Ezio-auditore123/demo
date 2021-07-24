import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Index';

const Home = () => {

	const[state,setstate]=useState("");

	const onSelects=(e)=>{
		const selectedFood=e.target.value;
		setstate(selectedFood);
	}

return (
	<>
	
		<select className="form-select" aria-label="Default select example" onChange={onSelects}>
			<option selected> Select menu</option>
			<option value="react">Reactjs</option>
			<option value="next">Nextjs</option>
			<option value="vue">Vuejs</option>
		</select>
		

		{state==='react' ?
			<div className="card" >
				<div className="card-body">
					<h5 className="card-title">React</h5>
					<p className="card-text">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
				</div>
			</div> 
		 :""}
		{state==='next' ? 
		<div className="card" >
		<div className="card-body">
			<h5 className="card-title">Nextjs</h5>
			<p className="card-text">Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites. React documentation mentions Next.js among "Recommended Toolchains" advising it to developers as a solution when "building a server-rendered website with Node.js".[4] Traditional React apps render all their content in the client-side browser, Next.js is used to extend this functionality to include applications rendered on the server side.

The copyright and trademarks for Next.js are owned by company Vercel (previously named Zeit), which also maintains and leads the opensource development.[5]</p>
		</div>
	</div>
		:<h1></h1>}
		{state==='vue' ? 
		<div className="card" >
		<div className="card-body">
			<h5 className="card-title">Vuejs</h5>
			<p className="card-text">Vue was created by Evan You after working for Google using AngularJS in a number of projects. He later summed up his thought process: "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight."[16] The first source code commit to the project was dated July 2013, and Vue was first released the following February, in 2014</p>
		</div>
	</div>
		:<h1></h1>}
	</>
);
};

export default Home;
