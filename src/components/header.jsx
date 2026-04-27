import { Link } from "react-router-dom";
import styles from "../styles/header.module.css"

function Hero() {
    return(
        <div className={styles.header}>
            <p className={styles.p1}>Monitor your</p>
            <p className={styles.p2}>financial flow</p>
            <p className={styles.body}>Track your income and expenses, understand your spending patterns <br/> and take control of your personal finance</p>
            <Link to="/dashboard">
                <button className={styles.button}>See your cashclock</button>
            </Link>
        </div>
    )
}

export default Hero