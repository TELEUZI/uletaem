import '../styles/globals.css';
import '../styles/main.css';
import '../styles/normalize.css';
import '../styles/header.scss';
import '../styles/style.scss';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';
import Layout from '../components/Layout/layout';

const progress = new ProgressBar({
  size: 2,
  color: '#38a169',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
export default MyApp;
