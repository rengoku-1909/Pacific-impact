import NavigationBar from '@/components/sections/navigation-bar';
import HeroSection from '@/components/sections/hero-section';
import UnderstandingSection from '@/components/sections/understanding-section';
import CountriesGridSection from '@/components/sections/countries-grid-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavigationBar />
      <HeroSection />
      <UnderstandingSection />
      <CountriesGridSection />
      <Footer />
    </main>
  );
}