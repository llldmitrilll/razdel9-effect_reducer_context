import React, { useContext } from 'react';
import DivHeader from './components/DivHeader/DivHeader'
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <DivHeader />
      {!ctx.isLoginUser && <Login />}
      {ctx.isLoginUser && <Home />}
    </React.Fragment>

  );
}

export default App;
