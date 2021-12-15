import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { devicesMax } from '../../constants/devices';
import { Post } from '../../models/post';

const Row = ({ isEven, post }: { isEven: boolean; post: Post }) => {
  return (
    <>
      <Link href={`/posts/${post.slug}`}>
        <Wrapper>
          <ImageColumn isEven={isEven}>
            <Image
              src={post.coverImage?.url || ''}
              layout="fill"
              alt={`${post.title}`}
            />
          </ImageColumn>
          <DescriptionColumn isEven={isEven}>
            <Title>{post.title}</Title>
            <Description>{post.excerpt}</Description>
          </DescriptionColumn>
        </Wrapper>
      </Link>
    </>
  );
};

const Wrapper = styled.article`
  display: flex;
  color: var(--color-text);
  margin-bottom: 64px;

  @media ${devicesMax.tablet} {
    flex-direction: column;
  }
`;

const ImageColumn = styled.div<{ isEven: boolean }>`
  margin-right: 32px;

  img {
    display: block;
    width: 300px;
    height: 158px;
    object-fit: cover;
    transform: translateY(7px);
    border-radius: 8px;
  }

  @media ${devicesMax.tablet} {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;

    img {
      width: 100%;
      height: initial;
    }
  }
`;

const DescriptionColumn = styled.div<{ isEven: boolean }>`
  flex: 1;
  order: ${p => (p.isEven ? 1 : 2)};

  p,
  li {
    font-size: 1rem;
    margin-bottom: 12px;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  margin-bottom: 16px;
`;

const Description = styled.div``;

export default Row;
