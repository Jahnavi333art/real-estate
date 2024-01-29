import { CarouselImageType } from "@/components/ImageCarousel";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

const usePublicData = async () => {
  const response = await fetch(`${url}/data.json`, { cache: "no-store" });
  const data = (await response.json()) as PublicDataType;
  return data;
};

export default usePublicData;

export type LabelValueType = {
  label: string;
  value: string;
};

export type FAQType = {
  question: string;
  answer: LabelValueType[];
};

export type PublicDataType = {
  homePage: {
    title: string;
    description: string;
    images: CarouselImageType[];
  };
  aboutPage: {
    title: string;
    profilePic: string;
    details: LabelValueType[];
    faqs: FAQType[];
  };
  contactPage: {
    title: string;
    description: string;
    googleMaps: string;
    contactDetails: LabelValueType[];
  };
};
