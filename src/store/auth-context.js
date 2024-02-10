import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
   isLoginUser: false,
   onUserExit: () => { },
   onInputUser: (email, password) => { }
});

export const AuthContextProvider = (props) => {
   const [isLoginUser, setLoginUser] = useState(false);

   useEffect(() => {
      const storedLoginInfo = localStorage.getItem('isLoginUser')
      if (storedLoginInfo === '1') setLoginUser(true);
   }, []);

   const inputUserHandler = () => {
      localStorage.setItem('isLoginUser', '1');
      setLoginUser(true);
   };

   const userExitHandler = () => {
      localStorage.removeItem('isLoginUser');
      setLoginUser(false);
   };

   return (
      <AuthContext.Provider
         value={{
            isLoginUser,
            onUserExit: userExitHandler,
            onInputUser: inputUserHandler
         }}
      >
         {props.children}
      </AuthContext.Provider>
   )
}

export default AuthContext;