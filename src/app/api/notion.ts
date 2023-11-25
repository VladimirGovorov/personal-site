// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";
// // export async function GET() {
// //   return NextResponse.json({ name: "Anuj Singh" });
// // }
// const notionSecret = process.env.NOTION_SECRET;
// const notionDataBaseId = process.env.NOTION_DATABASE_ID;
// const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// });
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (!notionSecret || !notionDataBaseId)
//     throw new Error("Missing notion secret id");

//   const query = await notion.databases.query({
//     database_id: notionDataBaseId,
//   });
//   console.log("notionSecret!!", notionSecret);
//   console.log("query!!", query.results);

//   res.status(200).json({ name: "John doe" });
// }

import { Client } from "@notionhq/client";
import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

const databaseId = process.env.NEXT_NOTION_DATABASE_ID;

/**
 * Returns a random integer between the specified values, inclusive.
 * The value is no lower than `min`, and is less than or equal to `max`.
 *
 * @param {number} minimum - The smallest integer value that can be returned, inclusive.
 * @param {number} maximum - The largest integer value that can be returned, inclusive.
 * @returns {number} - A random integer between `min` and `max`, inclusive.
 */
function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const notion = new Client({
  auth: process.env.NEXT_NOTION_SECRET,
});

export const getDatabase = cache(async () => {
  if (databaseId) {
    console.log("databaseId");
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  }
});

export const getPage = cache(async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

export const getPageFromSlug = cache(async (slug) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  if (response?.results?.length) {
    return response?.results?.[0];
  }
  return {};
});

export const getBlocks = cache(async (blockID) => {
  const blockId = blockID.replaceAll("-", "");

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  });

  // Fetches all child blocks recursively
  // be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = results.map(async (block) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return Promise.all(childBlocks).then((blocks) =>
    blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, [])
  );
});
