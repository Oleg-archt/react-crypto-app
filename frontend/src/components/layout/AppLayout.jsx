import React, { useContext } from "react";
import AppContent from "./AppContent";
import { Layout, Spin } from "antd";
import AppSlider from "./appSlider";
import AppHeader from "./AppHeader";
import CryptoContext from "../../context/crypto-context";

const AppLayout = () => {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSlider />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
