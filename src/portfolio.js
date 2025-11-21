/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shril's Portfolio",
  description:
    "A Data Analyst & Scientist fueled by curiosity and impact—using data to solve real problems, spark better questions, and drive meaningful change.",
  og: {
    title: "Shril Patel Portfolio",
    type: "website",
    url: "http://zerozulu.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Shril Patel",
  logo_name: "Shril Patel",
  nickname: "Zerol0l",
  subTitle:
    "A Data Analyst & Scientist fueled by curiosity and impact—using data to solve real problems, spark better questions, and drive meaningful change.",
  resumeLink: "",
  portfolio_repository: "https://github.com/ZeroZulu/SP-Portfolio",
  githubProfile: "https://github.com/ZeroZulu",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/zerozulu",
  // linkedin: "https://www.linkedin.com/in/shril-patel-020504284/",
  // gmail: "zerol0llabz@gmail.com",
  // twitter: "https://twitter.com/Zer0Labz"

  {
    name: "Github",
    link: "https://github.com/ZeroZulu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shril-patel-020504284/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Dev",
    link: "https://dev.to/zerozulu",
    fontAwesomeIcon: "fa-dev", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Zer0Labz",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Gmail",
    link: "mailto:zerol0llabz@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Analyst/Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Building robust data pipelines and automated workflows for large-scale data extraction, processing, and analysis",
        "⚡ Scripting data processing tasks and automation using Bash and shell scripts for efficient pipeline orchestration",
        "⚡ Designing and deploying time-series and machine learning algorithms for contextual and temporal data mapping",
        "⚡ Visualizing pipelines and data flows using Plotly and Dash for better understanding and debugging",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#00758F" },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: { color: "#4EAA25" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: { backgroundColor: "white", color: "#D00000" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Conda",
          fontAwesomeClassname: "simple-icons:anaconda",
          style: { color: "#4B8BBE" },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        // {
        //   skillName: "Matplotlib",
        //   fontAwesomeClassname: "simple-icons:matplotlib",
        //   style: { color: "#F9A03F" },
        // },
        // {
        //   skillName: "Seaborn",
        //   fontAwesomeClassname: "simple-icons:seaborn",
        //   style: { color: "#3E5A99" },
        // },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: { color: "#3F4B8E" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
      ],
    },
    {
      title: "Data Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing clear, impactful visual narratives using tools like Tableau, Power BI, Plotly, and Dash",
        "⚡ Creating interactive dashboards and reports to surface insights and drive data-informed decisions",
        "⚡ Translating complex datasets into intuitive visuals that resonate with technical and non-technical audiences",
        "⚡ Building custom visual components using D3.js and JavaScript libraries for tailored data storytelling",
        "⚡ Streamlining visualization workflows with Python (Pandas, Seaborn, Matplotlib) and SQL-based pipelines",
        "⚡ Collaborating with cross-functional teams to embed visual insights into products, presentations, and strategies",
        "⚡ Applying design principles and user experience thinking to enhance clarity, accessibility, and impact",
      ],
      softwareSkills: [
        //{
        //  skillName: "HTML5",
        //  fontAwesomeClassname: "simple-icons:html5",
        //  style: {
        //   color: "#E34F26",
        //  },
        //},
        //{
        //  skillName: "CSS3",
        //  fontAwesomeClassname: "fa-css3",
        //  style: {
        //    color: "#1572B6",
        //  },
        //},
        //{
        //  skillName: "Sass",
        //  fontAwesomeClassname: "simple-icons:sass",
        //  style: {
        //    color: "#CC6699",
        //  },
        //},
        //{
        //  skillName: "JavaScript",
        //  fontAwesomeClassname: "simple-icons:javascript",
        //  style: {
        //    backgroundColor: "#000000",
        //    color: "#F7DF1E",
        //  },
        //},
        //{
        //  skillName: "ReactJS",
        //  fontAwesomeClassname: "simple-icons:react",
        //  style: {
        //    color: "#61DAFB",
        //  },
        //},
        //{
        //  skillName: "NodeJS",
        //  fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //  style: {
        //    color: "#339933",
        //  },
        //},
        //{
        //  skillName: "NPM",
        //  fontAwesomeClassname: "simple-icons:npm",
        //  style: {
        //    color: "#CB3837",
        //  },
        //},
        //{
        //  skillName: "Yarn",
        //  fontAwesomeClassname: "simple-icons:yarn",
        //  style: {
        //    color: "#2C8EBB",
        //  },
        //},
        //{
        //  skillName: "Gatsby",
        // fontAwesomeClassname: "simple-icons:gatsby",
        //  style: {
        //    color: "#663399",
        //  },
        //},
        //{
        //  skillName: "Flutter",
        //  fontAwesomeClassname: "simple-icons:flutter",
        //  style: {
        //    color: "#02569B",
        //  },
        //},
      ],
    },
    {
      title: "Tools & Platforms",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Containerized full-stack applications using Docker for reproducible environments",
        "⚡ Hands-on with PostgreSQL and MongoDB for relational and NoSQL data management",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Zerolol/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/Zerol0l",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/zerol0l",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "New York Institue of Technology",
      subtitle: "B.Sci. in Biology",
      logo_path: "NYIT_logo.png",
      alt_name: "NYIT",
      duration: "Sep 2010 - May 2015",
      descriptions: [
        "⚡Completed a Bachelor of Science in Biology with a strong foundation in core subjects including Genetics, Molecular Biology, Microbiology, Ecology, Physiology, and Biochemistry.",
        "⚡Developed robust analytical skills through interdisciplinary coursework in Statistics, Mathematics, and Chemistry—building a data-driven approach to solving complex scientific problems.",
        "⚡Applied scientific thinking and problem-solving in collaborative environments, honing skills transferable to data science—such as hypothesis testing, data visualization, and analytical reporting.",
      ],
      website_link: "https://www.nyit.edu",
    //{
    //  title: "MITx — Massachusetts Institute of Technology",
    //  subtitle: "MicroMasters in Statistics & Data Science",
    //  logo_path: "MITx.jpg",
   //   alt_name: "MITx",
   //   duration: "2025 - 2026",
   //   descriptions: [
    //    "⚡Earned the MITx MicroMasters credential in Statistics and Data Science, completing rigorous graduate-level coursework across Probability, Statistical Inference, Machine Learning, and Data Analysis in Social Sciences.",
    //    "⚡Built advanced quantitative skills using modern data science methodologies—covering supervised/unsupervised learning, causal inference, Bayesian modeling, experimentation, and large-scale data workflows.",
    //    "⚡Applied statistical thinking to real-world social science problems, developing hands-on expertise in modeling human behavior, analyzing policy impacts, and extracting insights from complex datasets.",
    //    "⚡Completed a comprehensive proctored capstone exam demonstrating mastery of statistical theory, computational techniques, and end-to-end data analysis."
    //  ],
   //   website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python for Everbody",
      subtitle: "Univeristy of Michigan",
      logo_path: "U-M_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/B46CUH9MQUUD",
      alt_name: "University of Michigan",
      color_code: "#8C151599",
    },
    {
      title: "Data Analyst",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/EH0OTIPAPBP2",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/MA2QC8TM1C0Q",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Mathematics for Machine Learning and Data Science Specialization",
      subtitle: "deeplearning Ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/T6XZX8O98YXL",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "IBM Data Engineering",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/194DCX7JI4T8",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "IBM Data Analytics with Excel and R",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/YOJ2CD5Y3WJ5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Google IT Support",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/BLBULPCBZU8M",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Volunteership",
  description:
    "After 8 years driving operational success through data insights, I transitioned to data analytics to solve complex business challenges with advanced tools. With IBM certifications in Data Analysis, Data Science, and Data Engineering,",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Insight & Operation Manager",
          company: "Commodities Health Food",
          company_url: "",
          logo_path: "CommoditiesHealthFood.jpg",
          duration: "Jan 2016 - Feb 2024",
          location: "New York, NY, USA",
          description:
            "At Commodities Health Food, I saw firsthand how data could untangle everyday problems. Curious about what drove sales, I built simple Python tools that uncovered patterns and boosted revenue by 15%. When deliveries kept missing the mark, I created automated supplier trackers that cut delays by 20%. From dashboards to KPIs, every solution made us faster, sharper, and more customer-focused—and showed me just how powerful data can be when it meets the real world.",
          color: "#000000",
        },
        {
          title: "Self-employeed",
          company: "Zer0Labz",
          company_url: "",
          logo_path: "ZeroLabz.png",
          duration: "Jan 2025 - Present",
          location: "New York, NY",
          description:
            "Zer0Labz is more than a portfolio — it’s my personal lab for experimentation, learning, and building in public. It’s where I document projects, share ideas, and explore the intersection of code, data, and creativity. Whether it’s a scrappy prototype, a deep dive into a problem, or a reflection on what I’ve learned, Zer0Labz is where I grow and connect with others who love to build and break things too.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Facilities and Operations - Volunteer",
          company: "BAPS Swaminarayan Sanstha",
          company_url: "https://about.google/",
          logo_path: "BAPS.png",
          duration: "Jan 2010 - Present",
          location: "New York, NY",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "neuro-symbolic-sudoku-solver",
//       name: "Neuro-Symbolic Sudoku Solver",
//       createdAt: "2023-07-02T00:00:00Z",
//       description: "Paper published in KDD KiML 2023",
//       url: "https://arxiv.org/abs/2307.00653",
//     },
//     {
//       id: "mdp-diffusion",
//       name: "MDP-Diffusion",
//       createdAt: "2023-09-19T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/mdp-diffusion/",
//     },
//     {
//       id: "consistency-models",
//       name: "Consistency Models",
//       createdAt: "2023-10-12T00:00:00Z",
//       description: "Blog published in Paperspace",
//       url: "https://blog.paperspace.com/consistency-models/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Zerol0l.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Building Better by Breaking First. Sharing whatever I have learned through my blogs.",
    link: "https://zer0sandbox-blog.vercel.app",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "USA",
    region: "New York",
    postalCode: "",
    streetAddress: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  //publications,
  contactPageData,
};
