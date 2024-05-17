import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextFOOD",
  description: "Created with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} mx-auto bg-slate-700 md:max-w-md`}>
        <div className="bg-slate-100">{children}</div>
      </body>
    </html>
  );
}
