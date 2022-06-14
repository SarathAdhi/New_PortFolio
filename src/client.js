import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "dmlhll2n",
  dataset: "production",
  useCdn: true,
  token: process.env.SANITY_TOKEN_ID,
  apiVersion: "2021-08-31",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
