import Avatar from '../User/avatar';
import Date from '../common/date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import { DEFAULT_POST_IMAGE_PATH } from '../../lib/constants';
import { Post } from '../../models/post';

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  slug,
}: Omit<Post, 'excerpt' | 'content'>) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author?.name} picture={author?.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage
          title={title}
          url={coverImage ? coverImage?.url : DEFAULT_POST_IMAGE_PATH}
          slug={slug}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
