import React from 'react';

function Result() {
    //<Link to="/SignIn">Go to Home</Link>
    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <label className="head">Result</label>
                    You scored {localStorage.getItem("count")}
                </form>
            </header>
        </div>
    );
}

export default Result;
