import MaxWidthContainer from "@/components/MaxWidthContainer";
import { TypographyH1, TypographyP } from "@/components/Typography";
import { buttonVariants } from "@/components/ui/button";
import usePublicData, { LabelValueType } from "@/hooks/usePublicData";
import { cn } from "@/lib/utils";
import { LucideIcon, Mail, Phone } from "lucide-react";
import Link from "next/link";

const iconsAndLinkMap: Record<
  string,
  { icon: LucideIcon; link: (item: LabelValueType) => string }
> = {
  Phone: {
    icon: Phone,
    link: (item) => `tel:+91${item.value}`,
  },
  Email: { icon: Mail, link: (item) => `mailto:${item.value}` },
};

const ContactPage = async () => {
  const { contactPage } = await usePublicData();
  return (
    <MaxWidthContainer>
      <div className="py-10 flex flex-col gap-6 items-center justify-center">
        <TypographyH1 className="text-center w-full border-b font-bold pb-2">
          {contactPage.title}
        </TypographyH1>

        {/* Description */}
        <TypographyP className="text-black">
          {contactPage.description}
        </TypographyP>

        {/* Google Maps */}
        <iframe
          src={contactPage.googleMaps}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 w-full">
          {contactPage.contactDetails.map((item) => {
            const Icon = iconsAndLinkMap[item.label]?.icon;
            const hrefFn = iconsAndLinkMap[item.label]?.link;
            return (
              <Link
                key={item.label}
                className={cn(
                  "w-full sm:w-36",
                  buttonVariants({ variant: "outline" })
                )}
                href={hrefFn?.(item)}
              >
                {Icon && <Icon className="mr-2" size={16} />} {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ContactPage;
