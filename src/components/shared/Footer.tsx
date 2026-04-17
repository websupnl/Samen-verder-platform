import Link from "next/link";

const footerLinks = {
  platform: [
    { name: "Over ons", href: "/over-ons" },
    { name: "Hoe werkt het", href: "/hoe-werkt-het" },
    { name: "Professionals", href: "/professionals" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Wat nu?", href: "/wat-nu" },
    { name: "Veelgestelde vragen", href: "/faq" },
    { name: "Privacybeleid", href: "/privacy" },
    { name: "Voorwaarden", href: "/voorwaarden" },
  ],
  omgevingen: [
    { name: "Ouderomgeving", href: "/ouderomgeving" },
    { name: "Buddyomgeving", href: "/buddyomgeving" },
    { name: "Beheeromgeving", href: "/beheeromgeving" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-sage-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="text-xl font-bold tracking-tight text-sage-900">
                Samen Verder
              </span>
            </Link>
            <p className="mt-4 text-sm text-sage-600 max-w-xs">
              Een veilig platform waar ouders en buddies elkaar vinden voor steun en verbinding.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-sage-900 uppercase tracking-wider">
              Platform
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-sage-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-sage-900 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-sage-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-sage-900 uppercase tracking-wider">
              Omgevingen
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.omgevingen.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-sage-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-sage-50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-sage-500">
            &copy; {new Date().getFullYear()} Samen Verder. Alle rechten voorbehouden.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-sm text-sage-400">
            <span>Powered by</span>
            <span className="font-semibold text-sage-600">WebsUp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
