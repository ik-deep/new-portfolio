
import {
  tekizma, hotfoot, acciojob, profile,angular,bootstrap,css,docker,figma,git,html,java,javascript,mongodb,mysql,tailwind,postman,nodejs,reactjs,redux,threejs,typescript, web, mobile, creator, backend
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id:"resume",
      title: "Resume",
    }
   
  ];
  export const profile_Details=[
    {
      profile_pic:profile,
      name: "Irfan Khan",
      email:"er.irfan2798@gmail.com",
      phone: "+91 7651990858",
      address: "Noida",
      githubLink: "https://github.com/ik-deep",
      github:"Github",
      linkedinLink: "https://www.linkedin.com/in/irfan-khan173/",
      linkedin:"Linkedin",
    }
  ]

  export const about = [
    {
      title: "About Me",
      description:
        "Highly skilled and motivated Full Stack Developer with 1.2 years of experience in designing, developing, and maintaining cutting-edge web applications. Proficient in a wide range of programming languages, frameworks, and technologies, with a strong focus on both front-end and back-end development. Demonstrated expertise in creating responsive and user-friendly interfaces, utilizing modern tools and libraries. Adept at database design, implementation, and optimization for seamless data management. Committed to continuous learning and staying updated with the latest industry trends to ensure the implementation of best practices. ",
      skills:[
        {
          name: "java",
          icon: java,
        },
        {
          name: "mysql",
          icon: mysql,
        },
        {
          name: "angular",
          icon: angular,
        },
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: redux,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        },
        {
          name: "docker",
          icon: docker,
        },
        {
          name:"postman",
          icon:postman
        },
        {
          name:"bootstrap",
          icon:bootstrap
        }
      ],



    }
  ]
  
export  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: creator,
    },
  ];

  export const experiences = [
 
    {
      title: "Java Developer Trainee",
      company_name: "Hotfoot technology solutions - Banglore",
      icon: hotfoot,
      iconBg: "#383E56",
      date: " Sep 2021 - Feb-2022",
      points: [
        "Tested completed running projects for functionality and implemented changes to production methods to rectify issues in final products.",
        "Communicated with vendors and key suppliers to select project materials and meet customer needs.",
        "Developing and maintaining web applications using core java and other related technologies",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Product Engineer",
      company_name: "Tekizma India Solutions Private Limited - Remote",
      icon: tekizma,
      iconBg: "#383E56",
      date: "Apr 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using Angular.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
       {
      title: "Full-Stack web development course (Upskilling)",
      company_name: "AccioJob - Remote",
      icon: acciojob,
      iconBg: "#383E56",
      date: "March 2023 - present",
      points: [
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  // const projects = [
   
  //   {
  //     name: "Speed Typing Game",
  //     description:
  //       "With this application, users can enhance their typing speed by playing interactive games that challenge them to type accurately within an estimated time. Users can view their results and even adjust the difficulty level to suit their skill level.",
  //     tags: [
  //       {
  //         name: "html",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: speedTyping,
  //     source_code_link: "https://github.com/ik-deep/Speed-typing-game",
  //     demo_link:"https://quirky-hawking-043bbc.netlify.app/"
  //   },
  //   {
  //     name: "To-Do List",
  //     description:
  //       "It is an application specifically designed to keep track of tasks. This task keeper application allows users to create, edit, and delete their task lists, providing an efficient way to manage their daily activities and responsibilities.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "localStorage",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "fontawesome",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: todoApp,
  //     source_code_link: "https://github.com/ik-deep/TodoList",
  //     demo_link:"https://todoreact-aap.netlify.app/"
  //   },
  //   {
  //     name: "Number guessing game",
  //     description:
  //       "The computer assumed a secret number in some known range while the user attempts to guess the number. After each guess, the computer answers either “Higher”, “Lower” or “Correct!” depending on whether the secret number is higher, lower or equal to the guess.",
  //     tags: [
  //       {
  //         name: "html",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "css",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "javascript",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: numguess,
  //     source_code_link: "https://github.com/ik-deep/Number-guess-game",
  //     demo_link:"https://objective-blackwell-cb2f3d.netlify.app/"
  //   },
  //   {
  //     name: "Compress and Decompress",
  //     description:
  //       "Compression reduces the size of an application or document for storage or transmission. Compressed files are smaller, download faster, and easier to transport. Decompression or expansion restores the document or application to its original size.",
  //     tags: [
  //       {
  //         name: "Java",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "javaswing",
  //         color: "green-text-gradient",
  //       },
        
  //     ],
  //     image: comdecom,
  //     source_code_link: "https://github.com/ik-deep/comp_decomp",
  //     // demo_link:"https://objective-blackwell-cb2f3d.netlify.app/"
  //   },
  // ];
  
  // export { services, experiences, projects };
 