<<<<<<< HEAD
import AboutSection from "@/components/AboutSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AboutSection />
=======
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
>>>>>>> main
    </div>
  );
}
