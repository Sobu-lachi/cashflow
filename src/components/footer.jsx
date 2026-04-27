import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

function Footer(){
    return(
        <div className={styles.footer}>
          <p > Copyright {'\u00a9'} 2026 cashclock. All rights reserved.</p>
        </div>


        
    )
}

export default Footer