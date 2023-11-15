import Navbar from "./navbar";
import Footer from "./footer";
import { ReactNode } from "react";
import Head from "next/head";

type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <Head>
        <title>Next Grocery</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="description" content="next grocery" key="desc" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
      </Head>
      <main>{children}</main>

      <Footer />
    </>
  );
}
