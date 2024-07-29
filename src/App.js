import React from 'react';
import UserList from './UserList';
import './App.css'; // Import global styles

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User List</h1>
      </header>
      <UserList />
    </div>
  );
};

export default App;
