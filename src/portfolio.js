/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/35785-preloader-wifiish-by-fendah-cyberbryte.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dids",
  title: "Hi! I'm Dids Irwyn Reyes",
  subTitle: emoji(
    "While I maintain my playful 'Full StackOverflow Developer' persona 😂, my current focus is in Quality Assurance with a specialization in Test Automation and security testing. I have a background in software engineering, primarily on the backend, and I actively engage in manual and end-to-end testing as part of my software quality assurance role. Beyond that, I'm deeply involved in penetration testing, load tests, functional tests, and API tests."
  ),
  resumeLink:
    "https://docdro.id/vZNh7FU", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/skedaddl3",
  linkedin: "https://www.linkedin.com/in/dids-irwyn-reyes-605214159/",
  gmail: "dids.irwyn@gmail.com",
  gitlab: "https://gitlab.com/skedaddl3",
  // facebook: "https://www.facebook.com/didsirwyn.reyes",
  instagram: "https://www.instagram.com/p0tatofu/",
  //medium: "https://medium.com/@reyes.dids.bscs",
  stackoverflow: "https://stackoverflow.com/users/10428502/dids",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I'm currently working as a Software Development Engineer in Test (SDET) focused in Automation, but also knowledgeable in other Fields of Quality Assurance e.g, Manual.",
  skills: [
    emoji("Skilled in End to End Testing in Playwright Framework, Appium, Cypress & Detox for Web/Mobile Test Automation"),
    emoji("REST/GraphQL API Testing with Postman (Manual) and Newman (Automated)"),
    emoji("Exploratory Penetration Testing with Burp Suite, OWASP Amass & Zed Attack Proxy (ZAP)."),
    emoji("Experienced in Elixir and Phoenix Framework (Functional Programming)"),
    emoji("Unit Testing in Software Development and E2E Testing for Web Apps"),
    emoji("Can implement Backend/Third-Party Service."),
    emoji("Experienced in Machine Learning Development using Open Source Framework: RASA"),
    emoji("Worked on Natural Language Processing (NLP).")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "erlang",
    //   fontAwesomeClassname: "fab fa-erlang"
    // },
    {
      skillName: "phoenix",
      fontAwesomeClassname: "fab fa-phoenix-framework"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        'Eulogio "Amang" Rodriguez Institute of Science and Technology',
      logo: require("./assets/images/EARIST_Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
      desc: "",
      descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Montfort Academy",
      logo: require("./assets/images/Montfort.png"),
      subHeader: "Computer Systems Servicing",
      duration: "2016 - 2018",
      desc: "Artisan Awardee",
      descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test Automation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Version Control System", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/UI/UX", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Internship",
      company: "Municipality of Romblon",
      companylogo: require("./assets/images/logo_001.png"),
      date: "May 2019 – June 2020",
      // desc: "Database",
      descBullets: ["Database"]
    },
    {
      role: "Visual Graphic Designer",
      company: "RCC",
      companylogo: require("./assets/images/rcc.png"),
      date: "June 2019 – July 2020",
      // desc: "Adobe Ps, Premiere, Illustrator",
      descBullets: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere"]
    },
    {
      role: "Front-End Mobile Developer Intern",
      company: "Pragtechnologies",
      companylogo: require("./assets/images/pragtechnologies.png"),
      date: "March 2022 – August 2022",
      desc: "Language used is Dart using Flutter Framework.",
      descBullets: ["Created Mobile App Projects and Implemented Jitsi Library"]
    },
    {
      role: "Jr. Software Engineer",
      company: "Pragtechnologies",
      companylogo: require("./assets/images/pragtechnologies.png"),
      date: "August 2022 – Current",
      desc: "Back-End Development, Elixir",
      descBullets: [
        "Assigned in Projects the Company is currently working, most of it are Backend Stuffs"
      ]
    },
    {
      role: "Jr. Software Engineer",
      company: "SeeYouDoc",
      companylogo: require("./assets/images/syd.jpg"),
      date: "August 2022 – Current",
      desc: "Back-End Development, using Elixir and Phoenix Framework",
      descBullets: ["Worked Mostly in Telemedicine Platform"]
    },
    {
      role: "Quality Assurance",
      company: "culionXchange",
      companylogo: require("./assets/images/stanfordLogo.png"),
      date: "August 2022 – Current",
      desc: "Fintech",
      descBullets: ["Test Automation", "Penetration/Security", "Performance Testing", "API Testing"]
    }
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Internships and Projects I worked on during my Senior High",
  projects: [
    {
      image: require("./assets/images/municipality_r1.png"),
      projectName: "Municipality of Romblon",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://romblonthemarble.gov.ph/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/rcc.png"),
      projectName: "Romblon Cable Corporation"
      // projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements & Certifications",

  achievementsCards: [
    {
      title: "Advanced C++ Programming",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/c++.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-71344b1f-aaca-4369-ab72-6817fbf49272/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
        }
      ]
    },
    {
      title: "Burp Suite for Advanced Web and Mobile Pentesting",
      subtitle: "Completed Certifcation for Security/Penetration Testing",
      image: require("./assets/images/burp_suite.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b99f320b-13ca-4446-8324-74d8e854ebd1/"
        }
      ]
    },
    {
      title: "Postman: Rest API Testing",
      subtitle: "Completed Certifcation for API Automation",
      image: require("./assets/images/postman.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b4ece8a4-3c0f-4d7d-ac82-f13d25c8e1de/"
        }
      ]
    },
    {
      title: "Performance Testing: Intro to Grafana K6",
      subtitle: "Completed Certifcation for Performance Testing",
      image: require("./assets/images/k6.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-a15eb4da-07d3-458c-b00a-3cfd040645bc/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I also write my opinion to matters that I find interesting.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@dids.irwyn.reyes/online-classes-in-the-philippines-is-mental-health-more-important-than-education-fe30bcf702e4",
      title:
        "Online Classes in the Philippines. Is Mental Health more important than Education?",
      description:
        "Since the sudden spread of Covid-19 around the world affected our daily lives, the economy dropped and some are at risk of losing their livelihoods, most of the companies as well as small businesses closed in compliance with government regulation due to the pandemic and causes a drastic increase in the unemployment rate here in the Philippines."
    },
    {
      url: "https://medium.com/@dids.irwyn.reyes/historical-negationism-and-the-rise-of-cyber-propaganda-72de4166f57f",
      title: "Historical Negationism and the Rise of Cyber Propaganda",
      description:
        "From campaign jingles to political advertisements on our televisions, it evolves and passes to our personal smartphones, where we don’t notice that targeting individuals actually work through the use of data and new technologies that are unknown to most of the Netizens that use Social Media."
    },
    {
      url: "https://medium.com/@dids.irwyn.reyes/configuring-neovim-92cd45995f31",
      title: "Configuring Neovim",
      description:
        "I’m writing this blog for me 😄 i always forget my Nvim setup when changing to different Linux Distribution, but feel free to copy my config. This is for current Linux Distro: Mint, Flavor: Cinnamon"
    },
    {
      url: "https://medium.com/@dids.irwyn.reyes/best-movies-to-watch-for-programmers-developers-b8d3d17e2c38",
      title: "Best Movies to watch for Programmers/Developers",
      description:
        "Are you looking for entertaining films on computer programming, software development, and technology? I’ve gathered my top films for software developers/programmers here."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📞"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+639217771724",
  email_address: "dids.irwyn@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
