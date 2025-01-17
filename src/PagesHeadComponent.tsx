import { useRouter } from "next/router";
import { getBaseUrl } from "@/getBaseUrl";
import Head from "next/head";

export const PagesHeadComponent = () => {
  const router = useRouter();
  const pageUrl = getBaseUrl() + router.asPath;
  if (typeof window === "undefined") {
    console.log(
      "On the server, during generation of a static page, I know the path of the page: ",
      router.asPath,
    );
  }

  return (
    <Head>
      <meta property="og:url" content={pageUrl} />
    </Head>
  );
};
