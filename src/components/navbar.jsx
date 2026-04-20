import { Link} from "react-router-dom";
import styles from "../styles/nav.module.css";
import logo from "../assets/logo.png" ;

function Navbar(){
    return(
        <div className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="logo" />
            <div className={styles.links}>
                <Link className={styles.a} to="/">home</Link>
                <Link className={styles.a} to="/" >how it works</Link>
                <Link to="/dashboard">
                    <button className={styles.button}>Check your cash clock</button>
                </Link>

            </div>
            
        </div>
    )
}

export default Navbar