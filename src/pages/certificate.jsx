import React, { useState } from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";
import { H2 } from "../common/components/elements/Text";
import PopupModal from "../common/components/PopupModal";
import { PageWrapper } from "../common/layout/PageWrapper";

export default function Certificate({ certificateDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificate, setCertificate] = useState("");

  if (!certificateDetails) return <PageWrapper></PageWrapper>;

  return (
    <PageLayout
      title="Certificates"
      className="bg-[#03506F] justify-center items-center pt-10"
    >
      <div className="flex justify-center flex-wrap">
        {certificateDetails.map((certificate) => {
          return (
            <motion.div
              initial={{ y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ y: 0 }}
              className="bg-white px-4 py-2 m-2 text-center rounded-lg cursor-pointer"
              key={certificate._id}
              onClick={() => {
                setCertificate({
                  title: certificate.name,
                  image: certificate.image,
                });
                setIsModalOpen(true);
              }}
            >
              <H2>{certificate.name}</H2>
            </motion.div>
          );
        })}
      </div>

      <PopupModal
        title={certificate.title}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      >
        <img
          className="w-full h-full z-50 border-2 border-gray-600 rounded-xl bg-loading-pattern bg-center bg-[length:200px_200px] bg-no-repeat"
          src={urlFor(certificate.image)}
          alt="project-image"
        />
      </PopupModal>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const certificatesQuery = '*[_type == "certificate"] | order(name, asc)';
  const response = await client.fetch(certificatesQuery);

  return {
    props: {
      certificateDetails: response,
    },
  };
}
