import styles from "./DivHeader.module.css";
import Nav from './Nav';

const DivHeader = () => {

   return (
      <div className={styles.divHeader}>
         <h1>React Advanced</h1>
         <Nav />
         {/* <Nav onUserExit={props.onUserExit} /> */}
      </div>
   )
}

export default DivHeader;