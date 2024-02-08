import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { PageLayout } from "../common/layout/PageLayout";
import { Input, Textarea } from "../common/components/elements/Input";
import { ShowSuccessToast } from "../common/components/Toast";
import { toast } from "react-toastify";
import { LoadingSvg } from "../common/components/LoadingSvg";
import { NEW_2023_PORTFOLIO } from "../utils/constants";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: NEW_2023_PORTFOLIO,
      permanent: false,
    },
  };
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const formValue = e.target;

    const from_name = formValue[0].value;
    const from_email = formValue[1].value;
    const message = formValue[2].value;

    if (!from_name || !from_email || !message) {
      toast("Please fill all the fields");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name,
      from_email,
      message,
    };

    emailjs
      .send(
        "service_opbc9at",
        "template_yacrpaq",
        templateParams,
        "UUgSZVl6GSqMszEY_"
      )
      .then(
        function () {
          toast.success("Hey, thanks for your response.");
          setIsLoading(false);
        },
        function (error) {
          toast.error("FAILED...", error);
          setIsLoading(false);
        }
      );
  };

  return (
    <PageLayout
      title="Contact"
      className="bg-[#d6d271] justify-center items-center"
    >
      <form
        onSubmit={(e) => submitForm(e)}
        className="w-full md:w-96 flex flex-col gap-y-5 justify-center items-center"
      >
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="Enter your Name"
          className="border-2 border-[#c2bb00]"
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="border-2 border-[#c2bb00]"
        />
        <Textarea
          label="Message"
          name="feedback"
          placeholder="Enter your message"
          className="border-2 border-[#c2bb00]"
        />
        <button
          type="submit"
          className="px-4 py-2 font-medium rounded-xl flex items-center bg-green-500 cursor-pointer"
        >
          {isLoading && (
            <LoadingSvg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          )}
          Submit
        </button>
      </form>
      <ShowSuccessToast />
    </PageLayout>
  );
}
