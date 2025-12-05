import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";

export default function Legal(): React.ReactElement {
  const t = useTranslations("legal.notice");

  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          {t("title")}
        </h1>

        <p className="mb-4 text-gray-600 dark:text-gray-300">{t("intro")}</p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("disclaimerTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("disclaimerText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("intellectualTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("intellectualText")}
        </p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800 dark:text-white">
          {t("usageTitle")}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          {t("usageText")}
        </p>
      </div>
    </Container>
  );
}

