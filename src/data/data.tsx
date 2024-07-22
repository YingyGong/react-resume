import {
  AcademicCapIcon,
  // ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yingying Gong Resume',
  description: "Personal Website built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Yingying Gong.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an undergraduate at <strong className="text-stone-100">California Institute of Technology (Caltech)</strong>{' '}
        studying Computer Science, currently interning at{' '}
        <strong className="text-stone-100">
          <a className="text-stone-100 underline" href="https://newrelic.com/about">
            New Relic
          </a>
        </strong>{' '}
        to build machine learning models for CPU utilization prediction.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I am a passionate reader, cook, driver, and cyclist. I like to learn new things and meet
        new people.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Rising junior studying CS at Caltech. I'm passionate about software engineering, machine learning, and applied probability. I'm currently interning at New Relic to build machine learning models for CPU utilization prediction. I am an easy-going person who loves to learn new things and meet new people. I am always open to new opportunities and challenges.`,
  aboutItems: [
    {label: 'Location', text: 'Portland, OR', Icon: MapIcon},
    // {label: 'Age', text: '19', Icon: CalendarIcon},
    {label: 'Hometown', text: 'Nanjing / China', Icon: FlagIcon},
    {label: 'Study', text: 'Computer Science at Caltech', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'Reading, Cooking, Driving, Cycling', Icon: SparklesIcon},

    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const languages = ['Python', 'C/C++', 'Rust', 'Java', 'MATLAB', 'JavaScript', 'HTML', 'CSS', 'Swift'];
export const technologies = ['Git', 'AWS', 'React.js', 'MySQL', 'PyTorch', 'Linux'];
export const methodologies = ['Agile', 'Scrum', 'OOP', 'DevOps', 'CI/CD'];

export const skills: SkillGroup[] = [
  // {
  //   name: 'Spoken languages',
  //   skills: [
  //     {
  //       name: 'English',
  //       level: 10,
  //     },
  //     {
  //       name: 'Chinese',
  //       level: 10,
  //     },
  //     // {
  //     //   name: 'Spanish',
  //     //   level: 3,
  //     // },
  //   ],
  // },
  {
    // name: 'Programming Languages',
    name: '',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'C',
        level: 5,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '2D Physics Engine for Video Game',
    description: (
      <>
        <p>Key Contributions:</p>
        <ul className="list-disc list-inside">
          <li>Led a Team of 4, familiarized with quality control, following agile and scrum methodologies.</li>
          <li>Developed memory-efficient C libraries for Physics forces and graphics in polygons by vector math.</li>
          <li>Designed a multimedia 2D video game, “Beaver Run”, with the Physics engine, visualized by SDL2.</li>
        </ul>
      </>
    ),
    url: 'https://github.com/YingyGong/Beaver-Run',
    image: porfolioImage1,
  },
  {
    title: 'DSPIN: Python Package for Network Construction from scRNA-seq Data',
    description: (
      <>
        <p>Key Contributions:</p>
        <ul className="list-disc list-inside">
          <li>
            Built the API with Object-Oriented Design, encapsulated functions for intuitive use by non-technical
            clients.
          </li>
          <li>
            Improved the computational efficiency up to about 250% by pseudolikelihood algorithms for high parameters.
          </li>
          <li>Transformed laboratory codes into a polished, industry-standard Python package, ensuring robustness.</li>
        </ul>
      </>
    ),
    url: 'https://pypi.org/project/dspin/1.0.0/#description',
    image: porfolioImage2,
  },

  {
    title: 'My-Grep: NFA-backed Fast Regex Engine',
    description: (
      <>
        <p>Key Contributions:</p>
        <ul className="list-disc list-inside">
          <li>3k+ Rust Codes from scratch</li>
          <li>
            Developed my own grep with a nondeterministic finite automata (NFA) and O(n) algorithm for string matching.
          </li>
          <li>
            Implemented prefix extraction for NFA together with Boyer-Moore literal search optimization for fast
            matching.
          </li>
        </ul>
      </>
    ),
    url: 'https://github.com/YingyGong/grep-optimization',
    image: porfolioImage4,
  },
  {
    title: 'Zip: Personal Gzip for Data Compression',
    description: (
      <>
        <p>Key Contributions:</p>
        <ul className="list-disc list-inside">
          <li>4k+ Rust Codes from scratch</li>
          <li>
            Built personal zip application with DEFLATE stream, compressed with canonical huffman coding and LZ77
            algorithm.
          </li>
          <li>
            Profiled codes to track its performance and compared with other compression algorithms in speed and space
            utilization.
          </li>
        </ul>
      </>
    ),
    url: 'https://github.com/YingyGong/build-my-own-zip',
    image: porfolioImage3,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sept 2022 - Present',
    location: 'California Institute of Technology',
    title: 'B.S. Computer Science',
    content: (
      <>
        <p>
          <strong>GPA:</strong> 4.0/4.0
        </p>
        <p>
          <strong>Featured Coursework:</strong> Algorithms, Machine Learning, Statistical Inference, Probability Models,
          Stochastic Processes, Software Design, Computer Systems, Data Structures
        </p>
      </>
    ),
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'New Relic Inc., Portland, OR',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Building machine learning models to predict CPU utilization, as a backend for RESTful API in data traffic
        monitoring.
      </p>
    ),
  },
  {
    date: 'Apr. 2023 - Dec. 2023',
    location: 'California Institute of Technology, Pasadena, CA',
    title: 'Research Assistant',
    content: (
      <>
        <p>
          <strong>Advisor:</strong> Dr. Matt Thomson, California Institute of Technology
        </p>
        <p>
          <strong>Project:</strong> Application of Dimensional-reduced Perturbation Network
        </p>
        <p className="mb-2">
          <strong>Field:</strong> Machine Learning for Science, Computatioal Biology
        </p>
        {/* <br />  */}
        <ul className="list-disc list-inside">
          <li>Worked directly with the principal investigator and a PhD on a research project pending publishing.</li>
          <li>Analyzed large scale (1M+ times 10k+) high dimensional data by dimensional reduction and clustering.</li>
          <li>Reconstructed integration networks from 2M+ cells by stochastic gradient descent and MCMC algorithm.</li>
          <li>Skilled in evaluating machine learning models and managing Linux clusters by Slurm.</li>
        </ul>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me.',
  items: [
    {
      type: ContactType.Email,
      text: 'Email',
      href: 'mailto:scrim-0.halo@icloud.com',
    },
    {
      type: ContactType.Location,
      text: 'Pasadena, CA',
      href: 'https://maps.app.goo.gl/WoAVwhUVdqwfWYzH7',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    {
      type: ContactType.Github,
      text: 'GitHub@YingyGong',
      href: 'https://github.com/YingyGong',
    },
    {
      type: ContactType.LinkedIn,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yingying-gong-321838257/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YingyGong'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mercury-yingying-gong/'},
  {label: 'Email', Icon: CalendarIcon, href: 'mailto:scrim-0.halo@icloud.com'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
