import React from "react";
import cover from '../assets/kessoku-group.webp';

function Home() {
    return (
        <>
        <div className="App">
            <div className="home-page">
                <img src={cover} className="band-cover" alt="cover"/>
            </div>
        </div>
        </>
    );
}

export default Home;