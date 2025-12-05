"use client";

import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = (): React.ReactElement => {
  const t = useTranslations("nav");
  const locale = useLocale();

  const navigation = [
    { name: t("services"), href: `/${locale}/#services` },
    { name: t("benefits"), href: `/${locale}/#us` },
    { name: t("faq"), href: `/${locale}/#faq` },
    { name: t("testimonials"), href: `/${locale}/#testimonials` },
    { name: t("followUs"), href: `/${locale}/#followus` },
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 md:p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href={`/${locale}`}>
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/valelee2.png"
                width="52"
                alt="N"
                height="52"
                className="w-16 h-16"
              />
            </span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden lg:flex items-center">
            <LanguageSwitcher />
          </div>
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://wa.me/17864509223"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-[#1A4670] rounded-md md:ml-5"
            >
              {t("startProject")}
            </Link>
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-500 focus:text-cyan-500 focus:bg-cyan-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="w-full px-4 py-2 -ml-4">
                    <LanguageSwitcher />
                  </div>

                  <Link
                    href="https://wa.me/17864509223"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-cyan-500 rounded-md lg:ml-5"
                  >
                    {t("startProject")}
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#1A4670] focus:text-[#1A4670] focus:bg-cyan-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
