import { Post } from '../models/post';
import PostPreview from './Post/post-preview';

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-16 lg:col-gap-32 gap-x-20 md:gap-x-32 mb-32">
        {posts.map((post: Post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            content={post.content}
          />
        ))}
      </div>
    </section>
  );
}
