// import { Client } from "@notionhq/client";
// import Image from "next/image";

import Link from "next/link";
import { getDatabase } from "./api/notion";
import styles from "../../styles/Home.module.css";
import Home from "../../components/Home";
import About from "../../components/About";
import { Container, ThemeProvider } from "@mui/material/";
import Layout from "../../layout/Layout";

import appTheme from "@/themes/muiTheme";
export const databaseId =
  process.env?.NOTION_DATABASE_ID ?? "NOTION_DATABASE_ID";

async function getPosts() {
  const database = await getDatabase();

  return JSON.parse(JSON.stringify(database));
}

export default async function Page() {
  const posts = await getPosts();
  console.dir(posts, { depth: null });

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Layout sx={{ marginBottom: "68px" }}>
          <Container>
            <Home />
            <About />
            <main className={styles.container}>
              <header className={styles.header}>
                <h1>Blog</h1>
              </header>

              <h2 className={styles.heading}>All Posts</h2>
              <ol className={styles.posts}>
                {posts?.map((post) => {
                  const date = new Date(post.last_edited_time).toLocaleString(
                    "en-US",
                    {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    }
                  );
                  const slug = post.properties?.Slug?.multi_select?.name;
                  return (
                    <>
                      {/* {post.properties.Name.title?.map((innerElement) => { */}
                      <li key={post.id} className={styles.post}>
                        <h3 className={styles.postTitle}>
                          <Link href={`/article/${slug}`}>
                            <p>{post.properties?.Slug?.multi_select.name}</p>
                          </Link>
                        </h3>

                        <p className={styles.postDescription}>{date}</p>
                        <Link href={`/article/${slug}`}>Read post →</Link>
                      </li>
                      ;{/* })} */}
                    </>
                  );
                })}
              </ol>
            </main>
          </Container>
        </Layout>
      </ThemeProvider>
    </>
  );
}
