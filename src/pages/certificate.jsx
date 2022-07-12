import React, { useEffect, useState } from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";
import { H2 } from "../common/components/elements/Text";
import PopupModal from "../common/components/PopupModal";

export default function Certificate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateDetails, setCertificateDetails] = useState([]);
  const [certificateImg, setCertificateImg] = useState("");

  const getProjectsData = async () => {
    const certificatesQuery = '*[_type == "certificate"] | order(name, asc)';
    const response = await client.fetch(certificatesQuery);
    setCertificateDetails(response);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  if (certificateDetails.length === 0)
    return (
      <div className="h-screen flex justify-center items-center">
        <img src="/assets/loading.gif" />
      </div>
    );

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
                setCertificateImg(certificate.image);
                setIsModalOpen(true);
              }}
            >
              <H2>{certificate.name}</H2>
            </motion.div>
          );
        })}
      </div>

      <PopupModal open={isModalOpen} setOpen={setIsModalOpen}>
        <div className="scroll max-h-[500px] flex flex-col items-center justify-center rounded-xl overflow-y-auto">
          <img
            className="w-full z-50 border-2 border-gray-600 rounded-xl bg-loading-pattern bg-center bg-[length:200px_200px] bg-no-repeat"
            src={urlFor(certificateImg)}
            alt="project-image"
          />
        </div>
      </PopupModal>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const certificatesQuery = '*[_type == "certificate"] | order(name, asc)';
  const response = await client.fetch(certificatesQuery);

  return {
    props: {
      certificateDatas: response,
    },
  };
}
