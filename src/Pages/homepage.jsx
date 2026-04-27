import Navbar from "../components/navbar";
import Cards from "../components/homecards";
import Footer from "../components/footer";
import styles from "../styles/homecards.module.css";
import Hero from "../components/header";
import { Wallet, Shield, ChartBar } from 'lucide-react';


function Home() {
    return(
        <>
            <Navbar/>
            <Hero/>

            <div className={styles.section}>
            <Cards title = "Input your Income" 
            body="Enter your total income for the month or week." 
            icon={<Wallet  size={20}/>} />
            <Cards title = "Input your Expenses" 
                body="Enter your total expenses for the month or week." 
                icon={<Shield  size={20}/>} />
            <Cards title = "Result" 
                body="You might not live through the month." 
                icon={<ChartBar  size={20}/>} />
            </div>
            <Footer/>
        </>
        
    )
}

export default Home