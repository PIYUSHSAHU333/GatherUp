const events = [
  {
    name: "CodeSprint 2025",
    date: new Date("2025-05-12"),
    Venue: "IIT Delhi, Main Auditorium",
    City: "New Delhi",
    description: "A national-level hackathon focused on AI and sustainability.",
    StartTime: new Date("2025-05-12T10:00:00"),
    endTime: new Date("2025-05-12T20:00:00")
  },
  {
    name: "TechFusion Workshop",
    date: new Date("2025-05-15"),
    Venue: "BITS Pilani, Lecture Hall 2",
    City: "Pilani",
    description: "Hands-on IoT workshop with real-world projects.",
    StartTime: new Date("2025-05-15T09:30:00"),
    endTime: new Date("2025-05-15T13:30:00")
  },
  {
    name: "Hack the Future",
    date: new Date("2025-05-18"),
    Venue: "IIT Bombay, Computer Center",
    City: "Mumbai",
    description: "24-hour hackathon focused on FinTech and HealthTech.",
    StartTime: new Date("2025-05-18T10:00:00"),
    endTime: new Date("2025-05-19T10:00:00")
  },
  {
    name: "CyberSecure India",
    date: new Date("2025-05-20"),
    Venue: "NIT Trichy, Hall B",
    City: "Tiruchirappalli",
    description: "A workshop on ethical hacking and cybersecurity fundamentals.",
    StartTime: new Date("2025-05-20T11:00:00"),
    endTime: new Date("2025-05-20T15:00:00")
  },
  {
    name: "InnovateX Fest",
    date: new Date("2025-05-22"),
    Venue: "IIIT Hyderabad, Open Grounds",
    City: "Hyderabad",
    description: "A tech + cultural fest celebrating innovation and creativity.",
    StartTime: new Date("2025-05-22T10:00:00"),
    endTime: new Date("2025-05-22T22:00:00")
  },
  {
    name: "WebDev Bootcamp",
    date: new Date("2025-05-25"),
    Venue: "VIT Vellore, CS Block",
    City: "Vellore",
    description: "Intensive one-day web development bootcamp for beginners.",
    StartTime: new Date("2025-05-25T08:00:00"),
    endTime: new Date("2025-05-25T17:00:00")
  },
  {
    name: "Startup Weekend",
    date: new Date("2025-05-28"),
    Venue: "IIM Bangalore, Seminar Hall",
    City: "Bangalore",
    description: "Ideation to MVP workshop with mentoring from startup founders.",
    StartTime: new Date("2025-05-28T09:00:00"),
    endTime: new Date("2025-05-28T18:00:00")
  },
  {
    name: "DataVerse Hackathon",
    date: new Date("2025-06-01"),
    Venue: "Amity University, Sector 125",
    City: "Noida",
    description: "Hackathon focusing on data science and machine learning problems.",
    StartTime: new Date("2025-06-01T10:00:00"),
    endTime: new Date("2025-06-02T10:00:00")
  },
  {
    name: "Robotics League 2025",
    date: new Date("2025-06-05"),
    Venue: "SRM University, Tech Park",
    City: "Chennai",
    description: "A battle of autonomous bots designed by students.",
    StartTime: new Date("2025-06-05T11:00:00"),
    endTime: new Date("2025-06-05T17:00:00")
  },
  {
    name: "TechTalks Seminar Series",
    date: new Date("2025-06-08"),
    Venue: "MIT Pune, Seminar Hall 3",
    City: "Pune",
    description: "Seminars on the latest trends in AI, cloud, and blockchain.",
    StartTime: new Date("2025-06-08T12:00:00"),
    endTime: new Date("2025-06-08T16:00:00")
  },
  {
    name: "AI in Medicine Hackathon",
    date: new Date("2025-06-10"),
    Venue: "AIIMS Delhi, Innovation Lab",
    City: "New Delhi",
    description: "Build AI models to solve real-world medical challenges.",
    StartTime: new Date("2025-06-10T09:00:00"),
    endTime: new Date("2025-06-11T09:00:00")
  },
  {
    name: "EcoTech Fest",
    date: new Date("2025-06-12"),
    Venue: "IISc Bangalore, Eco Park",
    City: "Bangalore",
    description: "Festival showcasing green technology innovations by students.",
    StartTime: new Date("2025-06-12T10:00:00"),
    endTime: new Date("2025-06-12T20:00:00")
  },
  {
    name: "Blockchain Basics Workshop",
    date: new Date("2025-06-15"),
    Venue: "NIT Warangal, Block D",
    City: "Warangal",
    description: "Introduction to blockchain and building your first smart contract.",
    StartTime: new Date("2025-06-15T13:00:00"),
    endTime: new Date("2025-06-15T17:00:00")
  },
  {
    name: "App-a-thon 2025",
    date: new Date("2025-06-17"),
    Venue: "IIT Roorkee, Software Lab",
    City: "Roorkee",
    description: "Hackathon to design impactful mobile apps for local problems.",
    StartTime: new Date("2025-06-17T10:00:00"),
    endTime: new Date("2025-06-18T10:00:00")
  },
  {
    name: "Machine Learning Crash Course",
    date: new Date("2025-06-20"),
    Venue: "DAIICT Gandhinagar, Seminar Room 4",
    City: "Gandhinagar",
    description: "Beginner-friendly ML workshop with hands-on Python labs.",
    StartTime: new Date("2025-06-20T11:00:00"),
    endTime: new Date("2025-06-20T16:00:00")
  },
  {
    name: "Tech Carnival 2025",
    date: new Date("2025-06-22"),
    Venue: "Manipal University, Central Plaza",
    City: "Manipal",
    description: "A college-wide tech + gaming fest with competitions and food stalls.",
    StartTime: new Date("2025-06-22T10:00:00"),
    endTime: new Date("2025-06-22T21:00:00")
  },
  {
    name: "AR/VR Experience Workshop",
    date: new Date("2025-06-24"),
    Venue: "Jadavpur University, Innovation Hub",
    City: "Kolkata",
    description: "Learn how to build immersive AR/VR applications.",
    StartTime: new Date("2025-06-24T10:00:00"),
    endTime: new Date("2025-06-24T15:30:00")
  },
  {
    name: "Open Source Hackfest",
    date: new Date("2025-06-26"),
    Venue: "IIIT Allahabad, Coding Arena",
    City: "Allahabad",
    description: "Contribute to open-source projects and learn git workflows.",
    StartTime: new Date("2025-06-26T09:00:00"),
    endTime: new Date("2025-06-27T09:00:00")
  },
  {
    name: "Digital Design & UI/UX Workshop",
    date: new Date("2025-06-28"),
    Venue: "Delhi Technological University, Design Lab",
    City: "Delhi",
    description: "Master the basics of Figma and build modern UI mockups.",
    StartTime: new Date("2025-06-28T14:00:00"),
    endTime: new Date("2025-06-28T18:00:00")
  },
  {
    name: "Autonomous Vehicles Symposium",
    date: new Date("2025-07-01"),
    Venue: "IIT Madras, Research Hall",
    City: "Chennai",
    description: "Talks and workshops on self-driving tech and control systems.",
    StartTime: new Date("2025-07-01T10:00:00"),
    endTime: new Date("2025-07-01T16:00:00")
  },
  {
    name: "Cybersecurity Bootcamp",
    date: new Date("2025-07-03"),
    Venue: "VIT Vellore, Cyber Lab",
    City: "Vellore",
    description: "Hands-on sessions on ethical hacking, network security, and digital forensics.",
    StartTime: new Date("2025-07-03T09:30:00"),
    endTime: new Date("2025-07-03T17:30:00")
  },
  {
    name: "Robotics Challenge 2025",
    date: new Date("2025-07-05"),
    Venue: "BITS Pilani, Robotics Arena",
    City: "Pilani",
    description: "Teams compete in building bots for real-world automation tasks.",
    StartTime: new Date("2025-07-05T10:00:00"),
    endTime: new Date("2025-07-05T18:00:00")
  },
  {
    name: "Data Science Masterclass",
    date: new Date("2025-07-08"),
    Venue: "SRM University, Main Auditorium",
    City: "Chennai",
    description: "In-depth training on Python, pandas, scikit-learn, and real datasets.",
    StartTime: new Date("2025-07-08T11:00:00"),
    endTime: new Date("2025-07-08T16:30:00")
  },
  {
    name: "FinTech Hackathon",
    date: new Date("2025-07-10"),
    Venue: "Christ University, Commerce Block",
    City: "Bangalore",
    description: "Build innovative financial apps using APIs, UPI, and blockchain.",
    StartTime: new Date("2025-07-10T09:00:00"),
    endTime: new Date("2025-07-11T09:00:00")
  },
  {
    name: "Web3 & Crypto Workshop",
    date: new Date("2025-07-12"),
    Venue: "Amity University, Tech Hall",
    City: "Noida",
    description: "Learn how decentralized apps work and build your first dApp on Ethereum.",
    StartTime: new Date("2025-07-12T13:00:00"),
    endTime: new Date("2025-07-12T17:00:00")
  }
];
export const data = events;