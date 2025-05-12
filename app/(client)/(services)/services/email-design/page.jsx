import ReuseableHero from "@/app/(client)/_components/reuseable-hero";

import BusinessTrust from "@/app/(client)/_components/business-trust";
import EmailDesign from "@/app/(client)/examples/_components/email-design";
import ProcessWorks from "@/app/(client)/(services)/services/seo-blogs/_components/process-works";
import SupportedPlatform from "./_components/supported-platform";
import img from "@/public/img/email-design/banner2.png";
import FrequentlyAsked from "@/app/(client)/_components/landing-page/frequently-asked";
import Services from "./_components/services";

export default function SeoEMail() {
  return (
    <div className=" mx-auto">
      {/* <Banner/> */}
      <ReuseableHero
        header={"Email Design Services from only $149/mo"}
        para={[
          "Take your email marketing to the next level with stunning emails that convert. Made by our team of copywriters, designers, and email experts.",
        ]}
        img={img}
      />

      {/* Business Trust Section */}
      <BusinessTrust />

      <Services />
      {/* Email Design Section */}
      <EmailDesign />
      {/* Process Works Section */}
      <ProcessWorks />

      <SupportedPlatform />

      <FrequentlyAsked />
    </div>
  );
}
