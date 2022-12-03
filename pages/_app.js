import '../styles/fonts/SeoulHangangJungM/seoul-hangang-jung-m.css'
import '../styles/globals.css'
import '../styles/test.css'
import 'animate.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head >
        <meta name="google-site-verification" content="RN2CstU6sdPwa8PeQ71QqsRvC9CIsh8oMrLh3sZQqsQ" />
        <meta property="og:title" content="백엔드 개발자 - 공지혁 포트폴리오 웹사이트" key="title" />
        <meta property="og:description" content='성장을 즐기는 개발자 공지혁입니다.' key="description" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_test/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_test/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_test/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_test/site.webmanifest" />
        <meta name="viewport" content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />
      </Head >
      <span>
        <Component {...pageProps} />,
    </span>
    </>
  )
}

export default MyApp
