import { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import NotionService from "../../services/notion-service";
import { BlogPost } from "../../types/schema";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

type PostProps = {
  post: BlogPost;
  markdown: string;
};

const Post: FunctionComponent<PostProps> = ({ post, markdown }) => {
  const router = useRouter();
  const { isLoading, error } = useQuery(
    ["post", router.query.slug],
    async () => {
      const notionService = new NotionService();
      const p = await notionService.getSingleBlogPost(
        router.query.slug as string
      );
      if (!p) {
        throw new Error("Post not found");
      }
      return { markdown: p.markdown, post: p.post };
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={"description"} title={"description"} content={post.description} />
        <meta name={"og:title"} title={"og:title"} content={post.title} />
        <meta name={"og:description"} title={"og:description"} content={post.description} />
        <meta name={"og:image"} title={"og:image"} content={post.cover} />
      </Head>

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
};

export const getStaticProps: GetStaticProps<PostProps> = async (context) => {
  const notionService = new NotionService();
  const p = await notionService.getSingleBlogPost(context.params?.slug as string);

  if (!p) {
    throw new Error("Post not found");
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
};

export async function getStaticPaths() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();
  const paths = posts.map((post) => `/post/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
