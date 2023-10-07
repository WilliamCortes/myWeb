import type { AppProps } from "next/app";
import Script from "next/script";
import "@/styles/globals.scss";
import { Fragment } from "react";

const gtmID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${gtmID}');
        `}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  );
}
