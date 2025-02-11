import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-950 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="logo-dark.webp"
              alt="AIFeed"
              className="h-8 w-auto hidden dark:block"
            />
            <img
              src="logo.webp"
              alt="AIFeed"
              className="h-8 w-auto dark:hidden"
            />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-slate-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-200 transition-colors"
              >
                Odśwież
              </a>
              {/* pozostałe linki tak samo */}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
