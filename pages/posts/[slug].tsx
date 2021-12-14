import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import React from 'react';
import Head from 'next/head';
import { getPostAndMorePosts, getAllPostsWithSlug } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';
import Container from '../../components/Layout/container';
import MoreStories from '../../components/more-stories';
import PostTitle from '../../components/Post/post-title';
import SectionSeparator from '../../components/SectionSeparator/section-separator';
import PostContainer from '../../containers/PostContainer';

export default function Post({ post = null, morePosts }: any) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return post ? (
    <>
      <Head>
        <title>
          {post.title} | Next.js Blog Example with {CMS_NAME}
        </title>
        <meta property="og:image" content={post.ogImage?.url} />
      </Head>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <PostContainer {...post} />
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </>
  ) : (
    <PostTitle>Loading…</PostTitle>
  );
}

export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { slug: string };
  preview: boolean;
}) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.posts?.map((post: { slug: any }) => `/posts/${post.slug}`) ||
      [],
    fallback: true,
  };
}
