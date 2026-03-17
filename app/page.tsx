import Sidebar from "@/components/SideBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { getSiteData } from "@/lib/site-data";

export default async function Home() {
  const siteData = await getSiteData();
  const primaryEducation = siteData.educationEntries[0];

  if (!primaryEducation) {
    throw new Error("At least one education entry is required to render the portfolio.");
  }

  return (
    <div className="min-h-screen noise-overlay">
      <Sidebar
        profile={siteData.profile}
        content={siteData.content}
        navigationItems={siteData.navigationItems}
        socialLinks={siteData.socialLinks}
      />
      <main className="lg:ml-72 xl:ml-80">
        <div className="h-16 lg:hidden" />
        
        <HeroSection profile={siteData.profile} content={siteData.content} />
        <AboutSection
          profile={siteData.profile}
          content={siteData.content}
          spokenLanguages={siteData.spokenLanguages}
          educationEntry={primaryEducation}
        />
        <SkillsSection
          content={siteData.content}
          skillCategories={siteData.skillCategories}
          dailyTechnologies={siteData.dailyTechnologies}
        />
        <ExperienceSection
          content={siteData.content}
          experiences={siteData.experiences}
          profile={siteData.profile}
        />
        <ProjectsSection content={siteData.content} projects={siteData.projects} />
        <EducationSection
          content={siteData.content}
          educationEntries={siteData.educationEntries}
        />
        <ContactSection
          content={siteData.content}
          contactDetails={siteData.contactDetails}
          socialLinks={siteData.socialLinks}
        />

        <Footer
          profile={siteData.profile}
          content={siteData.content}
          navigationItems={siteData.navigationItems}
          socialLinks={siteData.socialLinks}
        />
      </main>
    </div>
  );
}
