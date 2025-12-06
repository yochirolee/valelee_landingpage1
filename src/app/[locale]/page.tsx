import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import OurServices from "@/components/OurServices";
import { FaqJsonLd } from "@/components/JsonLd";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default function Home({ params }: HomeProps): React.ReactElement {
  const t = useTranslations();

  return (
    <>
      <FaqPageSchema params={params} />
      <Container>
        <Hero />

        <div id="us">
          <SectionTitle
            preTitle={t("benefits.whyChooseUs")}
            title={t("benefits.mainTitle")}
          >
            {t("benefits.mainDescription")}
          </SectionTitle>
        </div>

        <Benefits
          title={t("benefits.one.title")}
          description={t("benefits.one.description")}
          bullets={[
            {
              title: t("benefits.one.bullet1Title"),
              desc: t("benefits.one.bullet1Desc"),
              icon: "smile",
            },
            {
              title: t("benefits.one.bullet2Title"),
              desc: t("benefits.one.bullet2Desc"),
              icon: "chart",
            },
            {
              title: t("benefits.one.bullet3Title"),
              desc: t("benefits.one.bullet3Desc"),
              icon: "cursor",
            },
          ]}
          imageSrc="/img/hero3.png"
        />
        <Benefits
          imgPos="right"
          title={t("benefits.two.title")}
          description={t("benefits.two.description")}
          bullets={[
            {
              title: t("benefits.two.bullet1Title"),
              desc: t("benefits.two.bullet1Desc"),
              icon: "phone",
            },
            {
              title: t("benefits.two.bullet2Title"),
              desc: t("benefits.two.bullet2Desc"),
              icon: "adjustments",
            },
            {
              title: t("benefits.two.bullet3Title"),
              desc: t("benefits.two.bullet3Desc"),
              icon: "sun",
            },
          ]}
          imageSrc="/img/benefit2.png"
        />

        <div id="services">
          <OurServices />
        </div>

        {/* <SectionTitle preTitle={t("video.preTitle")} title={t("video.title")}>
          {t("video.description")}
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" /> */}

        <div id="testimonials">
          <SectionTitle
            preTitle={t("testimonials.preTitle")}
            title={t("testimonials.title")}
          >
            {t("testimonials.description")}
          </SectionTitle>

          <Testimonials />
        </div>

        <div id="faq">
          <SectionTitle preTitle={t("faq.preTitle")} title={t("faq.title")}>
            {t("faq.description")}
          </SectionTitle>
        </div>
        <Faq />
        <Cta />
      </Container>
    </>
  );
}

// Server component for FAQ JSON-LD
async function FaqPageSchema({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<React.ReactElement> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  const faqs = [0, 1, 2, 3, 4].map((index) => ({
    question: t(`items.${index}.question`),
    answer: t(`items.${index}.answer`),
  }));

  return <FaqJsonLd locale={locale} faqs={faqs} />;
}
