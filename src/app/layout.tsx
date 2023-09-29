import Provider from "@/provider/Provider.helper";
import ServerStyleProvider from "@/provider/ServerStyleProvider";

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
        <Provider>
          <ServerStyleProvider>{children}</ServerStyleProvider>
        </Provider>
      </body>
    </html>
  );
}
