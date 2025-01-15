import { PagesHeadComponent } from "@/PagesHeadComponent";

const getStaticProps = async () => {
   // getSomeAsyncData
};

export default function (
    // dataFromGetStaticProps
) {
  return (
    <>
      <PagesHeadComponent />
      <p>
        This is a statically generated page in pages router that also has
        correct meta-og:url property
      </p>
      <h1>Pages blog</h1>
    </>
  );
}
