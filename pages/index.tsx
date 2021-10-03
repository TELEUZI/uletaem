import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Container from '../components/container';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MoreStories from '../components/more-stories';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import styles from '../styles/Home.module.css';

export function Home({ allPosts, preview }: any) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
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
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
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

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}
export default Home;
