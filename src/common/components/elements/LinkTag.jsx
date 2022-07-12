import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export const LinkTag = ({ href, className, image, children }) => {
  return (
    <Link href={href}>
      <a className={clsx("w-full flex justify-center items-center", className)}>
        {image && <Image priority={true} width={30} height={30} src={image} />}
        {children}
      </a>
    </Link>
  );
};
