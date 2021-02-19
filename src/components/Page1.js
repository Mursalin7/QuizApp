import React from 'react';

function Page1() {
  const question = "What is React"
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    if(e.target[0].value === 'Library' )
    {
      localStorage.setItem("count",1);
      //
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit} >
            <label className = "head">MCQ's</label>
            {question}
            <input type="radio" value="Framework" name="q1"/>
            <input type="radio" value="Library" name="q1"/>
            <input type="radio" value="Language" name="q1"/>
            <input type="Submit" value="Next" className ="submit"/>
        </form>
      </header>
    </div>
  );
}

export default Page1;
