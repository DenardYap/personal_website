const logotext = "Bernard Kah Huan Yap";
const meta = {
  title: "Bernard",
  description:
    "I'm Bernard, a Full-Stack Software Engineer from the University of Michigan.",
};

const introdata = {
  title: "Hi, I'm Bernard",
  animated: {
    first: "Full-Stack Software Engineer",
    second: "Machine Learning Expert",
    third: "Entrepreneur",
    fourth: "Powerlifter",
    fifth: "Maker",
    sixth: "Builder",
    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "A dedicated individual who is constantly working on side projects, seeking growth opportunity, building, and breaking stuff",
  your_img_url: "dp3.png",
};

const dataabout = {
  title: "Who am I?",
  aboutme:
    "I love making stuff and solving problems ever since I was a kid, from Lego to Minecraft to Arduino to now, coding! I was working on the $100 computer project to help underprivileged kids study online during the covid time. I went to the families' houses and personally handed the computers to the kids, and seeing the kids' happy faces still makes me sleep better at night and want to do more stuff like this.That's also when I realized the number of problems I can solve is directly proportional to the amount of knowledge I have. Big or small, I can make a change in the world using technology and it makes me feel good. I decided to let this be my life goal, solve real problems, invent cool stuff, and help people. Let's geek! Currently looking for new grad position in Full-Stack Engineer/Front-end Engineer/Back-end Engineer.",
  aboutme2:
    "\nGrowth is the most important factor for me, so I prioritize working at a fast-growing startup, hit me up if you have a cool startup idea!",
};
const worktimeline = [
  {
    jobtitle: "Software Development Engineer Intern",
    where: "Amazon",
    date: "2023/05 - 2023/07",
  },
  {
    jobtitle: "Machine Learning Instructional Aide",
    where: "Taylor’s Me.reka Makerspace",
    date: "2020/09 - 2021/06",
  },
  {
    jobtitle: "IoT & Electronics Intern",
    where: "IoT & Electronics Intern",
    date: "2020/09 - 2021/06",
  },
  {
    jobtitle: "President",
    where: "Coding Club & Makers Club",
    date: "2019/08 - 2021/06",
  },
];

const skills = [
  {
    name: "React",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "AWS",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Express",
    proficiency: "80%",
    color: "#8be41b",
  },
  {
    name: "MySQL",
    proficiency: "95%",
    color: "#26d93c",
  },
  {
    name: "React Native",
    proficiency: "80%",
    color: "#8be41b",
  },
  {
    name: "Tensorflow",
    proficiency: "75%",
    color: "#ff8300",
  },
  {
    name: "Pytorch",
    proficiency: "75%",
    color: "#ff8300",
  },
  {
    name: "Git",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Linux",
    proficiency: "90%",
    color: "#26d93c",
  },
  {
    name: "MongoDB",
    proficiency: "80%",
    color: "#8be41b",
  },
  {
    name: "Stripe",
    proficiency: "90%",
    color: "#26d93c",
  },
  {
    name: "Firebase",
    proficiency: "90%",
    color: "#26d93c",
  },
  {
    name: "Redis",
    proficiency: "70%",
    color: "#ff8300",
  },
  {
    name: "HTTP",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "TailwindCSS",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Fast-learner",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Self-starter",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Leadership",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Consistent & Organized",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Team player",

    proficiency: "100%",
    color: "#26d93c",
  },
];

const languages = [
  {
    name: "Python",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Java",
    proficiency: "90%",
    color: "#26d93c",
  },
  {
    name: "Node.js",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "TypeScript",
    proficiency: "95%",
    color: "#26d93c",
  },
  {
    name: "JavaScript",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "C++",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "HTML5",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "CSS3",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "C",
    proficiency: "70%",
    color: "#ff8300",
  },
  {
    name: "Arduino C",
    proficiency: "60%",
    color: "#fe6801",
  },
  {
    name: "Assembly",
    proficiency: "30%",
    color: "#ff1300",
  },
];

const dataportfolio = [
  {
    img: "project-images/runner.png",
    description:
      "(Coming Soon) Working on an app with a mission to reduce world-wide obesity rate",
    link: "#",
  },
  {
    img: "project-images/dqd.png",
    description:
      "An NLP project that detects similar questions asked on Stack Exchange",
    link: "https://github.com/Delaminer/eecs487-finalproject",
  },

  {
    img: "project-images/ms.png",
    description:
      "Made a minesweeper website with a friend using BFS algorithm ",
    link: "https://github.com/DenardYap/minesweeper",
  },

  {
    img: "project-images/chatbot.png",
    description:
      "I made a chatbot that responds to input (with my voice!) based on my personality",
    link: "https://github.com/DenardYap/chatbot",
  },

  {
    img: "project-images/mc.gif",
    description:
      "Taught a group of student to clone Mario using Pygame, added a few easter eggs",
    link: "https://github.com/DenardYap/mario_clone",
  },
  {
    img: "project-images/gzy.png",
    description: "An e-commerce website to sell Edible Bird-Nest",
    link: "https://www.guanzhiyan.com/",
  },
  {
    img: "project-images/spaceshooter.gif",
    description:
      "Led a group of 9 students to develop SpaceShooter game, got an A+ in the class",
    link: "https://github.com/DenardYap/SpaceShooter",
  },
  {
    img: "project-images/keyw.gif",
    description:
      "Made a multiplayer game, whoever spams the keyboard faster wins!",
    link: "https://github.com/DenardYap/Keyboard-Warrior",
  },
  {
    img: "project-images/100.jpg",
    description:
      "Spearheaded the $100 computer project, gaveaway 80+ pieces to 50 families and built a computer lab",
    link: "https://cilisos.my/this-19-year-old-student-made-rm400-computers-to-help-b40-kids-study-online/",
  },
  {
    img: "project-images/blogpost.png",
    description:
      "A blog post app, did this when I first started learning web dev",
    link: "https://github.com/DenardYap/blog-app",
  },
  {
    img: "project-images/acc.png",
    description:
      "Organized a 4-day long Arduino Workshop to teach 13 students about Arduino",
    link: "https://drive.google.com/drive/folders/1mA2--8gCZxObP_iC6oOcYw_5I-1uwDuH?usp=sharing",
  },
  {
    img: "project-images/pcc.png",
    description:
      "Organized a 5-day long Python Workshop to teach 10 students about programming using Python",
    link: "https://drive.google.com/drive/folders/1DMLEvAKNoi3c6P5MGuGjn9Yqm9sxRmU1?usp=sharing",
  },
];

const physicalportfolio = [
  {
    img: "project-images/makers/ubm.jpg",
    description: "I made an Umbrella Lending Machine, took me 1 year",
  },
  {
    img: "project-images/makers/gameboy.jpg",
    description: "A gameboy, literally. Made with Raspberry Pi",
  },
  {
    img: "project-images/makers/chess2.jpg",
    description: "A chessboard for my mom",
  },
  {
    img: "project-images/makers/Box3.jpg",
    description: "Client project, sound-control-light shoebox",
  },
  {
    img: "project-images/makers/duckiepad.jpg",
    description: "First prototype for the $100 Computer, a very bulky 'iPad'",
  },
  {
    img: "project-images/makers/cadie.jpg",
    description:
      "Made an arcade machine with the club members, I was the project lead, did everything including electronics, software, hardware, designing, laser-cutting, 3D-printing, painting, and assembling",
  },
  {
    img: "project-images/makers/ironmanheart2.jpg",
    description: "Client project, ironman heart for Halloween",
  },
  {
    img: "project-images/makers/mm.jpg",
    description:
      "Mickey Mouse club house, spin its head and plays music when you press the button (M I C K E Y, M O U S E~)",
  },
  {
    img: "project-images/makers/rc_car.png",
    description:
      "RC Car where you can literally control its movement using Zoom/Discord, hacked it using Selenium and Arduino",
  },
  {
    img: "project-images/makers/ruler1.jpg",
    description: "Made a custom ruler for every single club member",
  },
];

const hobby = [
  {
    name: "Weightlifting",
    description:
      "Have been lifting for 1.5+ years, current PR - Deadlift 375lbs, Squat 255lbs, Bench 190lbs",
    img: ["/hobby/deadlift.gif", "/hobby/squat.gif", "/hobby/bench.gif"],
  },

  {
    name: "Cooking",
    description:
      "I love making foods in my free time because it saves me a lot of money, also it gives me a great sense of accomplishment when my food comes up great",
    img: ["/hobby/food1.jpg", "/hobby/food2.jpg", "/hobby/food3.jpg"],
  },
  {
    name: "Coffee",
    description:
      "I love making and drinking coffee, I discovered this hobby when my mom bought a coffee machine and I learned how to make latte art as well",
    img: ["/hobby/coffee1.jpg"],
  },
  {
    name: "Building stuff",
    description:
      "I love working on projects in my free time, checkout the projects I worked on in the portfolio page!",
    img: ["/makerclub/4.jpg"],
  },
  {
    name: "Reading books",
    description:
      "Every single books I read changed my worldview a little, I feel like the more I read the more perspective I can view the world from. Favorite book is Sapiens: A Brief History of Humankind",
    img: [],
  },
];

const work = [
  {
    company: "Amazon",
    time: "May 2023 - Jul 2023",
    position: "Software Development Intern",
    location: "Culver City, California",
    bullet: [
      "Architected user-friendly, robust, and reliable internal tools for royalties and payment data by implementing REST API endpoints and designing simplified MySQL queries and schema (RDS), which streamline data investigation, reconciliation, reporting, and financial analytics processes and save significant time and effort for the team",
      "Engineered scalable monitoring mechanisms utilizing AWS Lambda, SQS, CDK, IAM, and CloudWatch which proactively notify the team of any operational issues and minimizes the risk of inaccurate data reporting",
      "Delivered results and quality code agilely with Sprint methodology and CI/CD & code-review pipeline",
    ],
    img: ["/amazon/1.jpg", "/amazon/2.jpg", "/amazon/3.jpg"],
  },
  {
    company: "University of Michigan, Ann Arbor",
    time: "Jan 2023 - May 2023",
    position: "Machine Learning Instructional Aide",
    location: "Ann Arbor, Michigan",
    bullet: [
      "Held and prepared weekly office hours and lab sessions which received an average of 4.5/5 rating in teaching skill",
      "Designed lab, homework, project, and exam contents using Matplotlib and Python to ensure quality of the questions",
    ],
    img: ["ia/1.jpg", "ia/2.jpg"],
  },
  {
    company: "Taylor's Me.reka Makerspace",
    time: " Sep 2020 - Jun 2021",
    position: "IoT & Electronics Intern",
    location: "Selangor, Malaysia",
    bullet: [
      "Spearheaded the $100 computer project, which elevated digital literacy and bolstered online learning experiences in over 80 underprivileged families by conducting R&D, collaborated with 7 school’s executives for fundraising and media, and led a production line with more than 20 student volunteers",
      "Slashed the base cost of the computer to be 250% cheaper than the market price (approximately $250) by conducting market research and negotiated with local hardware sellers",
      "I was featured in a local news that garnered 10k shares",
    ],
    img: [
      "/duckiepi/1.jpg",
      "/duckiepi/2.jpg",
      "/duckiepi/3.jpg",
      "/duckiepi/4.jpg",
    ],
  },
];
const contactConfig = {
  YOUR_EMAIL: "mameehy@hotmail.com",
  description: "Let's build the future together",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_6cgwmct",
  YOUR_TEMPLATE_ID: "template_ly7qgod",
  YOUR_USER_ID: "0MHtPN73undfBp2j7",
};

const socialprofils = {
  github: "https://github.com/DenardYap",
  linkedin: "https://www.linkedin.com/in/bernard-yap/",
};

const courses = [
  "Object-Oriented Programming",
  "Data Structure & Algorithm",
  "Computer Vision",
  "Natural Language Process",
  "Introduction to Machine Learning",
  "Database Management System",
  "Operating System",
  "Introduction to Computer Organization",
  "Linear Algebra",
  "Discrete Math",
  "Applied Regression",
  "Introduction to Data Science",
  "Probability Statistics",
];

const education = [
  {
    school: "University of Michigan, Ann Arbor",
    time: "Aug 2021 - Dec 2023",
    degree: "Bachelor of Science in Data Science",
    gpa: "3.9 / 4.0",
    location: "Ann Arbor, Michigan",
  },

  {
    school: "Taylor's University",
    time: "May 2019  - Aug 2020",
    degree: "Bachelor of Science in Computer Science",
    gpa: "3.8 / 4.0",
    location: "Subang Jaya, Selangor, Malaysia",
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  physicalportfolio,
  worktimeline,
  skills,
  languages,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  hobby,
  work,
  courses,
  education,
};
