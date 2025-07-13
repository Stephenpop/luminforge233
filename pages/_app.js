import Head from 'next/head';
import { PLASMIC } from '../plasmic-init'; // Adjust the path if needed

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luminforge Photography Agency</title>
        <meta name="description" content="Luminforge Photography Agency - Capturing stunning moments with professional photography services." />
        <meta property="og:title" content="Luminforge Photography Agency" />
        <meta property="og:description" content="Capturing stunning moments with professional photography services." />
        <meta property="og:image" content="https://luminforge.vercel.app/social.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luminforge Photography Agency" />
        <meta name="twitter:description" content="Capturing stunning moments with professional photography services." />
        <meta name="twitter:image" content="https://luminforge.vercel.app/social.png" />
        <link rel="icon" href="https://luminforge.vercel.app/favicons.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
