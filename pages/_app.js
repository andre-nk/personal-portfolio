import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ModalContextProvider } from "../context/ModalContext";

function MyApp({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  );
}

export default MyApp;
