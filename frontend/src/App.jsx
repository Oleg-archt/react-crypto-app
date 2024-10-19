import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppSlider from "./components/layout/appSlider";
import AppContent from "./components/layout/AppContent";
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/layout/AppLayout";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
      {/* <Layout>
        <AppHeader />
        <Layout>
          <AppSlider />
          <AppContent />
        </Layout>
      </Layout> */}
    </CryptoContextProvider>
  );
}
