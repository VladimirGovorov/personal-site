// import { Fragment } from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { getBlocks, getDatabase, getPageFromSlug } from "@/app/api/notion";

// // Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const database = await getDatabase();
//   return database?.map((page) => {
//     const slug = page.properties.Slug?.formula?.string;
//     const returnData: any | Promise<any[]> = { id: page.id, slug };
//     return returnData;
//   });
// }

// export default async function Page({ params }) {
//   const page = await getPageFromSlug(params?.slug);
//   const blocks = await getBlocks(page?.id);

//   if (!page || !blocks) {
//     return <div />;
//   }

//   return (
//     <div>
//       <Head>
//         <title>{page.properties.Title?.title[0].plain_text}</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <article className={styles.container}>
//         <h1 className={styles.name}>
//           <p> title={page.properties.Title?.title} </p>
//         </h1>
//         <section>
//           {blocks.map((block) => (
//             <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//           ))}
//           <Link href="/" className={styles.back}>
//             ← Go home
//           </Link>
//         </section>
//       </article>
//     </div>
//   );
// }

const Page = () => {
  return <p>Blog page</p>;
};

export default Page;
