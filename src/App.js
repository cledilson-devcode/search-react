import React, { useState } from 'react';
import './App.css';
import GithubImage from './github-logo.png';

function App() {

  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
  }


  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  
  console.log(userData);

  return (
    <div className='container text-center'>
      <h1 className='py-5 text-uppercase'>Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='input-group'>
            <input type='text' className='form-control' required  value={search} onChange={handleChange} />
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-success'>
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className='py-5'>
        <img src={GithubImage} className='reponsive rounded-circle' alt='' height="200px"/>
        <h1 className=''>
          <a href="https://github.com/cledilson-devcode" target="_blank" rel="noopener noreferrer">
            Cledilson
          </a>
        </h1>
        <h3>São Luís - MA</h3>
        <p>
          <a href='https://github.com/cledilson-devcode/search-react' className='text-info'>Projeto Search React</a>
        </p>
      </div>
    </div>
  );
}

export default App;
