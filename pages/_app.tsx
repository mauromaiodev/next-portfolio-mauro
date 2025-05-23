import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import '../styles/argon-design-system-react.css';
import '../styles/styles.css';
import '../styles/vendor/font-awesome/css/font-awesome.min.css';
import '../styles/vendor/nucleo/css/nucleo.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
