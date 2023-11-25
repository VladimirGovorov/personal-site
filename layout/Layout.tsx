import Head from "next/head";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material/";
const Layout = ({ children }: any) => {
  return (
    <Box>
      <Head>
        <title>Vlado QA</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>{/* <Footer /> */}</footer>
    </Box>
  );
};

export default Layout;
