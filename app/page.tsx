export const dynamic = "force-dynamic";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import { getSiteData } from "@/lib/site-data";

export default async function Home() {
  const siteData = await getSiteData();
  const primaryEducation = siteData.educationEntries[0];

  if (!primaryEducation) {
    throw new Error("At least one education entry is required to render the portfolio.");
  }

  return (
    <IntroScreen name={siteData.profile.name}>
      <div className="min-h-screen noise-overlay">
        <Navbar
          profile={siteData.profile}
          navigationItems={siteData.navigationItems}
          socialLinks={siteData.socialLinks}
        />
        <main>
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
    </IntroScreen>
  );
}
