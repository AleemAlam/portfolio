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
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aleem-alam-6a09a5210/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ellu_aleem/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AleemAlam4/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
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
      img: 'https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png',
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
      name: 'django',
      img: 'https://cdn.iconscout.com/icon/free/png-512/django-1-282754.png',
    },
    {
      name: 'python',
      img: 'https://cdn.iconscout.com/icon/free/png-512/python-2752092-2284909.png',
    },
    {
      name: 'expressJs',
      img: 'https://pngimage.net/wp-content/uploads/2018/05/express-js-png-7.png',
    },
  ],
  blogs: [
    {
      frontmatter: {
        external: 'https://aleemalam.hashnode.dev/how-we-cloned-mondaycom-in-just-3-days',
        github: 'https://github.com/AleemAlam/monday.com-clone',
        title: 'How we cloned Monday.com in just 3 days.',
      },
      html:
        '<p> Monday.com is an awesome work management website that enables organizations to manage their tasks and projects</p>',
    },
    {
      frontmatter: {
        external:
          'https://aleemalam.hashnode.dev/only-html-css-javascript-is-possible-to-clone-dailydietboxescom-in-just-3-days',
        github: 'https://github.com/Rinish94/dailydietbox_clone',
        title:
          '(ONLY HTML CSS JAVASCRIPT) Is Possible To Clone DailyDietBoxes.com in just 3 days??',
      },
      html:
        '<p>Daily Diet Boxes is a startup to provide every individual, a way to secure his/her diet.</p>',
    },
  ],
  projects: [
    {
      title: 'Redbus.com',
      tech: ['React', 'Redux', 'Firebase', 'Node', 'Express', 'MongoDB'],
      github: 'https://github.com/Ashwani-Sahu/redbus-clone-masai',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1627762332983/Mm_D10_ZY.png?auto=compress',
      html:
        '<p>RedBus is an Indian online bus ticketing platform, providing ticket booking facilities through its website, iOS, and Android mobile apps.</p>',
      link: 'https://redbus-clone-frontend.vercel.app/',
    },
    {
      title: 'UrbanCompany.com',
      tech: ['React', 'Redux', 'Firebase', 'Json Server'],
      github: 'https://github.com/AleemAlam/Urban-Company',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1627237708246/iv1Q0sDiX.png?auto=compress',
      html:
        '<p>Urban Company is an Indian gig marketplace that offers home installation, maintenance and repair services, and home beauty and wellness services.</p>',
      link: 'https://urban-company-clone.netlify.app/',
    },
    {
      title: 'DailyDietBox.com',
      tech: ['HTML', 'CSS', 'Javascript', 'Json Server'],
      github: 'https://github.com/Rinish94/dailydietbox_clone',
      image:
        'https://aleemalam.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1616360871896%2FxE7Zb7ZJ3.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75',
      html:
        '<p>if you want to live a healthy life without compromising taste, DailyDietPlan.com is for you.</p>',
      link: 'https://daily-diet-box.netlify.app/',
    },
    {
      title: 'Monday.com',
      tech: ['HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/AleemAlam/monday.com-clone',
      image:
        'https://cdn.hashnode.com/res/hashnode/image/upload/v1612728428732/qNTKIyHB0.png?auto=compress,format&format=webp',
      html:
        '<p>Monday.com, legally Monday.com Ltd., is a Cloud-based platform that allows companies to create their own applications and work management software..</p>',
      link: 'https://clone-monday.netlify.app/',
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
