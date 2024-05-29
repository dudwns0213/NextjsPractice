import Container from "@/components/Container";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wa</title>
      </Head>
      <ThemeProvider>
        <Header />
        <Container page>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
