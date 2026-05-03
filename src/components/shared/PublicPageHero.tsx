import { ReactNode } from "react";
import Image from "next/image";

type PublicPageHeroProps = {
  title: string;
  description: string;
  children?: ReactNode;
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
  imageFullBleed?: boolean;
};

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
        {/* Foto tot aan de rechterrand */}
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sage-900 via-sage-900/40 to-transparent" />
        </div>

        {/* Tekst in container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className={`max-w-xl ${isCenter ? "mx-auto text-center" : ""}`}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-6 text-xl leading-8 text-sage-200">{description}</p>
            {children ? <div className="mt-10">{children}</div> : null}
          </div>
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
              <div className={isCenter ? "max-w-xl text-center" : "max-w-xl"}>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
                <p className="mt-6 text-xl leading-8 text-sage-200">{description}</p>
                {children ? <div className="mt-10">{children}</div> : null}
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sage-900/60 to-sage-900/10" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-sage-900 py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-xl leading-8 text-sage-200">{description}</p>
          {children ? <div className="mt-10">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
