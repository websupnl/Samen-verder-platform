import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="docked full-width top-0 sticky z-50 bg-[#fbf9f6]/80 dark:bg-[#313330]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link
          className="text-2xl font-bold tracking-tight text-[#5c614f] dark:text-[#e0e5ce] font-headline"
          href="/"
        >
          Samen Verder
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            className="text-[#313330]/70 dark:text-[#fbf9f6]/70 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-colors text-sm font-medium font-headline"
            href="/ouders"
          >
            Ouders
          </Link>
          <Link
            className="text-[#313330]/70 dark:text-[#fbf9f6]/70 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-colors text-sm font-medium font-headline"
            href="/professionals"
          >
            Professionals
          </Link>
          <Link
            className="text-[#313330]/70 dark:text-[#fbf9f6]/70 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-colors text-sm font-medium font-headline"
            href="/buddy"
          >
            Buddy Worden
          </Link>
          <Link
            className="text-[#313330]/70 dark:text-[#fbf9f6]/70 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-colors text-sm font-medium font-headline"
            href="/hoe-werkt-het"
          >
            Uitleg
          </Link>
          <Link
            className="text-[#313330]/70 dark:text-[#fbf9f6]/70 hover:text-[#5c614f] dark:hover:text-[#e0e5ce] transition-colors text-sm font-medium font-headline"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-surface-container-highest text-on-surface hover:bg-surface-variant transition-colors font-headline"
            href="#"
          >
            Praat anoniem
          </Link>
          <Link
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-primary text-on-primary hover:bg-primary-dim transition-colors shadow-[0_4px_14px_rgba(49,51,48,0.06)] font-headline"
            href="/aanmelden"
          >
            Vraag een buddy aan
          </Link>
        </div>
        {/* Mobile Menu Toggle (Visual Only) */}
        <button className="md:hidden text-[#5c614f] p-2 hover:bg-[#f5f3f0]/50 rounded-lg transition-all">
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </nav>
  );
};
