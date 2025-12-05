import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";

export default function Privacidad(): React.ReactElement {
  const t = useTranslations("legal.privacy");

  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {t("title")}
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-300">{t("intro")}</p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("collectedTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("collectedText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("usageTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("usageText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("sharingTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("sharingText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("cookiesTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("cookiesText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("rightsTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("rightsText")}
        </p>
      </div>
    </Container>
  );
}

