import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";

export default function Terminos(): React.ReactElement {
  const t = useTranslations("legal.terms");

  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {t("title")}
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-300">{t("intro")}</p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("servicesTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("servicesText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("intellectualTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("intellectualText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("modificationsTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("modificationsText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("responsibilityTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("responsibilityText")}
        </p>
      </div>
    </Container>
  );
}

