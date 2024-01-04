import Provider from "@/provider/MainProvider";
import React from "react";

export const metadata = {
  title: "BSM",
  description: "부산소마고 스마트 학생 생활 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
