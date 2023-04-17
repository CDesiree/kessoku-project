import React from "react";
import cover from '../assets/kessoku-group.webp';
import album1 from '../assets/oasis-cover.jpg';
import album2 from '../assets/abbeyroad-cover2.jpg'
import './Home.css'

function Home() {
    return (
        <>
        <div className="App">
            <div className="home-page">
                <div className="home-cover">
                    <img src={cover} className="band-cover" alt="cover"/>
                </div>
                <div className="album-page" id="album-preview">
                    <div className="album1-row">
                        <div className="album1-image">
                            <img src={album1} alt="album1"/>
                        </div>
                        <div className="album1-desc">
                            <h1>kessoku</h1>
                            <p>Album 1 description</p>
                        </div>
                    </div>
                    <div className="album2-row">
                        <div className="album2-desc">
                            <h1>kessoku</h1>
                            <p>Album 2 description</p>
                        </div>
                        <div className="album2-image">
                            <img src={album2} alt="album2"/>
                        </div>
                    </div>
                </div>
                <div className="about">
                        <p>Test</p>
                    </div>
            </div>
        </div>
        </>
    );
}

export default Home;