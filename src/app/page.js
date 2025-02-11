import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NewsSection from "@/components/sections/NewsSection";
import ToolsSection from "@/components/sections/ToolsSection";
import ResearchSection from "@/components/sections/ResearchSection";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-slate-950">
      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <HeroSection />
        <NewsSection />
        <ToolsSection />
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
}
