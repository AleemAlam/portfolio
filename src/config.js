module.exports = {
  email: 'aleem.alam@outlook.com',

  logo:
    'M 32.55 49.63 L 29.82 42.56 L 12.39 42.56 L 9.8 49.63 L 0 49.63 L 20.65 0 L 21.35 0 L 42.07 49.63 L 32.55 49.63 Z M 14.91 35.77 L 27.23 35.77 L 22.12 22.47 L 20.93 18.55 L 19.81 22.47 L 14.91 35.77 Z',

  logo_alphabet_g_position: 'translate(29.000000, 19.000000)',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AleemAlam',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ellu_aleem/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AleemAlam4/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aleem-alam-6a09a5210/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  projects: [
    {
      title: 'UrbanCompany.com',
      tech: ['React', 'Redux', 'Firebase', 'Json Server'],
      github: 'https://github.com/AleemAlam/monday.com-clone',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1627237708246/iv1Q0sDiX.png?auto=compress',
      html:
        '<p>Urban Company is an Indian gig marketplace that offers home installation, maintenance and repair services, and home beauty and wellness services.</p>',
    },
    {
      title: 'DailyDietBox.com',
      tech: ['HTML', 'CSS', 'Javascript', 'Json Server'],
      github: 'https://github.com/AleemAlam/monday.com-clone',
      image:
        'https://aleemalam.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1616360871896%2FxE7Zb7ZJ3.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
      html:
        '<p>if you want to live a healthy life without compromising taste, DailyDietPlan.com is for you.</p>',
    },
    {
      title: 'Monday.com',
      tech: ['HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/AleemAlam/monday.com-clone',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1612728428732/qNTKIyHB0.png?auto=compress,format&format=webp',
      html:
        '<p>Monday.com, legally Monday.com Ltd., is a Cloud-based platform that allows companies to create their own applications and work management software..</p>',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
