import React from "react";
import cover from '../assets/kessoku-group.png';
import album1 from '../assets/oasis-cover.jpg';
import album2 from '../assets/abbeyroad-cover2.jpg'
import aboutImage from '../assets/about-image.jpg'
import './Home.css'



function Home() {
    const getNextWeeks = (count) => {
        const date = new Date();
        const nextWeeks = [];

        for (let i = 0; i < count; i++) {
            date.setDate(date.getDate() + 7)
            const dateString = date.toDateString().replace(/\d{4}$/, '');
            nextWeeks.splice(0, 1, dateString);
        }

        return nextWeeks;
    }

    return (
        <>
            <div className="App">
                <div className="home-page">
                    <div className="home-cover">
                        <img src={cover} className="band-cover" alt="cover" />
                    </div>
                    <div className="album-page" id="album-preview">
                        <div className="album1-row">
                            <div className="album1-image">
                                <img src={album1} alt="album1" />
                            </div>
                            <div className="album1-desc">
                                <h1>Definitely Maybe</h1>
                                <p>Definitely Maybe was an immediate commercial and critical success in the United Kingdom, having followed on the heels of the singles "Supersonic", "Shakermaker", and the UK top-ten hit "Live Forever", which was also a success on US Rock Airplay. <br /> It went straight to number one in the UK Albums Chart and became the fastest-selling debut album in the UK at the time; it went on to be certified 8× platinum by the BPI for sales of over 2.4 million units. It also was successful in the United States, being certified platinum.</p>
                            </div>
                        </div>
                        <div className="album2-row">
                            <div className="album2-desc">
                                <h1>Abbey Road</h1>
                                <p>Abbey Road incorporates styles such as rock, pop, blues, singer-songwriter, and progressive rock, and makes prominent use of the Moog synthesizer and guitar played through a Leslie speaker unit. <br />It is also notable for having a long medley of songs on side two that have subsequently been covered as one suite by other notable artists.</p>
                            </div>
                            <div className="album2-image">
                                <img src={album2} alt="album2" />
                            </div>
                        </div>
                    </div>
                    <div className="tour-page" id="tour-preview">
                        <table className="tour-main-table">
                            <tr className="main-header">Tour</tr>
                            <tr>
                                <td className="tour-row">
                                    <table>
                                        <tr>
                                            <th>{getNextWeeks(1)}</th>
                                        </tr>
                                        <tr>
                                            <td>SHELTER <br /> Shimokitazawa, Setagaya ward, Tokyo</td>
                                        </tr>
                                    </table>
                                </td>
                                <td><button>Button 1</button></td>
                            </tr>
                            <tr>
                                <td className="tour-row">
                                    <table>
                                        <tr>
                                            <th>{getNextWeeks(2)}</th>
                                        </tr>
                                        <tr>
                                            <td>Live House Fever <br /> Hanegi, Setagaya ward, Tokyo</td>
                                        </tr>
                                    </table>
                                </td>
                                <td><button>Button 2</button></td>
                            </tr>
                            <tr>
                                <td className="tour-row">
                                    <table>
                                        <tr>
                                            <th>{getNextWeeks(3)}</th>
                                        </tr>
                                        <tr>
                                            <td>Loft Shinjuku <br /> 
                                            <a className="kamuro" href="https://youtu.be/g3jCAyPai2Y">Kamuro</a>
                                            Kabukicho, Shinjuku City, Tokyo</td>
                                        </tr>
                                    </table>
                                </td>
                                <td><button>Button 3</button></td>
                            </tr>
                            <tr>
                                <td className="tour-row">
                                    <table>
                                        <tr>
                                            <th>{getNextWeeks(4)}</th>
                                        </tr>
                                        <tr>
                                            <td>Shibuya Take off 7 <br /> Udagawacho, Shibuya City, Tokyo</td>
                                        </tr>
                                    </table>
                                </td>
                                <td><button>Button 4</button></td>
                            </tr>
                            <tr>
                                <td className="tour-row">
                                    <table>
                                        <tr>
                                            <th>{getNextWeeks(5)}</th>
                                        </tr>
                                        <tr>
                                            <td>Kennedy House Ginza <br /> Chome-2 Ginza, Chuo City, Tokyo</td>
                                        </tr>
                                    </table>
                                </td>
                                <td><button>Button 5</button></td>
                            </tr>
                        </table>
                    </div>
                    <div className="about-page">
                        <div className="about-b1-cntr">
                            <img src={aboutImage} className="about-cover" alt="about" />
                            <h2>ABOUT THE BAND</h2>
                        </div>
                        <div className="about-b2-cntr">
                            <p><em>Kessoku Band</em> is a fictional musical group in the manga series Bocchi the Rock! In the anime adaptation of the manga, Yoshino Aoyama, Sayumi Suzushiro, Saku Mizuno, and Ikumi Hasegawa provided the voices for Kessoku Band's members Hitori Gotō, Nijika Ijichi, Ryō Yamada, and Ikuyo Kita, respectively. After the airing of the fifth episode, it was announced that the group will release a self-titled album, consisting of 14 tracks including those featured in the anime series.</p>
                            <p><em>Kessoku Band</em> debuted at number one on Billboard Japan's Download Albums chart dated December 28, 2022, with 5,877 downloads during the period dated December 19–25, as well as the Top Albums Sales chart, with 73,244 sales recorded during the period dated December 26, 2022 to January 1, 2023. <br /><br />The album also entered the Hot Albums chart dated December 28 at number six, but rose to number one the following week. For Oricon's charts dated January 9, 2023, the album simultaneously topped the Albums Chart, Combined Albums Chart, and Digital Albums Chart. Kessoku Band remained at number one in the Digital Albums Chart for four consecutive weeks, marking the first time a female group achieved that record. The album was certified gold by the Recording Industry Association of Japan for reaching 100,000 physical sales.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;