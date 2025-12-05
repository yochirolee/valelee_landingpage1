"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const LanguageSwitcher = (): React.ReactElement => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string): void => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLocale("es")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "es"
            ? "bg-[#1A4670] text-white"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-trueGray-700"
        }`}
        aria-label="Español"
      >
        ES
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "bg-[#1A4670] text-white"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-trueGray-700"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

