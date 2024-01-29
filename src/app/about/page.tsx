import MaxWidthContainer from "@/components/MaxWidthContainer";
import {
  TypographyH1,
  TypographyH3,
  TypographyP,
} from "@/components/Typography";
import usePublicData from "@/hooks/usePublicData";
import Image from "next/image";

const AboutPage = async () => {
  const { aboutPage } = await usePublicData();

  return (
    <MaxWidthContainer>
      <div className="py-10 flex flex-col gap-6 items-center sm:items-start justify-center sm:justify-start">
        <TypographyH1 className="text-center w-full border-b font-bold pb-2">
          {aboutPage.title}
        </TypographyH1>

        {/* Profile */}
        <div className="flex gap-6 flex-col sm:flex-row">
          <Image
            src={aboutPage.profilePic}
            alt="profile-picture"
            height={300}
            width={300}
            className="min-h-[35svh] w-auto"
          />
          <div className="flex flex-col gap-3">
            {aboutPage.details.map((item) => (
              <div className="flex items-center" key={item.label}>
                <h4 className="w-24 text-lg font-semibold">{item.label} :</h4>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ's */}
        <div className="flex flex-col">
          {aboutPage.faqs.map((faq) => (
            <div key={faq.question}>
              <TypographyH3>{faq.question}</TypographyH3>
              {faq.answer.map((ans) => (
                <TypographyP key={ans.label} className="text-justify">
                  {ans.label && (
                    <span className="font-semibold text-lg">
                      {ans.label} :{" "}
                    </span>
                  )}
                  {ans.value}
                </TypographyP>
              ))}
            </div>
          ))}
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default AboutPage;
