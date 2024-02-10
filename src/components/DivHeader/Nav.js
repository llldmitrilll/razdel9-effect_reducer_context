import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import styles from './Nav.module.css';

const Nav = () => {
   const ctx = useContext(AuthContext);
   return (
      <nav>
         <ul className={styles.list}>
            {ctx.isLoginUser && <li>menu 1</li>}
            {ctx.isLoginUser && <li>menu 2</li>}
            {ctx.isLoginUser && <li>menu 3</li>}
            {ctx.isLoginUser && <li><button onClick={ctx.onUserExit}>Выход</button></li>}
         </ul>
      </nav>
   )
}

export default Nav;