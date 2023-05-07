import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import type { Metadata } from 'next';
import { BlogPost } from './../types/blogPost';
import {
  getPublishedBlogPosts,
  getSingleBlogPost,
} from '@/src/services/notion';
import { PostPage } from '@/src/types/blogPost';

interface ProductsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadate({ params }) {
  return {
    title: params.slug,
  };
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const p = await getSingleBlogPost(params?.slug);

  if (!p) {
    throw new Error('Failed to fetch blog post');
  }

  const { markdown, post } = p;

  return {
    title: {
      default: post.title,
      template: `%s - ${post.title}`,
    },
    description: post.description,
    keywords:"",
}

export default async function Post({ params }: ProductsProps) {
  const p = await getSingleBlogPost(params?.slug);

  if (!p) {
    throw new Error('Failed to fetch blog post');
  }

  const { markdown } = p;

  return (
    <>
      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="flex items-center justify-center">
            <article className="prose">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}

