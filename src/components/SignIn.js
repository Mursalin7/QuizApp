import React from 'react';

function SignIn() {
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(e.target[0].value)
    if (localStorage.getItem("email") === e.target[0].value && localStorage.getItem("password",e.target[1].value)){
        ///
    }
    else
        window.alert("wrong password");
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} >
            <label className = "head">Enter Your Credentials</label>
            Enter your email<input type="text" className="email" name="email"/>
            Enter your password<input type="password" className="password" name="password"/>
            <input type="Submit" value="Register" className ="submit"/>
        </form>
      </header>
    </div>
  );
}

export default SignIn;
