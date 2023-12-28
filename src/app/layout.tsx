import Provider from "@/provider/MainProvider";
import React from "react";
import * as gtag from "@/hooks/useGtag";
import Script from "next/script";

export const metadata = {
  title: "BSM",
  description: "부산소마고 스마트 학생 생활 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  gtag.useGtag();
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
