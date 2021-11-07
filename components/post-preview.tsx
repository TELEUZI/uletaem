import Link from 'next/link';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import { DEFAULT_POST_IMAGE_PATH } from '../lib/constants';
import { Post } from '../models/post';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Post) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          title={title}
          url={coverImage ? coverImage?.url : DEFAULT_POST_IMAGE_PATH}
          slug={slug}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
