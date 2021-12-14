import Link from 'next/link';
import Avatar from '../User/avatar';
import Date from '../common/date';
import CoverImage from './cover-image';
import { DEFAULT_POST_IMAGE_PATH } from '../../lib/constants';

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: { url: string } | null;
  date: string;
  excerpt: string;
  author: { name: string; picture: string } | null;
  slug: string;
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          url={coverImage ? coverImage?.url : DEFAULT_POST_IMAGE_PATH}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {author && <Avatar name={author?.name} picture={author?.picture} />}
        </div>
      </div>
    </section>
  );
}
