import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  return (
    <div className="App">
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;