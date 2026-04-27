import styles from "../styles/dbheader.module.css";
import DashboardDrawer from "./dbdrawer";
import { Sun, Moon } from "lucide-react";

function DashboardHeader(){
    return (
        <div className={styles.dashboardheader}>
                <p>Dashboard</p>
                {/* <Moon size={20}/> */}
                <Sun size={20}/>
        </div>
    );
}

export default DashboardHeader