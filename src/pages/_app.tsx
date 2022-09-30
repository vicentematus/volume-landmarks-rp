import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { ReactElement } from "react";
import Header from "@/components/header";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <div className="">{children}</div>
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
