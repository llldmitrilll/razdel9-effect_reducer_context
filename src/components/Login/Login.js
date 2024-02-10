import React, { useContext, useRef, useState } from 'react';
import styles from './Login.module.css';
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import AuthContext from '../../store/auth-context';
import Input from '../Ui/Input'

const Login = () => {
   const emailInputRef = useRef();
   const passInputRef = useRef();
   const [isInputValide, setIsInputValide] = useState();
   const [isPassValide, setIsPassValid] = useState();
   const ctx = useContext(AuthContext);

   const userValidation = (event) => {
      event.preventDefault();
      let emailInput = emailInputRef.current.inputValue();
      let passInput = passInputRef.current.inputValue();
      if (emailInput.includes('@') && passInput.trim().length > 7)
         ctx.onInputUser();
   }

   const emailBlurHandler = () => {
      setIsInputValide(emailInputRef.current.inputValue().includes('@'));
   }

   const passBlurHandler = () => {
      setIsPassValid(passInputRef.current.inputValue().trim().length > 7);
   }

   return (
      <Card>
         <form onSubmit={userValidation}>
            <div className={`${styles.formControles} ${isInputValide === false ? styles.invalid : ''} `}>
               <label>E-mail</label>
               <Input
                  type='email'
                  id='email'
                  onBlur={emailBlurHandler}
                  ref={emailInputRef}
               />
            </div>
            <div className={`${styles.formControles} ${isPassValide === false ? styles.invalid : ''}`}>
               <label>Pasword</label>
               <Input
                  type='password'
                  id='password'
                  onBlur={passBlurHandler}
                  ref={passInputRef} />
            </div>
            <div className={styles.formBtn}>
               <Button type='submit'>Вход</Button>
            </div>
         </form>
      </Card>
   )
}

export default Login;