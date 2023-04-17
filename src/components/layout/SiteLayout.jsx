import { Button, ConfigProvider, Layout } from "antd";
import React from "react";
import { Content, Header } from "antd/lib/layout/layout";
import { Outlet } from "react-router-dom";
import { YoutubeOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import "./SiteLayout.css";
import logo from '../assets/kessoku-band-logo.webp';

function SiteLayout() {

    return (
           <Layout>
               <Header className="header">
                    <div className="left-btn">
                        <div className="logo-cont">
                            <Button  className="logo-btn"
                                 type="text"
                                 href="/">
                                <img src={logo} className="band-logo" alt="logo"/>
                            </Button>
                        </div>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBgTextHover: 'rgb(255, 0, 79)',
                                },
                            }}>
                        <div className="menu-cont">
                            <Button className="album-btn" type="text" href="#album-preview">ALBUM</Button>
                            <Button className="tour-btn" type="text" href="/tour">TOUR</Button>
                            <Button className="merch-btn" type="text" href="/merch">MERCH</Button>
                            <Button className="music-btn" type="text" href="/music">MUSIC</Button>
                        </div>
                        </ConfigProvider>
                    </div>
                    <div className="right-btn">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBgTextHover: 'rgb(255, 0, 79)',
                                },
                            }}>
                        <Button className="fb-btn" 
                                type="text"
                                href="https://www.aniplus-asia.com/show/bocchi-the-rock/?fbclid=IwAR2RzWi7pHPWAx3xXWE1y7__K9QalZ48UfeF_0zVtd4ekZysQBv1Mvbxu8c">
                            <FacebookOutlined />
                        </Button>
                        <Button className="yt-btn" 
                                type="text"
                                href="https://www.youtube.com/channel/UC6IhDHJbJUoRJGUPnlh5GRQ/featured">
                            <YoutubeOutlined />
                        </Button>
                        <Button className="tw-btn" 
                                type="text"
                                href="https://twitter.com/AniTrendz/status/1605291949820256256?lang=en">
                            <TwitterOutlined />
                        </Button>
                        </ConfigProvider>
                   </div>
               </Header>
               <Content className="site-layout-bg">
                   <Outlet />
               </Content>
           </Layout>
    );
   }
   
   export default SiteLayout;