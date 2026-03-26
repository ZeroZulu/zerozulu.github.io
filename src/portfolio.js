/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Shril's Portfolio",
  description:
    "Data Scientist fueled by curiosity and impact — using data to solve real problems, spark better questions, and drive meaningful change.",
  og: {
    title: "Shril Patel | Data Scientist",
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
    "Data Scientist fueled by curiosity and impact — using data to solve real problems, spark better questions, and drive meaningful change.",
  resumeLink:
    "https://drive.google.com/file/d/1dmj9YWAJ1QYTg742jSJexftz78cm43U9/view?usp=sharing",
  portfolio_repository: "https://github.com/ZeroZulu/zerozulu.github.io",
  githubProfile: "https://github.com/ZeroZulu",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ZeroZulu",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shril-patel-020504284/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:zerol0llabz@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Zer0Labz",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "dev",
    link: "https://dev.to/zerozulu",
    fontAwesomeIcon: "fa-dev",
    backgroundColor: "#0a0a0aff",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building production ML pipelines — from fraud detection to time-series demand forecasting — deployed with FastAPI and monitored with Evidently AI",
        "⚡ Statistical modeling, causal inference (DiD, PSM, Synthetic Control), and hypothesis testing to validate insights before they hit the boardroom",
        "⚡ Handling real-world data challenges: extreme class imbalance, high-cardinality features, leakage-free cross-validation, and SHAP explainability",
        "⚡ Writing clean, reproducible Python code with full experiment tracking via MLflow — because future-you will thank present-you",
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
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
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
          skillName: "XGBoost",
          fontAwesomeClassname: "simple-icons:xgboost",
          style: {
            backgroundColor: "transparent",
            color: "#017CEE",
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
        "⚡ Translating complex datasets into visuals that technical and non-technical audiences both understand",
        "⚡ Building live Streamlit apps with SHAP explainability layers and geospatial visualizations",
        "⚡ Turning data insights into actionable business recommendations with quantified dollar impact",
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
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
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
      title: "MLOps & Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Containerizing ML pipelines with Docker and orchestrating multi-service stacks with Docker Compose",
        "⚡ Serving live model predictions via FastAPI with per-request SHAP explanations at ~15ms latency",
        "⚡ Tracking experiments, model versions, and hyperparameter tuning runs with MLflow and Optuna",
        "⚡ Monitoring feature and prediction drift in production using Evidently AI",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            color: "#0194E2",
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
      title: "New York Institute of Technology",
      subtitle: "B.Sci. in Biology",
      logo_path: "NYIT_logo.png",
      alt_name: "New York Institute of Technology",
      duration: "2010 - 2015",
      descriptions: [
        "⚡ Built a scientific foundation in Biology — learning to design experiments, analyze data, and draw evidence-based conclusions.",
        "⚡ Applied Statistics and Mathematics to biological research, developing the quantitative mindset now central to my data science work.",
        "⚡ Honed hypothesis testing, data visualization, and analytical reporting — skills that translate directly to modern data science.",
      ],
      website_link: "https://www.nyit.edu",
    },
    {
      title: "Massachusetts Institute of Technology",
      subtitle: "MicroMasters in Statistics and Data Science (In Progress)",
      logo_path: "MITx.jpg",
      alt_name: "Massachusetts Institute of Technology",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Pursuing rigorous MIT coursework in Probability, Machine Learning, and Statistical Analysis — equivalent to on-campus graduate standards.",
        "⚡ Applying Python-based data science methods to real-world problems, from predictive modeling to time-series analysis.",
        "⚡ Developing the analytical foundation to transform complex datasets into business insights and data-driven recommendations.",
      ],
      website_link: "https://micromasters.mit.edu/ds/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CS50's Intro to AI with Python",
      subtitle: "- David J. Malan",
      logo_path: "HX.jpg",
      certificate_link:
        "https://certificates.cs50.io/1b948d12-0f1c-42b6-bda2-70d4a865f533.pdf?size=letter",
      alt_name: "Harvard University",
      color_code: "#8C151599",
    },
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
      title: "Google Advanced Data Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/OXLESP39B9SM",
      alt_name: "Google",
      color_code: "#0C9D5899",
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
      title: "Math for ML & Data Science",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/T6XZX8O9BYXL",
      alt_name: "DeepLearning.AI",
      color_code: "#FF6F0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Training & Evaluation Specialist (Contract)",
          company: "Outlier AI · DataAnnotation · Stellar AI",
          company_url: "",
          logo_path: "AI_ML.jpg",
          duration: "June 2024 - Present",
          location: "Remote",
          description:
            "Evaluating LLM outputs for accuracy, coherence, and safety — contributing to RLHF pipelines that improve model alignment. Applying domain expertise in data science, Python, and statistical reasoning to assess code generation and math problem-solving tasks.",
          color: "#0879bf",
        },
        {
          title: "Data Insights & Operations Manager",
          company: "Commodities Health Food",
          company_url: "",
          logo_path: "CommoditiesHealthFood.jpg",
          duration: "Jan 2016 - Feb 2023",
          location: "New York, NY",
          description:
            "Analyzed 50,000+ monthly transactions across a multi-location retail operation. Built an automated Python ML forecasting pipeline using 3+ years of historical sales data — reducing stockouts 20% and driving a 15% revenue increase. Developed demand forecasting and customer segmentation models using regression and K-Means clustering.",
          color: "#000000",
        },
        {
          title: "Founder & Data Scientist",
          company: "Zerol0l Labz",
          company_url: "",
          logo_path: "ZeroLabz.png",
          duration: "Jan 2024 - Present",
          location: "New York, NY · Remote",
          description:
            "Independent data science lab — building and shipping ML projects in public. Current work includes production ML pipelines, NLP tools, and open-source data science resources.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Facilities and Operations Volunteer",
          company: "BAPS",
          company_url: "",
          logo_path: "BAPS.png",
          duration: "June 2010 - Present",
          location: "Flushing, New York",
          description:
            "Coordinating logistics and setup for community events serving 500+ attendees. Managing facility operations including event preparation, crowd management, and cleanup. Contributing 14+ years of consistent service to the local community.",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "End-to-end data science and ML projects — from causal inference pipelines to production APIs. Each project includes full source code on GitHub.",
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
      "I'm available on LinkedIn, GitHub, and email. Happy to connect about data science roles, collaborations, or consulting. I'll reply within 24 hours.",
  },
  blogSection: {
    title: "Blog",
    subtitle:
      "I write about data science, ML engineering, and lessons learned building real-world projects.",
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
