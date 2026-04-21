import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// Initializing a client
export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Initializing notion-to-md parser
export const n2m = new NotionToMarkdown({ notionClient: notion });

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
}

export const getPublishedBlogs = async (): Promise<BlogPost[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error("Missing NOTION_DATABASE_ID in environment variables");
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0]?.plain_text || "Untitled",
      description: page.properties.Description.rich_text[0]?.plain_text || "",
      date: page.properties.Date.date?.start || "",
      slug: page.properties.Slug.rich_text[0]?.plain_text || "",
      tags: page.properties.Tags.multi_select.map((tag: any) => tag.name) || [],
    };
  });
};

export const getSingleBlogPost = async (slug: string) => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error("Missing NOTION_DATABASE_ID in environment variables");
  }

  // 1. Fetch exactly the one record matching the slug
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug, // Assuming Slug is a formula or simple rich_text; might vary based on your DB setup
        },
      },
    },
  });

  if (!response.results[0]) {
    return null;
  }

  const page: any = response.results[0];

  // 2. Fetch the page blocks/content strings and convert to Markdown
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return {
    metadata: {
      id: page.id,
      title: page.properties.Name.title[0]?.plain_text,
      date: page.properties.Date.date?.start,
    },
    markdown: mdString.parent
  };
};
