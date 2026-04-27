import { Link } from "react-router-dom";
import DashboardHeader from "../components/dbheader";
import DashboardDrawer from "../components/dbdrawer";
import { ArrowLeft, TrendingUpDown, TrendingDown, Wallet } from "lucide-react";
import Dbcards from "../components/dbcards";
import styles from "../styles/dbcards.module.css"

function Dashboard(){
    return(
        <>

        <DashboardHeader/>
        <DashboardDrawer/>
        <div className={styles.section}>
            <Dbcards title ="Total Income" amount ={5000.0} type="income"
        icon = {<Wallet  size={20}/>} />
            <Dbcards title ="Total Expenses" amount ={3200.0} type="expense"
        icon = {<TrendingDown  size={20}/>} />
            <Dbcards title ="Net Balance" amount ={1800.0} type="balance"
        icon = {<TrendingUpDown  size={20}/>} />
        </div>
        

        <Link to="/">
              <button className="dashboardBackButton" > 
                <ArrowLeft size={20}/>
                 </button>
        </Link>
        </>
    )

}

export default Dashboard