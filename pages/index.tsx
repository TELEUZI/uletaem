import Head from 'next/head';
import React from 'react';
import Container from '../components/Layout/container';
import HeroPost from '../components/Post/hero-post';
import MoreStories from '../components/more-stories';
import { DEFAULT_AVATAR_PATH, DEFAULT_POST_IMAGE_PATH } from '../lib/constants';
import { Post } from '../models/post';
import '../styles/Home.module.css';
import Alert from '../components/alert';
import { getAllPostsForHome } from '../lib/api';
import Intro from '../components/intro';
import CategoriesSwiper from '../components/CategoriesSlider';

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
      <Alert preview={preview} />

      <Head>
        <title>Uletaem | Блог про путешествия</title>
      </Head>
      <Intro />

      <Container>
        <div className="categories-swiper">
          <CategoriesSwiper />
        </div>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage || { url: DEFAULT_POST_IMAGE_PATH }}
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
