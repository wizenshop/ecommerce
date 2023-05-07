import { Client } from '@notionhq/client';
import { BlogPost, PostPage } from '../types/blogPost';
import { NotionToMarkdown } from 'notion-to-md';

const notionClient = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
const n2m = new NotionToMarkdown({ notionClient });

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
  const response = await notionClient.databases.query({
    database_id: database,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Updated',
        direction: 'descending',
      },
    ],
  });

  return response.results.map((res) => {
    return pageToPostTransformer(res);
  });
}

export async function getSingleBlogPost(slug: string): Promise<PostPage> {
  const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
  const response = await notionClient.databases.query({
    database_id: database,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
    sorts: [
      {
        property: 'Updated',
        direction: 'descending',
      },
    ],
  });

  if (!response.results[0]) {
    throw new Error('No results available');
  }

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks);
  const post = pageToPostTransformer(page);

  return {
    post,
    markdown,
  };
}

function pageToPostTransformer(page: any): BlogPost {
  let cover = page.cover;
  switch (cover) {
    case 'file':
      cover = page.cover.file;
      break;
    case 'external':
      cover = page.cover.external.url;
      break;
    default:
      cover = '';
    // Add default cover image if you want...
  }

  return {
    id: page.id,
    cover: cover,
    title: page.properties.Name.title[0].plain_text,
    tags: page.properties.Tags.multi_select,
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties.Updated.last_edited_time,
    slug: page.properties.Slug.formula.string,
  };
}
