import Head from 'next/head';
import React from 'react';
import Row from '../../components/Row';

import { getAllPostsForHome } from '../../lib/api';
import { Post } from '../../models/post';

export function Places({ allPosts }: { allPosts: Post[] }): React.ReactElement {
  return (
    <>
      <Head>
        <title>Uletaem | Места</title>
      </Head>
      <div className="places-page">
        <h2 className="title">Места</h2>
        <div className="posts-container grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 gap-10 pt-10 md:gap-16 mb-32">
          {allPosts.map(post => (
            <Row isEven post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = (await getAllPostsForHome(false)) || [];

  return {
    props: { allPosts },
  };
}
export default Places;
