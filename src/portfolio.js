/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shril's Portfolio",
  description:
    "Data Scientist & Analyst fueled by curiosity and impact-using data to solve reals problems, spark better questions, and drive meaingful change.",
  og: {
    title: "Shril Patel Portfolio",
    type: "website",
    url: "https://zerozulu.github.io",
  },
};

//Home Page
const greeting = {
  title: "Shril Patel",
  logo_name: "Shril Patel",
  nickname: "Zerol0l",
  subTitle:
    "Data Scientist & Analyst fueled by curiosity and impact-using data to solve reals problems, spark better questions, and drive meaingful change.",
  resumeLink:
    "https://drive.google.com/file/d/1dmj9YWAJ1QYTg742jSJexftz78cm43U9/view?usp=drive_linkhttps://drive.google.com/file/d/1dmj9YWAJ1QYTg742jSJexftz78cm43U9/view?usp=drive_link",
  portfolio_repository: "https://github.com/ZeroZulu/zerozulu.github.io",
  githubProfile: "https://github.com/ZeroZulu",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

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
    name: "Gmail",
    link: "mailto:zerol0llabz@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Zer0Labz",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "dev",
    link: "https://dev.to/zerozulu",
    fontAwesomeIcon: "fa-dev", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#0a0a0aff", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building production ML models—from NLP to time-series forecasting—that solve real business problems",
        "⚡ Designing automated data pipelines for extraction, transformation, and analysis at scale",
        "⚡ Statistical modeling and hypothesis testing to validate insights before they hit the boardroom",
        "⚡ Writing clean, maintainable Python code—because future-you will thank present-you",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            backgroundColor: "transparent",
            color: "#e43d0bff",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "transparent",
            color: "#e43d0bff",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#f5410bff",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Visualization & Storytelling",
      fileName: "FullStackImg",
      skills: [
        "⚡ Crafting interactive dashboards in Tableau and Power BI that executives actually use",
        "⚡ Translating complex datasets into visuals that technical and non-technical audiences both get",
        "⚡ Custom D3.js visualizations when the standard charts won't tell the story",
        "⚡ Turning data insights into actionable recommendations",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#1316c9ff",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#ff9101ff",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "D3.js",
          fontAwesomeClassname: "simple-icons:d3dotjs",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#094204ff",
          },
        },
      ],
    },
    {
      title: "Tools & Platforms",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Cloud, containers, databases, and version control—the infrastructure that keeps everything running.",
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
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6b22f5ff",
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
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f77621ff",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#0f0f0fff",
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
      profileLink: "https://leetcode.com/u/Zerolol/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Zerol0l",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/zerol0l",
    },
    {
      siteName: "Tableau",
      iconifyClassname: "simple-icons:tableau",
      style: {
        color: "#1b2dccff",
      },
      profileLink: "https://public.tableau.com/app/profile/shril.patel",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "New York Institue of Technology",
      subtitle: "B.Sci. in Biology",
      logo_path: "NYIT_logo.png",
      alt_name: "New York Institue of Technology",
      duration: "2010 - 2015",
      descriptions: [
        "⚡ Built a scientific foundation in Biology—learning to design experiments, analyze data, and draw evidence-based conclusions.",
        "⚡ Applied Statistics and Mathematics to biological research, developing the quantitative mindset now central to my data science work.",
        "⚡ Honed hypothesis testing, data visualization, and analytical reporting—skills that translate directly to modern data science.",
      ],
      website_link: "https://www.nyit.edu",
    },
    {
      title: "Massachusetts Institute of Technology",
      subtitle: "MicroMasters in Statistics and Data Science",
      logo_path: "MITx.jpg",
      alt_name: "Massachusetts Institute of Technology",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Completed rigorous MIT coursework in Probability, Machine Learning, and Statistical Analysis—equivalent to on-campus standards.",
        "⚡ Applied Python-based data science methods to real-world problems, from predictive modeling to time-series analysis.",
        "⚡ Developed the analytical foundation to transform complex datasets into business insights and data-driven recommendations.",
      ],
      website_link: "https://micromasters.mit.edu/ds/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CS50's Introduction to Computer Science",
      subtitle: "- David J. Malan",
      logo_path: "HX.jpg",
      certificate_link:
        "https://certificates.cs50.io/50725ccf-a662-48b6-9ade-44d98f232104.pdf?size=letter",
      alt_name: "Harvard University",
      color_code: "#8C151599",
    },
    {
      title: "CS50's Introduction to Artificial Intelligence with Python",
      subtitle: "- David J. Malan",
      logo_path: "HX.jpg",
      certificate_link:
        "https://certificates.cs50.io/1b948d12-0f1c-42b6-bda2-70d4a865f533.pdf?size=letter",
      alt_name: "Harvard University",
      color_code: "#8C151599",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Charles Severance",
      logo_path: "U-M_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/B46CUH9MQUUD",
      alt_name: "University of Michigan",
      color_code: "#f0e116fd",
    },
    {
      title: "Data Engineering",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/194DCX7JI4T8",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/MA2QC8TM1C0Q",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Analyst",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/EH0OTIPAPBP2",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Microsoft Power BI Data Analyst",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/SJKDJHWFT8U1",
      alt_name: "Microsoft",
      color_code: "#0C9D5899",
    },
    {
      title: "Google IT Support",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/BLBULPCBZU8M",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Advanced Data Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/OXLESP39B9SM",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, & Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Insights & Operations Manager",
          company: "Commodities Health Food",
          company_url: "",
          logo_path: "CommoditiesHealthFood.jpg",
          duration: "Jan 2016 - 2023",
          location: "New York, NY, USA",
          description:
            "Built Python analytics tools and Tableau dashboards that boosted revenue by 15%, improved customer satisfaction by 10%, and reduced delivery delays by 20%.",
          color: "#000000",
        },
        {
          title: "AI Training & Evaluation Specialist (Contract)",
          company: "Outlier AI · DataAnnotation · Stellar AI",
          company_url: "",
          logo_path: "AI_ML.jpg",
          duration: "June 2024 - Present",
          location: "Remote",
          description:
            "Evaluating LLM outputs for accuracy and safety, contributing to RLHF pipelines for model fine-tuning. Project details confidential under NDA.",
          color: "#0879bf",
        },
        {
          title: "Founder & Data Scientist",
          company: "Zerol0l Labz",
          company_url: "",
          logo_path: "ZeroLabz.png",
          duration: "Jan 2024 - Present",
          location: "New York, NY · Remote",
          description:
            "Building data science projects in public—including an AI Image Classifier and PROMETHEUS, a no-code visual web scraper tool.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Facilities and Operations - Volunteer",
          company: "BAPS",
          company_url: "",
          logo_path: "BAPS.png",
          duration: "June 2010 - Present",
          location: "Flushing, New York",
          description: [
            "Coordinating logistics and setup for community events serving 500+ attendees.",
            " Managing facility operations including event preparation, crowd management, and cleanup.",
            " Collaborating with diverse teams to ensure smooth execution of cultural and religious programs.",
            " Contributing 14+ years of consistent service to the local community.",
          ],
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
  display: false,
};

const publications = {
  data: [],
  display: false,
};

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
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://zer0sandbox-blog.vercel.app",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "USA",
    region: "New York City",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
    display: false,
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
  publicationsHeader,
  publications,
  contactPageData,
};
