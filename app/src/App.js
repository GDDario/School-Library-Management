import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Body>
                <Outlet/>
            </Body>
            <Footer/>
        </div>
    );
}

export default App;
