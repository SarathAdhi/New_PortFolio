import React, { useEffect, useState } from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client, urlFor } from "../client";
import { PageWrapper } from "../common/layout/PageWrapper";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NEW_2023_PORTFOLIO } from "../utils/constants";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: NEW_2023_PORTFOLIO,
      permanent: false,
    },
  };
}

export default function Certificate() {
  const [certificateDetails, setCertificateDetails] = useState([]);

  const getCertificatesData = async () => {
    const certificatesQuery = '*[_type == "certificate"] | order(name, asc)';
    const response = await client.fetch(certificatesQuery);
    setCertificateDetails(response);
  };

  useEffect(() => {
    getCertificatesData();
  }, []);

  if (!certificateDetails) return <PageWrapper></PageWrapper>;

  const images = certificateDetails.map(({ image, name }) => {
    return {
      original: urlFor(image).url(),
      thumbnail: urlFor(image).url(),
      description: name,
      loading: "eager",
      thumbnailLoading: "eager",
    };
  });

  return (
    <PageLayout
      title="Certificates"
      className="bg-[#03506F] justify-center items-center pt-10"
    >
      <div className="w-full lg:w-7/12">
        <ImageGallery items={images} autoPlay />
      </div>
    </PageLayout>
  );
}

// export async function getServerSideProps() {
//   const certificatesQuery = '*[_type == "certificate"] | order(name, asc)';
//   const response = await client.fetch(certificatesQuery);

//   return {
//     props: {
//       certificateDetails: response,
//     },
//   };
// }
