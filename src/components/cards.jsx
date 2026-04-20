import styles from "../styles/cards.module.css";
import Proptypes from "prop-types";

function Cards(props){
    return(
        <div className={styles.card}>
                <h3 className={styles.h3}>{props.title}</h3>
                <p className={styles.p}>{props.body}</p>
        </div>
    );
}

Cards.propTypes ={
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired
}
Cards.defaultProps={
    title: "Title",
    boby: "What it does"
}
//
export default Cards