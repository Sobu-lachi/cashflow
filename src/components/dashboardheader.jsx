import styles from "../styles/dashboardheader.module.css";
import DashboardDrawer from "./dashboarddrawer";

function DashboardHeader(){
    return (
        <div className={styles.dashboardheader}>
            <img src="" alt="menu icon" />
            <img src="" alt="toggle icon" />
        </div>
    );
}

export default DashboardHeader