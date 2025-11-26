import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <Sidebar />
      
      {/* Main Content - offset for sidebar on desktop */}
      <main className="lg:ml-72">
        {/* Mobile spacer for fixed header */}
        <div className="h-16 lg:hidden" />
        
        <HeroSection />
     
        <Footer />
      </main>
    </div>
  );
}
