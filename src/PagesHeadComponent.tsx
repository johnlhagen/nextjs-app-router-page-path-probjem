import { useRouter } from "next/router";
import { getBaseUrl } from "@/getBaseUrl";
import Head from "next/head";

export const PagesHeadComponent = () => {
  const router = useRouter();
  const pageUrl = getBaseUrl() + router.asPath;

  return (
    <Head>
      <meta property="og:url" content={pageUrl} />
    </Head>
  );
};
