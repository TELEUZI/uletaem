import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import PostBody from '../../components/Post/post-body';
import PostHeader from '../../components/Post/post-header';
import { Post } from '../../models/post';

const PostContainer = ({
  title,
  coverImage,
  date,
  author,
  slug,
  content,
}: Post) => {
  const disqusShortname = 'uletaem';
  const disqusConfig = {
    url: 'http://localhost:3000',
    identifier: slug,
    title,
  };
  return (
    <>
      <article>
        <PostHeader
          title={title}
          coverImage={coverImage}
          date={date}
          author={author}
          slug={slug}
        />
        <PostBody content={content} />
      </article>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </>
  );
};

export default PostContainer;
