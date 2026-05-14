export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "harry.s.clemente@gmail.com",
    href: "mailto:harry.s.clemente@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "/in/harryclemente",
    href: "https://www.linkedin.com/in/harryclemente/",
    external: true,
  },
  {
    label: "GitHub",
    value: "@harrybuildz",
    href: "https://github.com/harrybuildz",
    external: true,
  },
  {
    label: "Résumé",
    value: "Download PDF",
    href: "/resume.pdf",
    external: false,
  },
];
