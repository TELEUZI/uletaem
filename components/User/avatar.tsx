import Image from 'next/image';
import { DEFAULT_AVATAR_PATH } from '../../lib/constants';

export default function Avatar({ name, picture }: any) {
  const url = picture?.url ?? (picture?.[0]?.url || DEFAULT_AVATAR_PATH);
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          src={`${
            url?.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
          }${url}`}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
