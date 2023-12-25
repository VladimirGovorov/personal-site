// import { Client } from "@notionhq/client";
// import Image from "next/image";

import Link from "next/link";
// import { getDatabase } from "./api/notion";
import styles from "../../styles/Home.module.css";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import { Container, ThemeProvider } from "@mui/material/";
import Layout from "../../layout/Layout";

import appTheme from "@/themes/muiTheme";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
// export const databaseId =
//   process.env?.NOTION_DATABASE_ID ?? "NOTION_DATABASE_ID";

// async function getPosts() {
//   const database = await getDatabase();

//   return JSON.parse(JSON.stringify(database));
// }

export default async function Page() {
  // const posts = await getPosts();
  // console.dir(posts, { depth: null });

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Layout sx={{ marginBottom: "68px" }}>
          <Container>
            <Home />
            <About />
            <Contact />
            <Footer />
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  );
}
