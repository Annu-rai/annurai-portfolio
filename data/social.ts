import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  type Icon,
} from "@tabler/icons-react";

export type Social = {
  label: string;
  href: string;
  icon: Icon;
};

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/Annu-rai", icon: IconBrandGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/annu-kumari-453a03142/",
    icon: IconBrandLinkedin,
  },
  { label: "Email", href: "mailto:annuece92@gmail.com", icon: IconMail },
];
