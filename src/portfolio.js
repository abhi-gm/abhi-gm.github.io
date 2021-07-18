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
  subTitle:
    "Passionate Data scientist, Data Science & Machine Learning Ops Co-op at Retail Business Services and Graduate student at Northeastern University.",
  resumeLink:
    "https://github.com/abhi-gm/Resume-CV/blob/master/abhishek_CV.pdf",
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
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UCf09ES5sjZK-5E1BZf286tw",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:abhigm.kar@gmail@gmail.com",
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
        "⚡ Building CI/CD pipelines for training ML models, packaging and monitoring the ML models and deploying into Kubernetes Cluster ",
        "⚡ Developing scalable production-ready Machine Learning models for various use cases to create business value",
        "⚡ Experience in working with DeepLearning and Classical machine learning algorithms.",
        "⚡ Experience in working with ML-OPS - Deploying machine learning models into production,",

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
  subtitle: "Work, Internship and Volunteering",
  description:
    "I have worked with organizations as Machine Learning Engineer, Data scientist and Ml-ops Engineer. Experienced in creating and implementing data-driven solutions to complex business problems. I am one of the founding members of the largest student group in Northeastern University and served on the Executive Board as Vice president of Research operations..",

  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Science / Machine Learning Ops (Co-op)",
          company: "Retail Business Services",
          company_url: "https://legatohealthtech.com/",
          logo_path: "RBS_logo.png",
          duration: "Jan 2020 - PRESENT",
          location: "Quincy, MA",
          description:
            "Designed a deep learning classifier for more than 70 classes with a test accuracy of 98 percent using transfer learning. Created a method for using a state-of-the-art Microsoft vision model for extracting features from the image and employ the transfer learning using that for classification Algorithm and also contributed to Microsoft opensource Repository. Built CI/CD pipeline in Azure DevOps for training model, packaging it with ML Flow, containerizing it with Seldon, functional testing the images, and using Docker to containerize it and pushing it to Azure Container Registry. Deploying Machine Learning models onto Kubernetes Cluster to provide microservice for prediction with. Refactoring the script to make it Production-ready for the deployment of the models for inference scoring. Drafted an Ethical AI framework for the organization's data science team for building an AI system with ethical guardrails.",
          color: "#0879bf",
        },
        {
          title: "Machine Learning Research Assistant ",
          company: "Squark",
          company_url: "https://squarkai.com/",
          logo_path: "squark_logo.png",
          duration: "May 2019 - Dec 2019",
          location: "Burlington, Massachusetts",
          description:
            " Modularizing the data pipeline into preprocessor, data scrubber, and model training use H20. Productionizing the script for working with any dataset to generate predictions on the client datasets. Packaging and Containerizing the pipeline with Docker to move everything Ec2 instance for inference scoring. Implemented an Explainable AI technique for the models using SHAP for throwing light on black box models by multiprocessing. Created a method for SHAP generation and evaluation which brought down the time of generation from 2 hours to 15 minutes.",
          color: "#9b1578",
        },
        {
          title: "Machine Learning Engineer",
          company: "Rove Labs Pvt. Ltd.",
          company_url: "https://www.rovelabs.com/",
          logo_path: "rove_logo.png",
          duration: "Jun 2017 - Jul 2019",
          location: "Bengaluru, Indiat",
          description:
            "Constructed ML models for data collected from the IoT (Internet of Things) devices and sensors. Built dashboards for analyzing the data coming from the IoT devices. Designed different machine learning models as proof of concept for different client data for predictive modeling. Working with Raspberry Pi for projects like automatic lighting control of the warehouse and identifying the space for trucks entering the warehouses. Conducted a cutting-edge workshop for institutions and software enthusiasts.",
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
    "I love working on different projects and exploring which use a wide variety of technologies and tools in Data Science, Machine Learning and MLops domain.\n",
  avatar_image_path: "projects_image.svg",
};

// blog Page
const blogHeader = {
  title: "Blogs",
  description:
    "The fulfilling feeling of giving back and contributing to society is unparalleled, as a student of Data Science, I enjoy writing blogs on different varieties of Machine Learning and Data Science subjects.",
  avatar_image_path: "blog.png",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "abhishek_maheshwarappa.png",
    description:
      "I am available virtually on every social media. I can help you with Machine Learning, Deep Learning, Reinforcement Learning and Explainable AI problems.",
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
