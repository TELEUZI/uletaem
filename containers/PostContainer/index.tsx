import React from 'react';
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
}: Post) => (
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
  </>
);

export default PostContainer;
