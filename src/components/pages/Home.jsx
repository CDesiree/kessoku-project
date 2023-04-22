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
                            <h1>Definitely Maybe</h1>
                            <p>Definitely Maybe was an immediate commercial and critical success in the United Kingdom, having followed on the heels of the singles "Supersonic", "Shakermaker", and the UK top-ten hit "Live Forever", which was also a success on US Rock Airplay. <br/> It went straight to number one in the UK Albums Chart and became the fastest-selling debut album in the UK at the time; it went on to be certified 8× platinum by the BPI for sales of over 2.4 million units. It also was successful in the United States, being certified platinum.</p>
                        </div>
                    </div>
                    <div className="album2-row">
                        <div className="album2-desc">
                            <h1>Abbey Road</h1>
                            <p>Abbey Road incorporates styles such as rock, pop, blues, singer-songwriter, and progressive rock, and makes prominent use of the Moog synthesizer and guitar played through a Leslie speaker unit. <br/>It is also notable for having a long medley of songs on side two that have subsequently been covered as one suite by other notable artists.</p>
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