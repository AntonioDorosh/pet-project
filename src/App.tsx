import React from 'react';
import './App.css'
import Header from "./components/Header/Header.tsx";
import Slider from "./components/Slider/Slider.tsx";
import Card from "./components/Card/Card.tsx";
import {ShoesProvider} from "./context/ShoesContext.tsx";

const App = () => {
    return (
        <div
            className='max-w-widthContainer mx-auto bg-white my-marginContainer p-8 rounded-3xl'>
            <ShoesProvider>
                <Header/>
                <Slider/>
                <Card/>
            </ShoesProvider>
        </div>
    );
};

export default App;