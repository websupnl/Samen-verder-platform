"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type PublicPageHeroProps = {
  title: string;
  description: string;
  children?: ReactNode;
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
  imageFullBleed?: boolean;
};

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const heroImage = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

function HeroText({ title, description, children, isCenter }: { title: string; description: string; children?: ReactNode; isCenter: boolean }) {
  return (
    <motion.div
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className={isCenter ? "mx-auto max-w-xl text-center" : "max-w-xl"}
    >
      <motion.h1 variants={heroItem} className="text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </motion.h1>
      <motion.p variants={heroItem} className="mt-6 text-xl leading-8 text-sage-200">
        {description}
      </motion.p>
      {children ? <motion.div variants={heroItem} className="mt-10">{children}</motion.div> : null}
    </motion.div>
  );
}

export function PublicPageHero({
  title,
  description,
  children,
  align = "left",
  image,
  imageAlt = "",
  imageFullBleed = false,
}: PublicPageHeroProps) {
  const isCenter = align === "center";

  if (image && imageFullBleed) {
    return (
      <section className="bg-sage-900 text-white overflow-hidden relative min-h-[480px] flex items-center">
        <motion.div
          variants={heroImage}
          initial="hidden"
          animate="visible"
          className="absolute inset-y-0 right-0 w-1/2 hidden lg:block"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900 via-sage-900/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <HeroText title={title} description={description} isCenter={isCenter}>
            {children}
          </HeroText>
        </div>
      </section>
    );
  }

  if (image) {
    return (
      <section className="bg-sage-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            <div className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center ${isCenter ? "justify-center" : ""}`}>
              <HeroText title={title} description={description} isCenter={isCenter}>
                {children}
              </HeroText>
            </div>
            <motion.div
              variants={heroImage}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sage-900/60 to-sage-900/10" />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sage-900 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroText title={title} description={description} isCenter={isCenter}>
          {children}
        </HeroText>
      </div>
    </section>
  );
}
