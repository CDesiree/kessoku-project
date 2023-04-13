import React from "react";
import {Layout} from "antd";

const {Header} = Layout;

function Home() {
    return (
        <>
        <div className="App">
            <Layout>
                <Header>
                    <div className="home-page">
                        <a>Home page contents</a>
                    </div>
                </Header>
            </Layout>
        </div>
        </>
    );
}

export default Home;