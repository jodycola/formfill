import React, { useState } from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState("")
  
  function handleSubmit(e){
    e.preventDefault();
    fetch(`http://formfilltest.herokuapp.com/query/${query}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <h1> HTML Form </h1>
        <form onSubmit={handleSubmit}>
        <label>What company are you looking for?</label><br/>
        <input 
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        /><button type="submit">Search</button>
        </form>
    </div>
  );
}

export default App;
