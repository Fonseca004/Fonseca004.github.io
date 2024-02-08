export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "This Website",
    techs: ["Astro", "TailwindCSS"],
    link: "https://github.com/Fonseca004/Fonseca004.github.io",
  },
  {
    title: "Homeserver",
    techs: ["Proxmox", "TrueNAS"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Car Dashboard",
    techs: ["RaspberryPi"],
    link: "/",
    isComingSoon: true,
  }
];

export default projects;
