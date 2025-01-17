import { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const domain = "https://mywebsite.com";
  const path = headersList.get("x-invoke-path") || "/";
  const canonicalUrl = `https://${domain}${path}`;

  return {
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
    },
  };
}

export default function Page() {
  return <h1>app-blog-with-headers</h1>;
}
