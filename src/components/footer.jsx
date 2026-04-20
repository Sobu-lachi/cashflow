import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerdata}>
                <h1>CashClock</h1>
                <p>Track your spending. <br />
                    See how long your money lasts.</p>
            </div>

            <div className={styles.quicklinks}>
                <Link to="/" className={styles.linkdata}>home</Link>
                <Link  to="/" className={styles.linkdata}>how it works</Link>
                <Link to="/"
                className={styles.linkdata}>contact</Link>
            </div>

           

           <p > Copyright {'\u00a9'} 2026 cashclock. All rights reserved.</p>
        </div>


        
    )
}

export default Footer