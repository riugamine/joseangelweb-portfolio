"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCreditCard,
  faLocationDot,
  faCode,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { socialLinks } from "../../lib/data";
import { useTranslation } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Services() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const { t, language } = useTranslation();

// ... existing code ...
const services = [
  {
    icon: faShoppingCart,
    title: t("services.ecommerce.title"),
    description: t("services.ecommerce.description"),
    features: translations.services.ecommerce[`features_${language}`],
    size: "col-span-1 md:col-span-2",
    color: "bg-blue-900/10 text-blue-500",
  },
  {
    icon: faCreditCard,
    title: t("services.payments.title"),
    description: t("services.payments.description"),
    features: translations.services.payments[`features_${language}`],
    color: "bg-green-900/10 text-green-500",
  },
  {
    icon: faLocationDot,
    title: t("services.geolocation.title"),
    description: t("services.geolocation.description"),
    features: translations.services.geolocation[`features_${language}`],
    color: "bg-amber-900/10 text-amber-500",
  },
  {
    icon: faCode,
    title: t("services.custom.title"),
    description: t("services.custom.description"),
    features: translations.services.custom[`features_${language}`],
    size: "col-span-1 md:col-span-2",
    color: "bg-purple-900/10 text-purple-500",
  },
];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="services"
      className="relative py-24 bg-background transition-colors duration-300"
    >
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.size} py-6 group hover:shadow-lg transition-all duration-300 bg-primary/30 backdrop-blur-sm border-muted relative overflow-hidden`}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/25 to-secondary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
                whileHover={{ scale: 1.02 }}
              />
              <CardHeader>
                <motion.div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
                </motion.div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground/90">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-background/50 border-muted-foreground/20 text-foreground hover:bg-muted/50 transition-colors duration-300"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Call to Action Card */}
          <Card className=" py-6 col-span-1 sm:col-span-2 group hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/50 to-secondary/50 backdrop-blur-sm border-muted">
            <CardHeader className="flex flex-col items-start">
              <CardTitle className="text-2xl font-bold flex items-center justify-between w-full text-foreground">
                {t("services.cta.title")}
                <motion.a
                  href="#contact"
                  className="text-primary group-hover:translate-x-2 transition-transform duration-300"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 320 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6" />
                </motion.a>
              </CardTitle>
              <CardDescription className="mt-4 text-base sm:text-lg text-white">
                {t("services.cta.description")}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-white hover:text-primary transition-colors duration-300 group/social`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 10 }}
                    >
                      <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-full -z-10 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"
                        initial={false}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
