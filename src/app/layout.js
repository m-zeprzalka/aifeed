import "./globals.css";

export const metadata = {
  title: "aifeed.pl - najlepsze informacje o AI",
  description: "Portal informacyjny o Sztucznej Inteligencji",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
