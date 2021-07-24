import React, {useState} from 'react';
//import './LoginForm.css';

function LoginForm({ Login , error }){
    const [details,setDetails]=useState({name:"",email:"",password:""});

    const submitHandler=e=>{
        e.preventDefault();

        Login(details);
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error!== "") ? (<div className="error">{error}</div>):""}
                <div className="form-mb3">
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input type="name" className='form-control' required name="name" id="name" onChange={e =>setDetails({...details,name:e.target.value}) } value={details.name} />
                </div>
                <div className="form-mb3">
                    <label htmlFor="email" className="form-label">Email :</label>
                    <input type="email" required className="form-control" name="email" id="email" onChange={e =>setDetails({...details,email:e.target.value}) } value={details.email}/>
                </div>
                <div className="form-mb3">
                    <label htmlFor="name" className="form-label">Password :</label>
                    <input type="password" required className='form-control' name="password" id="password" onChange={e =>setDetails({...details,password:e.target.value}) } value={details.password}/>
                </div>
                <input type="submit" className='btn btn-primary' value="LOGIN"/>
            </div>
        </form>
        
        </>
    )
}

export default LoginForm;