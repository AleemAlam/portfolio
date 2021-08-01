module.exports = {
  email: 'amankumarsuman.ssjha143@gmail.com',

  logo:
    'M 32.55 49.63 L 29.82 42.56 L 12.39 42.56 L 9.8 49.63 L 0 49.63 L 20.65 0 L 21.35 0 L 42.07 49.63 L 32.55 49.63 Z M 14.91 35.77 L 27.23 35.77 L 22.12 22.47 L 20.93 18.55 L 19.81 22.47 L 14.91 35.77 Z',

  logo_alphabet_g_position: 'translate(29.000000, 19.000000)',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/amankumarsuman',
    },
    // {
    //   name: 'Gmail',
    //   url: 'amankumarsuman.ssjha143@gmail.com',
    // },
    {
      name: 'Twitter',
      url: 'https://twitter.com/amankumarsuman1',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aman-kumar-b683b614b/',
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
      title: 'Redbus Website Clone',
      tech: ['React', 'Redux', 'Firebase', 'Json Server'],
      github: 'https://github.com/amankumarsuman/redbus-clone-masai.git',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1627762332983/Mm_D10_ZY.png?auto=compress',
      html:
        '<p>RedBus is the world largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes..</p>',
    },
    {
      title: 'Timecamp Website Clone',
      tech: ['React', 'Redux', 'Firebase', 'Json Server'],
      github: 'https://github.com/amankumarsuman/unit-3-time-camp-clone.git',
      image:
        'https://user-images.githubusercontent.com/68987839/127099965-61679718-960a-4bed-b746-80b2dccce78a.png',
      html:
        '<p>Time camp is a Free time tracking software.</p>',
    },
    {
      title: 'Airgarage Website Clone',
      tech: ['HTML', 'CSS', 'Javascript', 'Json Server'],
      github: 'https://github.com/amankumarsuman/Airgarage.git',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1612848146327/4XoAYR5IyC.png?auto=compress,format&format=webp',
      html:
        '<p>AirGarage modernizes your parking assets with one streamlined service covering enforcement, payment collection, maintenance and more.</p>',
    },
    {
      title: 'Lately Website Clone',
      tech: ['HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/AleemAlam/monday.com-clone',
      image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1627808399624/9RZOSBY5a.png",
        // 'https://drive.google.com/file/d/1Hik3kSBiDsT-9qUrcB_0XhcF5E7j_Sc2/view',
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
