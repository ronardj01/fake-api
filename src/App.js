import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import GetUsers from './components/GetUsers';

function App() {
  const [fakeApi, setFakeApi] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/users");
      const users = await response.json();
      setFakeApi(users)
    }
    fetchData()
  }, [])

  return (
    <div>
      {fakeApi.length > 0 && <GetUsers users={fakeApi} />}
    </div>
  );
}

export default App;
