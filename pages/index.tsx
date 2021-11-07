import Head from 'next/head';
import React from 'react';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { getAllPostsForHome } from '../lib/api';
import {
  CMS_NAME,
  DEFAULT_AVATAR_PATH,
  DEFAULT_POST_IMAGE_PATH,
} from '../lib/constants';
import { Post } from '../models/post';
import '../styles/Home.module.css';

export function Home({
  allPosts,
  preview,
}: {
  allPosts: Post[];
  preview: boolean;
}): React.ReactElement {
  const [heroPost, ...morePosts] = allPosts;
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={
                heroPost.coverImage || { url: DEFAULT_POST_IMAGE_PATH }
              }
              date={heroPost.date}
              author={
                heroPost.author || {
                  name: 'Anonymous',
                  picture: DEFAULT_AVATAR_PATH,
                }
              }
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}
export default Home;
