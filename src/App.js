import React, { useState } from 'react';
import DivHeader from './components/DivHeader/DivHeader'
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [isLoginUser, setIsLoginUser] = useState(false);

  const inputUserHandler = () => {
    setIsLoginUser(true);
  }

  const userExit = (bool) => {
    setIsLoginUser(bool);
  }
  return (
    <React.Fragment>
      <DivHeader isLoginUser={isLoginUser} onUserExit={userExit} />
      {!isLoginUser && <Login onInputUser={inputUserHandler} />}
      {isLoginUser && <Home />}
    </React.Fragment>
  );
}

export default App;
