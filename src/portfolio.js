/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Abhishek Maheshwarappa",
  logo_name: "Abhishek Maheshwarappa",
  nickname: "Abhi",
  heroEyebrow: "Data Science Manager · MLOps Strategist",
  subTitle:
    "Leading high-impact data science teams that translate experimentation into production-grade intelligence for global retail and fintech organizations.",
  heroHighlights: [
    "Lead cross-functional data science teams that deliver multi-cloud forecasting and personalization systems for enterprise retail and fintech partners.",
    "Operationalised an end-to-end MLOps platform that shrinks model deployment cycles from weeks to hours while exceeding reliability SLAs.",
    "Mentor emerging analytics leaders, publish applied MLOps playbooks on Medium, and share career lessons with an engaged LinkedIn community.",
  ],
  transformationNote:
    "From hands-on modeler to data science manager, my focus shifted to scaling people, platforms, and storytelling—the trio that powers trustworthy AI.",
  resumeLink: "/Abhishek_Maheshwarappa_Resume.pdf",
  mediumLink: "https://abhishek-maheshwarappa.medium.com/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/abhi-gm",
  // linkedin: "https://www.linkedin.com/in/abhishek-g-m/",
  // gmail: "abhigm.kar@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/abhishek.gm1993/",
  // twitter: "https://twitter.com/Abhishe32260532",
  // instagram: "https://www.instagram.com/abhishek_maheshwarappa/"

  {
    name: "Github",
    link: "https://github.com/abhi-gm",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-g-m/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Medium",
    link: "https://abhishek-maheshwarappa.medium.com/",
    fontAwesomeIcon: "fa-medium-m",
    backgroundColor: "#12100E",
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UCf09ES5sjZK-5E1BZf286tw",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:abhigm.kar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Abhishe32260532",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/abhishek.gm1993/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abhishek_maheshwarappa/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#e4405f", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Scaling cross-functional data science teams that ship resilient ML products across retail, CPG, and fintech portfolios.",
        "⚡ Architecting MLOps blueprints—feature pipelines, automated testing, observability, and governance—for multi-cloud environments.",
        "⚡ Applying deep learning, causal inference, and classical ML techniques to unlock measurable revenue, margin, and customer outcomes.",
        "⚡ Coaching analysts and engineers on Responsible AI, experiment design, and storytelling so insights earn executive trust.",

        // "⚡ Co-Author of a hands-on book on Explainable AI on model Interpretability on techniques - PDP, ICE, LIME and Shapely",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Amazon - AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Northeastern University Boston",
      subtitle: "M.S. in Information Systems - GPA 3.8",
      logo_path: "neu_logo.png",
      alt_name: "NEU - Boston",
      duration: "2019 - Present",
      descriptions: [
        "⚡ Courses: Data Science, Advance Data Science, Deep Learning and Reinforcement Learning, Algorithmic Digital Marketing, Artificial Intelligence and  High-Performance Parallel Computing",
        "⚡ Apart from these courses, I have studied Data Base management system, Data visualization and Program structure Algorithms",
        "⚡ I was Graduating Teaching Assistant for Advance Data science and Algorithmic Digital marketing",
      ],
      website_link: "https://www.northeastern.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/e303d6d0586d4faa42892aaffd054254",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title:
        "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/b2b7f7e317bc37cfa4127d4f0f67c4fb",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/db7cc72bb981d6d3b3257d623337893b",
      alt_name: "deeplearning.ai",
      color_code: "#0C9D5899",
    },
    {
      title: "Tableau 2020 A-Z: Hands-On Tableau Training for Data Science",
      subtitle: "- Kirill Eremenko",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://github.com/abhi-gm/Certificates/blob/master/Tableau.pdf",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Docker for the Absolute Beginner - Hands On - DevOps",
      subtitle: "- Mumshad Mannambeth",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://github.com/abhi-gm/Certificates/blob/master/Docker.pdf",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
    {
      title: "Programming with Python",
      subtitle: "- Sarvesh Agrawal",
      logo_path: "python.png",
      certificate_link:
        "https://github.com/abhi-gm/Certificates/blob/master/Programming%20with%20Python%20Training%20-%20Certificate%20of%20Completion.pdf",
      alt_name: "Intershala",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Leadership, Hands-on Delivery & Community",
  description:
    "Data science leader with 8+ years spanning hands-on modeling, production engineering, and people leadership. I build multidisciplinary teams, implement battle-tested MLOps practices, and partner with business leaders to unlock measurable value while upholding Responsible AI principles. Founding member of Northeastern University's AI Skunkworks and an active mentor to the next wave of analytics talent.",

  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Science Manager, Advanced Analytics & MLOps",
          company: "Retail Business Services (An Ahold Delhaize Company)",
          company_url: "https://www.retailbusinessservices.com/",
          logo_path: "RBS_logo.png",
          duration: "Jan 2021 - Present",
          location: "Quincy, MA",
          description:
            "Lead a team of data scientists, ML engineers, and product partners who deliver mission-critical forecasting and personalization products for enterprise retail banners. Architected the enterprise MLOps platform across Azure and GCP—introducing automated testing, lineage, and model governance that reduced deployment timeframes from weeks to hours. Partner with senior leadership to roadmap AI investments, evangelize Responsible AI practices, and translate experimentation into measurable business lift.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Research Assistant",
          company: "Squark",
          company_url: "https://squarkai.com/",
          logo_path: "squark_logo.png",
          duration: "May 2019 - Dec 2019",
          location: "Burlington, Massachusetts",
          description:
            "Modularized the data pipeline into reusable preprocessing, data quality, and AutoML components (H2O) so Squark customers could generate predictions on their own datasets. Productionized containerized inference services on AWS, and built SHAP-based explainability workflows that cut explanation time from two hours to fifteen minutes.",
          color: "#9b1578",
        },
        {
          title: "Machine Learning Engineer",
          company: "Rove Labs Pvt. Ltd.",
          company_url: "https://www.rovelabs.com/",
          logo_path: "rove_logo.png",
          duration: "Jun 2017 - Jul 2019",
          location: "Bengaluru, India",
          description:
            "Owned the full lifecycle of predictive models for IoT telemetry—including data acquisition, feature engineering, model prototyping, and production deployment. Deployed analytics dashboards that empowered operations teams with real-time warehouse insights and delivered client-facing proofs of concept for logistics optimization.",
          color: "#fc1f20",
        },
      ],
    },

    {
      title: "Teaching assistantship",
      experiences: [
        {
          title:
            "Graduate Teaching Assistant - Advance Data science and Architecture",
          company: "Northeastern University College of Engineering",
          company_url: "https://coe.northeastern.edu/",
          logo_path: "COE_logo.png",
          duration: "Sep 2020 - Dec 2020",
          location: "Boston, MA",
          description:
            "Guiding and mentoring with students on different concepts like Reinforcement learning (RL), Deep Learning, CNN, Recommender systems, Model Interpretability, statistical modeling, etc. Conducted training using Discovery cluster- High performance Computing cluster. Grading the assignments and helping the professor for creating a quiz.",
          color: "#000000",
        },
        {
          title: "Graduate Teaching Assistant - Algorithmic Digital Marketing",
          company: "Northeastern University College of Engineering",
          company_url: "https://coe.northeastern.edu/",
          logo_path: "COE_logo.png",
          duration: "May 2020 - Aug 2020",
          location: "Boston, MA",
          description:
            "Facilitated students in Algorithmic Digital Marketing class and taught students Docker, Aws-Ec2, Apache superset, TensorFlow for image analysis, Snowflake, Elasticsearch and Streamlit",
          color: "#000000",
        },
      ],
    },

    {
      title: "Volunteering",
      experiences: [
        {
          title: "Vice President Research Operations and Co-Founder",
          company: "AI Skunkworks - Northeastern University",
          company_url: "https://neu-ai-skunkworks.github.io/",
          logo_path: "AISkunk_logo.png",
          duration: "September 2019 - Present",
          location: "Boston, MA",
          description:
            "Drafted the constitution of AI Skunkworks with a review from the Executive Board and got it approved by the Center for Student Involvement (CSI). Served as Vice President on the Executive Board for a year. Conducted training sessions on classical Machine learning, Deep Learning and Reinforcement Learning. Hosted a workshop on High Performance  Computing cluster called Discovery for training deep learning algorithm on GPU cluster.",
          color: "#4285F4",
        },
        {
          title: "Senator",
          company: "Northeastern University Graduate Student Government,",
          company_url: "https://www.northeastern.edu/gsg/",
          logo_path: "gsg_logo.png",
          duration: "Sep 2019 - May 2020",
          location: "Boston, MA",
          description:
            "As a senator of the Graduate student Government voted on the important resolutions and proposals. Joined a committee headed by the president for advising and strategizing about finding solutions to the problems faced by the graduate student at northeastern university.\n",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected engagements that blend experimentation with execution—spanning computer vision, large-scale demand planning, marketing science, and the MLOps foundations that keep those initiatives releasable.",
  avatar_image_path: "projects_image.svg",
};

// blog Page
const blogHeader = {
  title: "Articles & Playbooks",
  description:
    "Long-form stories and practical guides on production-ready machine learning, leadership in data science, and ethical AI—curated from my Medium publication and LinkedIn newsletters.",
  avatar_image_path: "blog.png",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abhishek_maheshwarappa.png",
    description:
      "Let’s connect if you’re scaling data science teams, building reliable ML platforms, or exploring advisory support. I’m always up for conversations about Responsible AI, analytics leadership, and storytelling with data.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Boston, Massachusetts",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Reach me out at",
    subtitle: "abhigm.kar@gmail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  blogHeader,
  contactPageData,
};
