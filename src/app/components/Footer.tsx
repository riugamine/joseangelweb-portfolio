"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "../../lib/data";
import { useTranslation } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: t('navbar.about'), href: "/#about" },
    { name: t('navbar.services'), href: "/#services" },
    { name: t('navbar.projects'), href: "/#projects" },
    { name: t('navbar.contact'), href: "/#contact" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                JoseAngelWeb
              </span>
            </Link>
            <p className="mt-4 max-w-md text-gray-600 dark:text-gray-300">
              {t('footer.description')}
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800 ${social.color} hover:bg-opacity-90`}
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t('footer.quickLinks.title')}
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                {t('footer.contact.title')}
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-300">
                  {t('contact.locationValue')}
                </li>
                <li>
                  <a
                    href="mailto:jangel9829@gmail.com"
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                  >
                    jangel9829@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+584126893533"
                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-300"
                  >
                    +58 412 689 35 33
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} JoseAngelWeb. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
