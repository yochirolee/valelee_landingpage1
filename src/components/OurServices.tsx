"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Store,
  Server,
  CreditCard,
  Globe,
  Rocket,
  SearchCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

export default function OurServices(): React.ReactElement {
  const t = useTranslations("services");

  const icons = [
    <Laptop key="laptop" className="h-6 w-6" aria-hidden="true" />,
    <Store key="store" className="h-6 w-6" aria-hidden="true" />,
    <Server key="server" className="h-6 w-6" aria-hidden="true" />,
    <CreditCard key="card" className="h-6 w-6" aria-hidden="true" />,
    <Globe key="globe" className="h-6 w-6" aria-hidden="true" />,
    <Rocket key="rocket" className="h-6 w-6" aria-hidden="true" />,
    <SearchCheck key="seo" className="h-6 w-6" aria-hidden="true" />,
  ];

  const serviceKeys = [0, 1, 2, 3, 4, 5, 6];

  return (
    <section
      id="services"
      className="bg-white dark:bg-trueGray-900 py-16"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6">
        <h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white capitalize"
        >
          {t("title")}{" "}
          <span className="text-slate-900 dark:text-white">
            {t("titleHighlight")}
          </span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {serviceKeys.map((index) => (
            <motion.article
              key={index}
              className="flex flex-col items-center rounded-2xl bg-white dark:bg-trueGray-800 p-6 text-center shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <span className="inline-flex rounded-full bg-[#1A4670] dark:bg-[#1A4670] p-3 text-indigo-50 dark:text-indigo-50 ring-1 ring-[#1A4670] dark:ring-white/10">
                {icons[index % icons.length]}
              </span>
              <h3 className="mt-3 text-lg md:text-xl font-semibold text-[#374151] dark:text-gray-200">
                {t(`items.${index}.title`)}
              </h3>
              <p className="mt-2 text-[#4B5563] dark:text-gray-400 leading-relaxed">
                {t(`items.${index}.description`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
