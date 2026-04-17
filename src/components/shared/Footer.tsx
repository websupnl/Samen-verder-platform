import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#f5f3f0] dark:bg-[#1a1c1a] full-width py-12 px-6 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-start">
          <Link
            className="text-xl font-bold text-[#5c614f] dark:text-[#e0e5ce] font-headline mb-6"
            href="/"
          >
            Samen Verder
          </Link>
          <p className="text-[#313330]/80 dark:text-[#fbf9f6]/80 font-body text-sm leading-relaxed mb-4">
            Een veilige plek voor ouders.
          </p>
          {/* Crisis Warning Box */}
          <div className="bg-error-container/20 border border-error-container rounded-xl p-4 mt-2">
            <p className="text-on-background font-body text-sm font-bold flex items-center mb-1">
              <span className="material-symbols-outlined text-error text-sm mr-2">
                warning
              </span>
              Crisis? Bel direct de hulplijn.
            </p>
            <p className="text-on-surface-variant text-xs font-body">
              Bij acuut gevaar, bel 112. Voor spoedhulp jeugd buiten
              kantooruren, neem contact op met Spoedeisende Zorg in jouw regio.
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
            Privacy Policy
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
            Professionals
          </Link>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start space-y-4">
          <h4 className="font-headline font-bold text-[#5c614f] dark:text-[#b5baa4] mb-2">
            Contact
          </h4>
          <Link
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm flex items-center"
            href="/contact"
          >
            <span className="material-symbols-outlined text-sm mr-2">phone</span>
            Contact: +31 00 000 000
          </Link>
          <Link
            className="text-[#313330]/80 dark:text-[#fbf9f6]/80 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-all font-body text-sm flex items-center"
            href="#"
          >
            <span className="material-symbols-outlined text-sm mr-2">chat</span>
            WhatsApp Support
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-surface-dim/30">
        <p className="text-[#313330]/60 dark:text-[#fbf9f6]/60 font-body text-xs text-center">
          © 2024 Samen Verder.
        </p>
      </div>
    </footer>
  );
};
