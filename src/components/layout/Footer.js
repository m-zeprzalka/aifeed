export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center">
              <img
                src="logo-dark.webp"
                alt="AIFeed"
                className="h-8 w-auto hidden dark:block"
              />
              <img
                src="logo-dark.webp"
                alt="AIFeed"
                className="h-8 w-auto dark:hidden"
              />
            </div>
            <p className="text-gray-300">
              Twoje codzienne źródło informacji na temat AI. Wiarygodny
              reasearch z najpopularniehzych serwisów
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Linki</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-200 transition-colors"
                >
                  O serwisie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-200 transition-colors"
                >
                  Dokumentacja
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-200 transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-green-200 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-200 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-200 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 aifeed.pl - Michał Zeprzałka</p>
        </div>
      </div>
    </footer>
  );
}
