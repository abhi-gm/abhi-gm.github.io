/* Change this file to get your personalPorfolio */

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
    "A data scientist in making, Vice President of Research Operations at AI Skunkworks, graduate student researcher and Graduate student at Northeastern University.",
  resumeLink:
    "https://github.com/abhi-gm/Resume-CV/blob/master/abhishek_CV.pdf",
  portfolio_repository: "https://github.com/abhi-gm",
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
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCf09ES5sjZK-5E1BZf286tw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
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
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
        
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various use cases",
        "⚡ Experience on working with different production level code and using Explainable AI in production envirnonment",
        "⚡ Co-Author of a hands-on book on Explainable AI on model Interpretability on techniques - PDP, ICE, LIME and Shapely",

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
    }
]
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    /*{
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
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
        "⚡ Courses: Data Science, Advance Data science, Algorithmic Digital Marketing, Computational Skepticism (Artificial Intelligence), High Perfomance Parallel Computing and Deeplearning - Reinforcement Learning",
        "⚡ Apart these course I studied Data Base management system, Data visulization and Program structure Algorithims",
        "⚡ I was selected as a Teaching Assistant for Advance Data science and Algorthmic Digital marketing",
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
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
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
    }
    //{
     // title: "Advanced ML on GCP",
      //subtitle: "- GCP Training",
      //logo_path: "google_logo.png",
      //certificate_link:
       // "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      //alt_name: "Google",
     // color_code: "#0C9D5899",
    //},
    //{
     // title: "DL on Tensorflow",
     // subtitle: "- Laurence Moroney",
      //logo_path: "deeplearning_ai_logo.png",
      //certificate_link:
       // "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      //alt_name: "deeplearning.ai",
      //color_code: "#00000099",
    //},
    //{
      //title: "Fullstack Development",
      //subtitle: "- Jogesh Muppala",
      //logo_path: "coursera_logo.png",
      //certificate_link:
        //"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      //alt_name: "Coursera",
      //color_code: "#2A73CC",
    //},
    //{
      //title: "Kuberenetes on GCP",
      //subtitle: "- Qwiklabs",
      //logo_path: "gcp_logo.png",
      //certificate_link:
        //"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      //alt_name: "GCP",
      //color_code: "#4285F499",
    //},
    //{
      //title: "Cryptography",
      //subtitle: "- Saurabh Mukhopadhyay",
      //logo_path: "nptel_logo.png",
      //certificate_link:
       // "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      //alt_name: "NPTEL",
      //color_code: "#FFBB0099",
    //},
    //{
      //title: "Cloud Architecture",
      //subtitle: "- Qwiklabs",
      //logo_path: "gcp_logo.png",
      //certificate_link:
        //"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      //alt_name: "GCP",
     // color_code: "#4285F499",
   // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML Engineer, Designer and Software Architect. I love leading a team and organising events. I am one of the founding member of largest student group in Northeastern University and served on the Executive Board as Vice president of Reserach operations.",
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
              "Manipulating high-volume, high-dimensionality data from varying sources to highlight patterns, anomalies, relationships and trends. Employed DevOps practices to deploy robust AI / ML solutions.",
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
                "Conducted research with Northeastern University under Professor Nicholas Brown in collaboration with Squark startup. Worked on production level code to model any dataset in H20.ai with preprocessor, feature selection and Auto ML modeling with prediction on the client production data. Investigated explainability of model generated by H20.ai using SHAP for throwing light on black box models which were generated by parallelizing multiple H20.ai subprocesses.Introduce a method to reduce time for data conversion from H20.ai frame to pandas from 1.30 hour to 3.26 minutes on dataset .",
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
           "Employed ML models to calculate customer churn and lifetime value, and built dashboard in Tableau to understand trends. Constructed model ML models for IOT(Internet of Things) devices to employ real - time prediction and which turn led to an increase in clients by 30%",
          color: "#fc1f20",
        },
      ],
    },

    {
      title: "Teaching assistantship",
      experiences: [
        {
          title: "Graduate Teaching Assistant - Advance Data science and Architecture",
          company: "Northeastern University College of Engineering",
          company_url: "https://coe.northeastern.edu/",
          logo_path: "COE_logo.png",
          duration: "Sep 2020 - Dec 2020",
          location: "Boston, MA",
          description:
            "Guiding and mentoring with students on different concepts like Reinforcement learning (RL), Deep Learning, CNN, Recommender systems, Model Interpretability, statistical modeling, etc. Conducted training using Discovery cluster- High performance Computing cluster. Grading the assignments and helping the professor for creating a quiz",
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
            "Facilitated students in Algorithmic Digital Marketing class and taught students Docker, Aws-Ec2,Apache superset, TensorFlow for image analysis, Snowflake, Elasticsearch and Streamlit",
          color: "#000000",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Vice President Research Operations and Co-Founder",
          company: "AI Skunkworks - Northeastern University",
          company_url: "https://neu-ai-skunkworks.github.io/",
           logo_path: "AISkunk_logo.png",
          duration: "September 2019 - Present",
          location: "Boston, MA",
          description:
             "Drafted the constitution of AI Skunkworks with a review from the Executive Board. Hosted training session on the use of High Performance Computing cluster of Northeastern University Discovery. Managed different Research Groups and headed the group research coordinators team of 10 people who reported to me directly.Head of Explainable AI Research Group with 43 members. Worked on different Explainable AI techniques like PDP, Shapely values, Lime, Surrogate models Saliency Maps and TCAV(Google). Members wrote many medium articles on the Hands - on application of Explainable AI techniques",
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
                  "As a senator atending the senate meeting and voted on the important decisions and discussions. Joined referendum committee headed by president. Advising and strategizing about the referendum to be passed and held.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and writing production level code.",
  avatar_image_path: "projects_image.svg",
};

// blog Page
const blogHeader = {
    title: "Blogs",
    description:
        "I write blogs on different variety of Machine learning concepts and Data science.",
    avatar_image_path: "blog.png",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
        profile_image_path: "abhishek_maheshwarappa.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Machine Learning problems, Deep Learning, Reinforcement Learning and Explainable AI",
  },
   addressSection: {
    title: "Address",
    subtitle:
      "Boston, Massachusetts",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Reach me out at",
    subtitle: "maheshwarappa.a@northeastern.edu",
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
