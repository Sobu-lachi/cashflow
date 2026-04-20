import Navbar from "../components/navbar";
import Header from "../components/header";
import Cards from "../components/cards";
import Footer from "../components/footer";
import styles from "../styles/cards.module.css";


function Home() {
    return(
        <>
            <Navbar/>
            <Header/>
            <h1 className="howitworks">How it works</h1>
            
            <div className={styles.section}>
            <Cards title = "Input your Income" 
            body="Enter your total income for the month or week."/>
            <Cards title = "Input your Expenses" 
                body="Enter your total expenses for the month or week."/>
            <Cards title = "Result" 
                body="You might not live through the month."/>
            </div>
            <Footer/>
        </>
        
    )
}

export default Home