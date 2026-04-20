import { Link } from "react-router-dom";
import DashboardHeader from "../components/dashboardheader";
import DashboardDrawer from "../components/dashboarddrawer";

function Dashboard(){
    return(
        <>

        <DashboardHeader/>
        
        <DashboardDrawer/>
        <Link to="/">
              <button className="dashboardBackButton" > back </button>
        </Link>
        </>
    )
}

export default Dashboard