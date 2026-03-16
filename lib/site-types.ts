export type Language = "pt" | "en";

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface ProfileData {
  id: string;
  name: string;
  headlinePt: string;
  headlineEn: string;
  profileImagePath: string;
  cvFilePath: string;
  locationPt: string;
  locationEn: string;
  website: string;
  email: string;
  phone: string;
  yearsOfProgramming: number;
  projectsDeveloped: number;
  englishLevel: string;
}

export interface NavigationItemData {
  id: string;
  slug: string;
  labelPt: string;
  labelEn: string;
  href: string;
  visible: boolean;
  sortOrder: number;
}

export interface SocialLinkData {
  id: string;
  platform: string;
  label: string;
  href: string;
  visibleInSidebar: boolean;
  visibleInContact: boolean;
  visibleInFooter: boolean;
  sortOrder: number;
}

export interface ContactDetailData {
  id: string;
  type: string;
  valuePt: string;
  valueEn: string;
  href: string | null;
  sortOrder: number;
}

export interface SpokenLanguageData {
  id: string;
  slug: string;
  namePt: string;
  nameEn: string;
  levelPt: string;
  levelEn: string;
  sortOrder: number;
}

export interface SkillData {
  id: string;
  name: string;
  level: string;
  sortOrder: number;
}

export interface SkillCategoryData {
  id: string;
  slug: string;
  labelPt: string;
  labelEn: string;
  sortOrder: number;
  skills: SkillData[];
}

export interface DailyTechnologyData {
  id: string;
  name: string;
  sortOrder: number;
}

export interface ExperienceBulletData {
  id: string;
  textPt: string;
  textEn: string;
  sortOrder: number;
}

export interface ExperienceData {
  id: string;
  slug: string;
  rolePt: string;
  roleEn: string;
  company: string;
  periodPt: string;
  periodEn: string;
  technologies: string[];
  current: boolean;
  sortOrder: number;
  bullets: ExperienceBulletData[];
}

export interface ProjectData {
  id: string;
  slug: string;
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  academic: boolean;
  sortOrder: number;
}

export interface EducationHighlightData {
  id: string;
  textPt: string;
  textEn: string;
  sortOrder: number;
}

export interface EducationEntryData {
  id: string;
  slug: string;
  degreePt: string;
  degreeEn: string;
  institution: string;
  periodPt: string;
  periodEn: string;
  descriptionPt: string;
  descriptionEn: string;
  sortOrder: number;
  highlights: EducationHighlightData[];
}

export interface SiteData {
  profile: ProfileData;
  content: Record<string, LocalizedText>;
  navigationItems: NavigationItemData[];
  socialLinks: SocialLinkData[];
  contactDetails: ContactDetailData[];
  spokenLanguages: SpokenLanguageData[];
  skillCategories: SkillCategoryData[];
  dailyTechnologies: DailyTechnologyData[];
  experiences: ExperienceData[];
  projects: ProjectData[];
  educationEntries: EducationEntryData[];
}
