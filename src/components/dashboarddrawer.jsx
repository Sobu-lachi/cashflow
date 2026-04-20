import logo from "../assets/logo.png" ;
import style from "../styles/dashboarddrawer.module.css";

function DashboardDrawer(){
    return(
        <div className={style.drawer}>
        <div className={style.drawerheader}>
            <img className={style.logo} src= {logo} alt="" />
            <button className={style.button}> x </button>
        </div>

        
    </div>
    )
}

export default DashboardDrawer