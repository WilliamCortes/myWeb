import type { AppProps } from "next/app";
import Script from "next/script";
import "@/styles/globals.scss";
import { Fragment, useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import { createChat } from "@n8n/chat";
import en from "../data/en.json";
import es from "../data/es.json";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('Loading chat i18n from JSON:', { en: en.chat, es: es.chat });
    console.log('Webhook URL:', process.env.NEXT_PUBLIC_WEBHOOK_URL);
    createChat({
      webhookUrl: process.env.NEXT_PUBLIC_WEBHOOK_URL,
      i18n: {
        en: en.chat,
        es: es.chat,
      },
    });
  }, []);
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

export default appWithTranslation(App);
