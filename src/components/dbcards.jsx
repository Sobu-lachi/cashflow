import PropTypes from "prop-types";
import { TrendingUpDown, TrendingDown, Wallet } from "lucide-react";
import style from "../styles/dbcards.module.css";

function Dbcards(props){
    const cardClass = `${style.card} ${style[props.type] || ''}`;
    return(
        <div className={cardClass}>
            <div>
                <p>{props.title}</p>
                <h4>{props.amount}</h4>
            </div>
            <div className={style.icon}>
                {props.icon}
            </div>
        </div>
    );
}

Dbcards.propTypes ={
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    icon: PropTypes.node.isRequired,
    type: PropTypes.string
}

Dbcards.defaultProps={
    title: "Title",
    amount: 0.00,
    icon: <Wallet />,
    type: "default"
}

export default Dbcards