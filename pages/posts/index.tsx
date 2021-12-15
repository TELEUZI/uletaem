import Head from 'next/head';

import React from 'react';
import Container from '../../components/Layout/container';
import PostPreview from '../../components/Post/post-preview';

import { getAllPostsWithSlug } from '../../lib/api';
import { Post } from '../../models/post';

export function Posts({ allPosts }: { allPosts: Post[] }): React.ReactElement {
  return (
    <>
      <Head>
        <title>Uletaem | Блог про путешествия</title>
      </Head>
      <Container>
        <div className="posts-container">
          {allPosts.map(post => (
            <PostPreview key={post.slug} {...post} />
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsWithSlug()) || [];
  return {
    props: { allPosts },
  };
}
export default Posts;
