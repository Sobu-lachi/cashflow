import { Routes, Route } from "react-router-dom";
import Home from "./Pages/homepage";
import Dashboard from "./Pages/dashboard"

function App() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default App
