/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import vmware from "./assets/images/vmware.jpg";
import oureye from "./assets/images/oureye-logo.png";
import oureyeLogo from "./assets/images/oureye.png";
import nexelworld from "./assets/images/nexelworld.jpg";
import minerva from "./assets/images/minerva.png";
import socialfeathers from "./assets/images/socialfeathers.png";
import quantumHack from "./assets/images/quantumhack.jpg";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "snh3003",
  title: "Hi, I'm Shahab Hashmi",
  subTitle: emoji(
    "A passionate Software Developer having an experience of building Web and Mobile applications with React / Angular / Node / React Native."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1UtoisqHdVArgHL8qP5MfP0Q-_nbLkdFk/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/snh3003",
  linkedin: "https://www.linkedin.com/in/snh3003/",
  gmail: "shahsama542@gmail.com",
  hacckerank: "https://www.hackerrank.com/shahsama542?hr_r=1",
  facebook: "https://www.facebook.com/kingsnh03",
  medium: "https://medium.com/@shahsama542",
  stackoverflow: "https://stackoverflow.com/users/14070713/shahab-hashmi",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "CRAZY FULL STACK DEVELOPER WHO ENJOYS BUILDING COOL REVENUE GENERATING PROJECTS.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web & mobile applications."
    ),
    emoji("⚡ An avid Competitive Coder, & Tech Enthusiast."),
    emoji("⚡ Public Speaker, Blog writer, & Avid Coder."),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-envira",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "Node",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "Data Structures & Algorithms",
      fontAwesomeClassname: "fas fa-laptop-code",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development Web & App", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "80%",
    },
    {
      Stack: "Database",
      progressPercentage: "70%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Member of Technical Staff",
      company: "VMware",
      companylogo: vmware,
      date: "Jan 2022 - Present",
      desc: "Working on the UI of scalable and highly interactive VMware NSX Advanced Load Balancer (Avi Vantage) application built using Angular and Typescript.",
    },
    {
      role: "Full Stack Developer",
      company: "OurEye.ai",
      companylogo: oureye,
      date: "April 2021 – Sept 2021",
      desc: "Developed scalable and highly interactive web and mobile applications. Implemented cross-browser compatibility and enhancements that improved responsiveness and optimization.",
    },
    {
      role: "Wordpress Developer",
      company: "Nexel World",
      companylogo: nexelworld,
      date: "May 2019 – July 2019",
      desc: "Developed websites for clients based on their requirements on CMS Wordpress.",
    },
    {
      role: "Teaching Assistant",
      company: "Minerva",
      companylogo: minerva,
      date: "December 2019 – May 2020",
      desc: "Worked as an undergrad teaching assistant for the critical thinking course.",
    },
    {
      role: "Android Developer",
      company: "Social Feathers",
      companylogo: socialfeathers,
      date: "May 2020 - August 2020",
      desc: "Worked as an Android Java Developer.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "snh3003", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: socialfeathers,
      link: "http://www.socialfeathers.com/",
    },
    {
      image: oureyeLogo,
      link: "http://www.oureye.ai/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "First Prize Winner at Quantum Hack international Hackathon 2020",
      subtitle: " Open Theme Category",
      image: quantumHack,
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15ry1XpQJpqUhd1wTEOHPjgtw5dcFvePk/view?usp=sharing",
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1w8SIlzNlyv45yI2pGD4iSmeNsbBq4ZaV/view?usp=sharing",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and share with others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@shahsama542/how-to-use-codepen-components-inside-your-webpage-d46edfc13808",
      title: "How to use CodePen components inside your webpage?",
      description:
        "With the world rapidly evolving by the minute, staying on top of the in-demand skills’ curve is a voluminous task. ",
    },
    {
      url: "https://medium.com/@shahsama542/how-to-use-reactstrap-in-your-react-app-d01dc0be0867",
      title: "Integrate Reactstrap into React App",
      description:
        "React, as we all know, is an open-source JavaScript library used to create painless interactive UIs.",
    },
    {
      url: "https://medium.com/@shahsama542/tips-to-enrich-the-feel-of-your-website-c80883260600",
      title: "Useful hacks to enrich the feel of your website",
      description:
        "Web development is a field that is assured to stay in demand for the foreseeable future.",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Week of Learning - Progate",
      subtitle: "Web Development at SRM University AP - 2020",
    },
    {
      title: "Hacktoberfest - Digitalocean",
      subtitle: "Introduction to FOSS - 5th Oct, 2020",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "7318247963",
  email_address: "shahsama542@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "shershah3003", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
};
