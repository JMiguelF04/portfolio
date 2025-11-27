export interface ContactInfo {
  type: "email" | "phone" | "website" | "location";
  value: string;
  href?: string;
}

export const contactData: ContactInfo[] = [
  {
    type: "email",
    value: "jmferreira0307@gmail.com",
    href: "mailto:jmferreira0307@gmail.com",
  },
  {
    type: "phone",
    value: "+351 934 597 715",
    href: "tel:+351934597715",
  },
  {
    type: "website",
    value: "www.jmdaf.pt",
    href: "https://www.jmdaf.pt",
  },
  {
    type: "location",
    value: "Lisboa, Portugal",
  },
];

