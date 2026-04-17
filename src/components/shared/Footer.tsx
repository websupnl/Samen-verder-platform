import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#f5f3f0] dark:bg-[#1a1c1a] full-width py-12 px-6 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-start">
          <Link
            className="text-xl font-bold text-[#5c614f] dark:text-[#e0e5ce] font-headline mb-4"
            href="/"
          >
            Samen Verder
          </Link>
          <p className="text-[#313330]/80 dark:text-[#fbf9f6]/80 font-body text-sm leading-relaxed mb-8">
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
          <h4 className="font-headline font-bold text-[#5c614f] dark:text-[#b5baa4] mb-2">
            Informatie
          </h4>
          <Link
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm"
            href="/privacy"
          >
            Privacyverklaring
          </Link>
          <Link
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm"
            href="/voorwaarden"
          >
            Gebruiksvoorwaarden
          </Link>
          <Link
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm"
            href="/professionals"
          >
            Voor professionals
          </Link>
          <Link
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm"
            href="/buddy"
          >
            Buddy worden
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start space-y-4">
          <h4 className="font-headline font-bold text-[#5c614f] dark:text-[#b5baa4] mb-2">
            Contact
          </h4>
          <a
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm flex items-center"
            href="mailto:hallo@samenverder.nl"
          >
            <span className="material-symbols-outlined text-sm mr-2">mail</span>
            E-mail: hallo@samenverder.nl
          </a>
          <a
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm flex items-center"
            href="https://wa.me/31612345678"
          >
            <span className="material-symbols-outlined text-sm mr-2">chat</span>
            WhatsApp: 06 12345678
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-surface-dim/30">
        <p className="text-[#313330]/60 dark:text-[#fbf9f6]/60 font-body text-xs text-center">
          © 2025 Samen Verder
        </p>
      </div>
    </footer>
  );
};
