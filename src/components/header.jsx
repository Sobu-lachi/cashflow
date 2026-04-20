import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

function Header() {
    return(
        <div className={styles.header}>
            <h1 className={styles.h1}>CashClock</h1>
            <p>Track your spending. See how long your money lasts.</p>
            <Link to="/dashboard">
                <button className={styles.button}>See your cashclock</button>
            </Link>
        </div>
    )
}

export default Header