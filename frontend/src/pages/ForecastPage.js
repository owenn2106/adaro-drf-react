import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Typography, Grid, Breadcrumb } from "antd";

import Navbar from "../components/navbar/Navbar";
import SideNavbar from "../components/navbar/SideNavbar";

import adaroLogo from "../images/adaro-logo.png";
import ForecastComponent from "../components/forecast-data/ForecastComponent";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const ForecastPage = ({ loc, locTitle }) => {
  const { sm } = useBreakpoint();
  const contentMargin = sm ? 200 : 30;

  const locId = useLocation().pathname.split("/")[2];

  return (
    <Layout>
      <Sider
        breakpoint="sm"
        collapsedWidth="0"
        width={200}
        style={{
          height: "100%",
          position: "fixed",
          left: 0,
          zIndex: 99,
        }}
      >
        <div
          style={{
            width: 200,
            backgroundColor: "#141414",
            padding: "1.5em 0 2em 1em",
          }}
        >
          <img src={adaroLogo} alt="adaro logo" style={{ width: "80%" }} />
        </div>
        <SideNavbar />
      </Sider>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content style={{ marginLeft: contentMargin }}>
          <div className="container">
            <Breadcrumb style={{ margin: "1em 0" }}>
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={`/locs/${locId}`}>{locTitle}</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Forecast</Breadcrumb.Item>
            </Breadcrumb>
            <Title>Forecast for {locTitle}</Title>
            <ForecastComponent loc={loc} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ForecastPage;
