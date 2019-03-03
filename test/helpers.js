const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Nuruddin Nasiruddin',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Nuruddin Nasiruddin',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Nuruddin Nasiruddin',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Nuruddin Nasiruddin',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Nuruddin Nasiruddin',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
