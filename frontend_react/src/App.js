import React from 'react';

import {About, Footer, Work, Skills, Header, Testimonial} from "./container";
import {Nav_Bar} from "./components";

const App = () => {
    return(
        <div className="app">
            <Nav_Bar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            <Testimonial/>
            <Footer/>
        </div>
    )
}

export default App