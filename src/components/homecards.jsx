import styles from "../styles/homecards.module.css";
import Proptypes from "prop-types";
import { Wallet, Shield, ChartBar } from 'lucide-react';

function Cards(props){
    return(
        <div className={styles.card}>
            <div className={styles.header}>
                
            <div className={styles.icon}>
                {props.icon}
            </div>
            <h3 className={styles.h3}>{props.title}</h3>

            </div>
            <p className={styles.p}>{props.body}</p>
        </div>
    );
}

Cards.propTypes ={
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired,
    icon: Proptypes.node.isRequired
}
Cards.defaultProps={
    title: "Title",
    body: "What it does",
    icon: <Wallet />
}
//
export default Cards