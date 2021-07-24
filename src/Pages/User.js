import React,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import Login, { adminUser } from '../Components/Login';
import Navbar from '../Components/Navbar/Index'

let abc="";
const User = () => {
	 const[state,setState]=useState("");
	
	const onChangePassword=(e)=>{
		e.preventDefault();
		setState("ChangePassword");
	}
	const onLogOut=(e)=>{	
		e.preventDefault();
		
		setState("LogOut");

	}
	const onChangePasswordClicked=(e)=>{
		setState('ChangePasswordClicked');
	}

	

return (
	<>
	
	{state===''?
	<>
	
    <div className="card">
      <div className="card-body">
		  <h3>User Details</h3>
			<form className="form-inline">
						<div className="form-group">
							<label className="sr-only" htmlFor="email">Email address:</label>
							<input type="email" readOnly value={adminUser.email} className="form-control" id="email"/>
						</div>
						<div className="form-group">
							<label className="sr-only" htmlFor="pwd">New Password:</label>
							<input type="password" readOnly value={adminUser.password} className="form-control"  id="pwd"/>
						</div>				
						<br/>
						<button className="btn btn-default" onClick={onChangePassword}>Change Password</button>
						<button className="btn btn-default" onClick={onLogOut}>Logout</button>
				</form>
      </div>
    </div>
	</>
	:""
}

  {state==="ChangePassword"?  
  <>
  
  {console.log(state)}
    <div className="card">
      <div className="card-body">
	  <h3>Change Password</h3>
			<form className="form-inline">
			<div className="form-group">
					<label className="sr-only" htmlfor="email">Email address:</label>
					<input type="email" readOnly className="form-control" id="email" value={adminUser.email}/>
				</div>
				<div className="form-group">
					<label className="sr-only" htmlfor="pwd">New Password:</label>
					<input type="password" className="form-control" id="pwd"/>
				</div>
				<br/>
				<button className="btn btn-default" onClick={onChangePasswordClicked}>Save Password</button>
		</form>
      </div>
    </div>
	</>
  :""
  }

  {state==='LogOut'?
  <>  
  <Login/>
  </>
	:""
  }
	
{state==='ChangePasswordClicked'?
	<>
    <div className="card">
      <div className="card-body">
		  <h3>User Details</h3>
			<form className="form-inline">
						<div className="form-group">
							<label className="sr-only" htmlFor="email">Email address:</label>
							<input type="email" readOnly value={adminUser.email} className="form-control" id="email"/>
						</div>
						<div className="form-group">
							<label className="sr-only" htmlFor="pwd">New Password:</label>
							<input type="password" readOnly value={adminUser.password} className="form-control"  id="pwd"/>
						</div>				
						<br/>
						<button className="btn btn-default" onClick={onChangePassword}>Change Password</button>
						<button className="btn btn-default" onClick={onLogOut}>Logout</button>
				</form>
      </div>
    </div>
	</>
	:
	""}

</>	
);
};

export default User;

export {abc};
