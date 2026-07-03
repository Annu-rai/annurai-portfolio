import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
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
  { label: "LinkedIn", href: "https://linkedin.com/in/annurai", icon: IconBrandLinkedin },
  { label: "X", href: "https://x.com/annurai", icon: IconBrandX },
  { label: "Email", href: "mailto:said.moridi@gmail.com", icon: IconMail },
];
