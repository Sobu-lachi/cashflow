import logo from "../assets/logo.png" ;
import style from "../styles/dbdrawer.module.css";
import { TrendingUp, Menu, X } from "lucide-react";

function DashboardDrawer(){
    return(
        <div className={style.drawer}>
        <div className={style.drawerheader}>
            <div className={style.logo}>
                <TrendingUp  size={20} />
            </div>
            <p>Cashflow</p>
        </div>

        
    </div>
    )
}

export default DashboardDrawer