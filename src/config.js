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
      name: 'Blogs',
      url: '/#blogs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  tech: [
    {
      name: 'javascript',
      img: 'https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png',
    },
    {
      name: 'React',
      img: 'https://cdn.iconscout.com/icon/free/png-512/react-4-1175110.png',
    },
    {
      name: 'Redux',
      img: 'https://cdn.iconscout.com/icon/free/png-512/redux-3629018-3030243.png',
    },
    {
      name: 'nodejs',
      img: 'https://cdn.iconscout.com/icon/free/png-512/node-js-3-1174937.png',
    },
    {
      name: 'mongoDB',
      img: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png',
    },
    {
      name: 'HTML',
      img: 'https://cdn.iconscout.com/icon/free/png-64/html-2752158-2284975.png',
    },
    {
      name: 'CSS',
      img: 'https://cdn.iconscout.com/icon/free/png-64/css-131-722685.png',
    },
    {
      name: 'expressJs',
      img: 'https://pngimage.net/wp-content/uploads/2018/05/express-js-png-7.png',
    },
  ],
  blogs: [
    {
      frontmatter: {
        external:
          'https://amankumar.hashnode.dev/clone-of-airgarage-website-within-3-day',
        github: 'https://github.com/amankumarsuman/Airgarage.git',
        title: ' Airgarage website clone using HTML,css and Javascript.',
      },
      html:
        '<p>Hello readers, in this blog I am going to share my experience and learnings from this project. This is a group project. In the very beginning, we have studied the whole Airgarage Website and came up with a plan to divide the key features among the three of us. The plan was to build the landing page first then work on important features.</p>',
    },
    {
      frontmatter: {
        external: 'https://amankumar.hashnode.dev/lately-website-clone',
        github: 'https://github.com/amankumarsuman/lately.git',
        title: 'The cloning of Lately.io',
      },
      html:
        '<p> How often, as full stack developer , we chose to execute a duplicate of some element that an outsider site has in our own site? As a beginner at whatever point you need to begin a project you face bunches of difficulties. You have less amount of thought regarding organizing an project and all these. </p>',
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
