import styles from "./DivHeader.module.css";
import Nav from './Nav';

const DivHeader = (props) => {
   const userExit = (bool) => {
      props.onUserExit(bool);
   }

   return (
      <div className={styles.divHeader}>
         <h1>React Advanced</h1>
         {props.isLoginUser && <Nav onUserExit={userExit} />}
      </div>
   )
}

export default DivHeader;