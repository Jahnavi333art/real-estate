import { CarouselImageType } from "@/components/ImageCarousel";
import { promises as fs } from "fs";

const usePublicData = async () => {
  const response = await fs.readFile(
    process.cwd() + "/public/data.json",
    "utf-8"
  );
  const data = JSON.parse(response) as PublicDataType;
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

export type ServiceType = {
  name: string;
  description: string;
  details: LabelValueType[];
};

export type PublicDataType = {
  homePage: {
    title: string;
    description: string;
    images: CarouselImageType[];
    services: ServiceType[];
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
