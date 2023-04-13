import { Button, Layout } from "antd";
import React from "react";
import { Content, Header } from "antd/lib/layout/layout";
import { Outlet } from "react-router-dom";
import { YoutubeOutlined, FacebookOutlined } from '@ant-design/icons';
import "./SiteLayout.css";

function SiteLayout() {

    return (
           <Layout>
               <Header className="header">
                   <div className="left-btn">
                        <Button className="logo-btn" type="text" href="/">Logo</Button>
                        <Button className="tour-btn" type="text" href="/tour">Tour</Button>
                        <Button className="merch-btn" type="text" href="/merch">Merch</Button>
                        <Button className="music-btn" type="text" href="/music">Music</Button>
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
                   </div>
               </Header>
               <Content className="site-layout-bg">
                   <Outlet />
               </Content>
           </Layout>
    );
   }
   
   export default SiteLayout;