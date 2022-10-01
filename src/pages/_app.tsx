import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ReactElement } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
}
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
