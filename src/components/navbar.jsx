import { Link} from "react-router-dom";
import styles from "../styles/nav.module.css";
import logo from "../assets/logo.png" ;
import { TrendingUp, Sun, Moon } from 'lucide-react';

function Navbar(){
    const change = ()=>{

    };

    return(
        <div className={styles.navbar}>
            <div className={styles.navbar2}>
                <div className={styles.logo}>
                <TrendingUp  size={20} />
            </div>
            <p>Cashclock</p>
            </div>

            <button className={styles.button} onClick={change}>
                <Moon size={15}/>
                </button>
        </div>
    )
}

export default Navbar