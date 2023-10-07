import type { AppProps } from "next/app";
import Script from "next/script";
import "@/styles/globals.scss";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-V69WVT4EBQ`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-V69WVT4EBQ');
        `}
      </Script>
      <Component {...pageProps} />
    </Fragment>
  );
}
