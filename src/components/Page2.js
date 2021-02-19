import React from 'react';

function Page2() {
    const question = "What is Express";
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        if (e.target[0].value === 'Web application framework') {
            localStorage.setItem("count", localStorage.getItem("count") +1);
            //
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={handleSubmit} >
                    <label className="head">MCQ's</label>
                    {question}
                    <input type="radio" value="Testing Framework" name="q1" />
                    <input type="radio" value="Web application framework" name="q1" />
                    <input type="radio" value="Language" name="q1" />
                    <input type="Submit" value="Next" className="submit" />
                </form>
            </header>
        </div>
    );
}

export default Page2;
