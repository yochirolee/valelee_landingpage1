"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { useTranslations } from "next-intl";

import userOneImg from "../../public/img/marlen.png";
import userTwoImg from "../../public/img/dayana.png";
import userThreeImg from "../../public/img/user3.jpg";

const users = [
  { image: userOneImg, name: "Marlen Martin", title: "HennaMiamiByMarlenMartin" },
  { image: userTwoImg, name: "Dayana Rodriguez", title: "Daxia Clean Services" },
  { image: userThreeImg, name: "Orlen Escalona", title: "Rapidviaservices" },
];

export const Testimonials = (): React.ReactElement => {
  const t = useTranslations("testimonials");

  return (
    <Container>
      <div className="grid gap-6 md:gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map((index) => {
          const user = users[index];
          const quote = t(`items.${index}.quote`);
          const highlight = t.has(`items.${index}.highlight`)
            ? t(`items.${index}.highlight`)
            : null;

          return (
            <div
              key={index}
              className={index === 0 ? "lg:col-span-2 xl:col-auto" : ""}
            >
              <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14 rounded-2xl dark:bg-trueGray-800">
                <p className="text-lg sm:text-xl lg:text-lg leading-normal">
                  {highlight ? (
                    <QuoteWithHighlight quote={quote} highlight={highlight} />
                  ) : (
                    quote
                  )}
                </p>

                <Avatar
                  image={user.image}
                  name={user.name}
                  title={user.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

interface QuoteWithHighlightProps {
  quote: string;
  highlight: string;
}

function QuoteWithHighlight({
  quote,
  highlight,
}: Readonly<QuoteWithHighlightProps>): React.ReactElement {
  const parts = quote.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Mark key={index}>{part}</Mark>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

interface AvatarProps {
  image: typeof userOneImg;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>): React.ReactElement {
  return (
    <div className="flex items-center mt-6 sm:mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 sm:w-14 sm:h-14">
        <Image
          src={props.image}
          width={56}
          height={56}
          alt={`Avatar de ${props.name}`}
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-base sm:text-lg font-medium">{props.name}</div>
        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {props.title}
        </div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }): React.ReactElement {
  return (
    <>
      {" "}
      <mark className="text-cyan-800 bg-cyan-100 rounded-md ring-cyan-100 ring-4 dark:ring-cyan-900 dark:bg-cyan-900 dark:text-cyan-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
