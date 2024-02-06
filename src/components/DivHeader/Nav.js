import Button from '../Ui/Button';
import styles from './Nav.module.css';

const Nav = (props) => {
   const userExit = (e) => {
      e.preventDefault();
      props.onUserExit(false);
   }
   return (
      <nav>
         <ul className={styles.list}>
            <li>menu 1</li>
            <li>menu 2</li>
            <li>menu 3</li>
            <li><Button onClick={userExit}>Выход</Button></li>
         </ul>
      </nav>
   )
}

export default Nav;