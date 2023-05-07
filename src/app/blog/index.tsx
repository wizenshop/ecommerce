import Head from 'next/head';
import { Metadata } from 'next';
import { BlogPost } from './../types/blogPost';
import NotionService from '../services/notion-service';
import { useQuery } from 'react-query';

export const metadata: Metadata = {
  title: {
    default: "",
    template: `%s - ${}`,
  },
  description:"",

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default async function Blog() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  const title = 'Test Blog';
  const description = 'Welcome to my Notion Blog.';

  const { data, isLoading, error } = useQuery('posts', async () => {
    const notionService = new NotionService();
    return await notionService.getPublishedBlogPosts();
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name={'description'}
          title={'description'}
          content={description}
        />
        <meta name={'og:title'} title={'og:title'} content={title} />
        <meta
          name={'og:description'}
          title={'og:description'}
          content={title}
        />
      </Head>

      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="h-full pt-4 pb-16 px-4 md:px-0 mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="font-extrabold text-xl md:text-4xl text-black text-center">
                Notion + NextJS Sample Blog
              </h1>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {isLoading && <p>Loading posts...</p>}
              {error && <p>Error: {error.message}</p>}
              {data &&
                data.map((post: BlogPost) => (
                  <p key={post.id}>Blog Post Component Here: {post.title}</p>
                ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
