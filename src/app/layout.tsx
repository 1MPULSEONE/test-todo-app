import "~/styles/globals.scss";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Header } from "~/widgets/header/ui";

export const metadata: Metadata = {
  title: "TODO App",
  description: "TODO APP",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
