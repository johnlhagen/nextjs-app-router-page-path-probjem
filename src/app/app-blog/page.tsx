import { getBaseUrl } from "@/getBaseUrl";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    openGraph: {
      url: getBaseUrl() /** + ??? **/,
    },
  };
}

export default async function () {
  // const someAsyncData = await getSomeAsyncData();
  return (
    <>
      <p>
        This is a statically generated page in app router. But it's not possible
        to produce automatically resolved meta-og:url property, because there's
        no way of resolving what the path is on the website?
      </p>
      <h1>App blog</h1>
    </>
  );
}
