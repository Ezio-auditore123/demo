import React, { useState } from 'react';
import LoginForm from './LoginForm';
import App from '../App';
import abc from '../Pages/User';

let adminUser;

function Login() {
	let passwd='admin123';
	
console.log(passwd)
	

	adminUser={
		email:"admin@admin.com",
		password:passwd
	}
	
	

	console.log(adminUser.password);
	const [user,setUser]=useState({email:"", password:""});
	const[error,setError]=useState("");

	const Login=(details)=>{
		console.log(details.email);
		if(details.email === adminUser.email && details.password===adminUser.password){
			console.log("Logged in");
			setUser({
				email:details.email,
				password:details.password
			});
			
		}
		else{
			console.log("Details does not match");
			setError("Details do not match");
		}
	}

	const Logout =()=>{
		console.log("logout");
	}

return (
	<>
	{console.log('login')}
	{console.log(abc)}
	{abc==="change"?
	passwd='abc123'
	:""
}
		{(user.email !== "") ? (
			<>
			<App />
			</>
			
		):(
			<LoginForm Login={Login} error={error}/>
		)}
			
		
	</>
);
}

export default Login;

export { adminUser };
