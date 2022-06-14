import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { PageLayout } from "../common/layout/PageLayout";
import { Input, Textarea } from "../common/components/elements/Input";
import clsx from "clsx";
import { ShowSuccessToast } from "../common/components/Toast";
import { toast } from "react-toastify";

const contact = () => {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fromEmail !== "" && fromName !== "" && message !== "") {
      if (fromEmail) setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [fromEmail, fromName, message]);

  const submitForm = (e) => {
    setIsLoading(true);
    e.preventDefault();
    var templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      message: message,
    };

    emailjs
      .send(
        "service_opbc9at",
        "template_yacrpaq",
        templateParams,
        "UUgSZVl6GSqMszEY_"
      )
      .then(
        function (response) {
          toast.success("Hey, thanks for your response.");
          setFromName("");
          setFromEmail("");
          setMessage("");
          setIsLoading(false);
        },
        function (error) {
          toast.error("FAILED...", error);
          setIsLoading(false);
        }
      );
  };

  const LoadingAnimation = () => (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </>
  );

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
          value={fromName}
          placeholder="Enter your Name"
          className="border-2 border-[#c2bb00]"
          onChange={(e) => setFromName(e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          value={fromEmail}
          placeholder="Enter your Email"
          className="border-2 border-[#c2bb00]"
          onChange={(e) => setFromEmail(e.target.value)}
        />
        <Textarea
          label="Message"
          value={message}
          placeholder="Enter your message"
          className="border-2 border-[#c2bb00]"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isBtnDisabled}
          className={clsx(
            "px-4 py-2 font-medium rounded-xl flex items-center",
            isBtnDisabled
              ? "bg-green-500 opacity-30 cursor-not-allowed"
              : "bg-green-500 cursor-pointer"
          )}
        >
          <LoadingAnimation /> Submit
        </button>
      </form>
      <ShowSuccessToast />
    </PageLayout>
  );
};

export default contact;
