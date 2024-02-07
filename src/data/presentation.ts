type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "fonsecajose.secundario@gmail.com",
  title: "Welcome, I’m José Fonseca 👋",
  // profile: "/profile.webp",
  description:
    "Hello, I'm a college student, currently on the second year of my bachelor's degree in *Eletrical and Computer Engineering at Instituto Superior Técnico*. This is where I'll post about my hobbies, projects and academics. Feel free to contact me if you like what you see here. ",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/jose-fonseca-7117ba220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8C7tEpbVQMyVUuHw3zUUGg%3D%3D",
    },
    {
      label: "Github",
      link: "https://github.com/Fonseca004",
    },
  ],
};

export default presentation;