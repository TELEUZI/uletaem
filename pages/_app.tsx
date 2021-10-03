import '../styles/globals.css';
import '../styles/main.css';
import '../styles/normalize.css';
import '../styles/header.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
