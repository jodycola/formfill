import React, { useState } from 'react';
import './App.css';

function App() {

  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    company: ""
  })
  
  function handleSubmit(e){
    e.preventDefault();
    fetch("https://formfilltest.herokuapp.com/", {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    })
    .then(res => res.json())
    .then(data => {
      setForm({
        first: "",
        last: "",
        email: "",
        company: ""
      })
    })
  }

  return (
    <div className="App">
      <h1> HTML Form </h1>
        <form onSubmit={handleSubmit}>
        <label>First Name </label>
          <input 
            type="text"
            name="first"
            value={form.first}
            onChange={(e) => setForm({
                ...form, [e.target.name]: e.target.value})}
          />
        
        <br/>
        <label>Last Name </label>
          <input 
            type="text"
            name="last"
            value={form.last}
            onChange={(e) => setForm({
                ...form, [e.target.name]: e.target.value})}
          />

        <br/>
        <label>Company </label>
          <input 
            type="text"
            name="company"
            value={form.company}
            onChange={(e) => setForm({
                ...form, [e.target.name]: e.target.value})}
          />

        <br/>
        <label>Email Address </label>
          <input 
            type="text"
            name="email"
            value={form.email}
            onChange={(e) => setForm({
                ...form, [e.target.name]: e.target.value})}
          />

          <br/>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
