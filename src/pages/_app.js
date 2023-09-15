import "@/styles/globals.css";
import Layout from "@/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
//Style
import "../styles/globals.css";
import "../Layout/layout.scss";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
