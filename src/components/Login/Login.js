import React, { useRef } from 'react';
import styles from './Login.module.css';
import Button from '../Ui/Button';
import Card from '../Ui/Card';

const Login = (props) => {
   const emailInputRef = useRef();
   const passInputRef = useRef();

   const userValidation = (event) => {
      event.preventDefault();
      let emailInput = emailInputRef.current.value;
      let passInput = passInputRef.current.value;
      if (emailInput.length > 0 && passInput.length > 0)
         props.onInputUser();
   }
   return (
      <Card>
         <form onSubmit={userValidation}>
            <div className={styles.formControles}>
               <label>E-mail</label>
               <input ref={emailInputRef} />
            </div>
            <div className={styles.formControles}>
               <label>Pasword</label>
               <input ref={passInputRef} />
            </div>
            <div className={styles.formBtn}>
               <Button type='submit'>Вход</Button>
            </div>
         </form>
      </Card>
   )
}

export default Login;