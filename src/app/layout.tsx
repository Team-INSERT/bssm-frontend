import Provider from "@/helpers/provider.helper";
import GlobalStyle from "@/styles/GlobalStyle";

export const metadata = {
  title: "BSM",
  description: "부산소마고 학생 정보 관리 서비스입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
