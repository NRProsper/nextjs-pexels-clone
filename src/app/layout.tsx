import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import ChildrenWrapper from "@/components/layout/wrapper";


export const metadata: Metadata = {
  title: "Pexels Clone",
  description: "This is a nextjs pexels clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head />
    <body
        className="antialiased"
    >
    <Navbar />
    <ChildrenWrapper>
      {children}
    </ChildrenWrapper>
    </body>
    </html>
  );
}
