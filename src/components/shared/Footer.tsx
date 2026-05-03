import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white full-width py-12 px-6 mt-auto border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <Image
              src="/images/favicon en icon voor logo.png"
              alt="Samen Verder"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl"
            />
            <span className="text-xl font-bold text-on-background font-headline">
              Samen Verder
            </span>
          </Link>
          <p className="text-on-background/80 font-body text-sm leading-relaxed mb-8">
            Een veilige plek voor ouders. Wij bieden onafhankelijke steun, uitleg en een luisterend oor tijdens een ingrijpende periode.
          </p>
          {/* Crisis Warning Box */}
          <div className="bg-error-container/10 border border-error-container/20 rounded-2xl p-6 w-full">
            <h5 className="text-on-background font-headline text-sm font-bold flex items-center mb-2">
              <span className="material-symbols-outlined text-error text-lg mr-2">
                error
              </span>
              Crisis of directe hulp nodig?
            </h5>
            <p className="text-on-surface-variant text-xs font-body leading-relaxed">
              Is er sprake van acute onveiligheid of een crisissituatie? Neem direct contact op met 112, Veilig Thuis of je eigen hulpverlener.
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col items-start space-y-4">
          <h4 className="font-headline font-bold text-on-background mb-2">
            Informatie
          </h4>
          <Link
            className="text-on-background/80 hover:text-on-background transition-all font-body text-sm"
            href="/privacy"
          >
            Privacyverklaring
          </Link>
          <Link
            className="text-on-background/80 hover:text-on-background transition-all font-body text-sm"
            href="/voorwaarden"
          >
            Gebruiksvoorwaarden
          </Link>
          <Link
            className="text-on-background/80 hover:text-on-background transition-all font-body text-sm"
            href="/professionals"
          >
            Voor professionals
          </Link>
          <Link
            className="text-on-background/80 hover:text-on-background transition-all font-body text-sm"
            href="/buddy"
          >
            Buddy worden
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start space-y-4">
          <h4 className="font-headline font-bold text-on-background mb-2">
            Contact
          </h4>
          <a
            className="text-on-background/80 hover:text-on-background transition-all font-body text-sm flex items-center"
            href="mailto:hallo@samenverder.nl"
          >
            <span className="material-symbols-outlined text-sm mr-2">mail</span>
            E-mail: hallo@samenverder.nl
          </a>
          <a
            className="text-on-background/80 hover:text-on-background transition-all font-body text-sm flex items-center"
            href="https://wa.me/31612345678"
          >
            <span className="material-symbols-outlined text-sm mr-2">chat</span>
            WhatsApp: 06 12345678
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-surface-dim/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-on-background/60 font-body text-xs">
          © 2025 Samen Verder
        </p>
        <a
          href="https://websup.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <span className="text-on-background/60 font-body text-xs">Website ontwikkeld door</span>
          <Image
            src="/images/WebsUp (1).png"
            alt="WebsUp.nl"
            width={80}
            height={28}
            className="h-16 w-auto"
          />
        </a>
      </div>
    </footer>
  );
};
