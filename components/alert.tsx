import cn from 'classnames';
import Link from 'next/link';
import Container from './Layout/container';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Alert({ preview }: any) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <Link href="/api/exit-preview">
                <a className="underline hover:text-cyan duration-200 transition-colors">
                  Click here to exit preview mode.
                </a>{' '}
              </Link>
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
