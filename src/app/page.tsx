import ImageCarousel from "@/components/ImageCarousel";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyList,
} from "@/components/Typography";
import { buttonVariants } from "@/components/ui/button";
import usePublicData from "@/hooks/usePublicData";
import { cn } from "@/lib/utils";
import { Info, Phone } from "lucide-react";
import Link from "next/link";

const buttons = [
  {
    url: "/about",
    Icon: Info,
    label: "About Us",
  },
  {
    url: "/contact",
    Icon: Phone,
    label: "Contact Us",
  },
];

const HomePage = async () => {
  const { homePage } = await usePublicData();

  return (
    <MaxWidthContainer>
      <div className="py-10 flex flex-col gap-6 overflow-x-hidden sm:overflow-x-auto">
        <TypographyH1 className="text-center border-b font-bold pb-2">
          {homePage.title}
        </TypographyH1>

        {/* Image Carousel */}
        <div>
          <ImageCarousel images={homePage.images} height="55svh" />
        </div>

        {/* Description */}
        <p className="text-gray-900 text-lg text-justify">
          {homePage.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
          {buttons.map((btn) => (
            <Link
              key={btn.url}
              className={cn(
                "w-full sm:w-36",
                buttonVariants({ variant: "outline" })
              )}
              href={btn.url}
            >
              <btn.Icon className="mr-2" size={16} /> {btn.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <TypographyH2 className="text-center mt-6">Services</TypographyH2>
        <div className="flex flex-col gap-8">
          {homePage.services.map((service) => (
            <div key={service.name} className="flex flex-col gap-2">
              <TypographyH3>{service.name}</TypographyH3>
              <p className="text-muted-foreground">{service.description}</p>
              <TypographyList items={service.details} />
            </div>
          ))}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default HomePage;
