import React, { useState } from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";
import { H2 } from "../common/components/elements/Text";
import PopupModal from "../common/components/PopupModal";

const certificate = ({ certificateDatas }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [certificateImg, setCertificateImg] = useState("");

  return (
    <PageLayout
      title="Certificates"
      className="bg-[#03506F] justify-center items-center pt-10"
    >
      <div className="flex justify-center flex-wrap">
        {certificateDatas.map((certificate) => {
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
        <div className="scroll max-h-[500px] overflow-y-auto">
          <img
            className="w-full border-2 border-gray-600 rounded-xl"
            src={urlFor(certificateImg)}
          />
        </div>
      </PopupModal>
    </PageLayout>
  );
};

export default certificate;

export async function getServerSideProps() {
  const certificatesQuery = '*[_type == "certificate"] | order(name, asc)';
  const response = await client.fetch(certificatesQuery);

  return {
    props: {
      certificateDatas: response,
    },
  };
}
