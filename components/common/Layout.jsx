//Libraries
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  //Render
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:title" content="The Retro" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="You wanna get the orignal branded shoes on your door step? then you can use our platform. The retro provides the best branded shoes in the most affordable price on the internet."
      />
      <meta property="og:image" content="./imgs/Preview.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="description"
        content="You wanna get the orignal branded shoes on your door step? then you can use our platform. The retro provides the best branded shoes in the most affordable price on the internet."
      />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
        crossOrigin="anonymous"
      />

      <link rel="manifest" href="/manifest.json" />

      <title>The Retro - Best shoes selling site</title>
    </Head>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
