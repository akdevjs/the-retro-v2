//Libraries
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({
  children,
  title = "The Retro",
  description = "-description-",
}) => (
  //Render
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/x-icon"
        href="https://www.simba.kr/favicon.png"
      ></link>

      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.simba.kr/logo.png" />
      <meta property="og:image:type" content="image/png"></meta>
      <meta property="og:url" content="https://www.simba.kr/" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <script
        defer
        src="https://developers.kakao.com/sdk/js/kakao.min.js"
      ></script>
    </Head>
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  </>
);

export default Layout;
