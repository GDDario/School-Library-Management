import React from "react";
import './App.css';
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import NavbarMobile from "./components/NavbarMobile";

const App = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // Subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // Unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    if (width > breakpoint) {
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

    return (
        <div className="App">
            <NavbarMobile />
            <Body>
                <Outlet/>
            </Body>
            <Footer/>
        </div>
    );
};

export default App;
