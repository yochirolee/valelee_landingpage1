"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/marketing.jpg";
import { useTranslations } from "next-intl";

export const Hero = (): React.ReactElement => {
  const t = useTranslations("hero");

  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {t("title")}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {t("subtitle")}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="tel:+17864509223"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-[#1A4670] rounded-md"
              >
                {t("cta")}
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span> {t("portfolio")}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover rounded-lg"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            {t("trustedBy")}{" "}
            <span className="text-cyan-500">100+</span> {t("customers")}
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2">
              <a
                href="https://ctenvios.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/ctelogo.png"
                  alt="CTENVIOS"
                  width={110}
                  height={33}
                />
              </a>
            </div>

            <div>
              <a
                href="https://hennabymarlenmartin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/henna.png"
                  alt="HennaMiamiByMarlenMartin"
                  width={110}
                  height={33}
                />
              </a>
            </div>

            <div>
              <a
                href="https://www.rapidviaservicesllc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/rapidviaservices.png"
                  alt="Rapidviaservices"
                  width={110}
                  height={23}
                />
              </a>
            </div>

            <div>
              <a
                href="https://nika-llc.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/img/nika-logo-azul.png"
                  alt="Nika LLC"
                  width={110}
                  height={33}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
