import React from 'react';
//import {Redirect} from 'react-router'

function SignUp(props) {
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(e.target[0].value)
    localStorage.setItem("email",e.target[0].value);
    localStorage.setItem("password",e.target[2].value);
    //<Redirect to='/signin'/>
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} >
            <label className = "head">Enter Your Info</label>
            Enter your email<input type="text" className="email" name="email"/>
            Enter your name<input type="text" className="name" name="name"/>
            Enter your password<input type="password" className="password" name="password"/>
            <input type="Submit" value="Register" className ="submit"/>
            {console.log(props)}
        </form>
      </header>
    </div>
  );
}

export default SignUp;
