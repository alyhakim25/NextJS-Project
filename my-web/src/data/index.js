const Biodata = [
  {
    id: "m1",
    title: "Intro",
    introduction:
      "Hello, thanks for visiting my webpage. Anyway, let me introduce myself, " +
      "my name is Hakim, I am from Indonesia and living in Batam. My motto is " +
      '"You will never know until you try it". Currently i am a Software ' +
      "Engineer from one of the companies in Batam, im strong in desktop " +
      "application development, android development, and robotic program.",
    detail: [
      "I utilize the C#, Python, and C programming languages to " +
        "develop desktop applications. For Android application development, I " +
        "use the Flutter & React Native for the hybrid type, and Java for the " +
        "native type. For robotics, I am proficient in programming robot " +
        "control systems, sensory systems, and other essential robot " +
        "functionalities.",
      "Additionally, I possess strong English language " +
        "skills and excel in effective time management for each of my responsibilities. " +
        "I have a genuine enthusiasm for acquiring new knowledge in the field of " +
        "programming science. That's what I can share here. If you'd like to " +
        "learn more about me, feel free to reach out.",
    ],
    image:
      "/image/public/general/my_photo1.jpg",
    expand: true,
  },
];
const Project = [
  {
    id: "p1",
    title: "My Project",
    introduction:
      "There are several projects that I have undertaken, " +
      "spanning from my college years to the present. " +
      "The projects I work on encompass a wide spectrum, " +
      "including desktop applications, Android applications, " +
      "websites, servers, and robotics. Each project presents " +
      "its unique set of difficulties and challenges. Below " +
      "is a list of the projects I have undertaken: ",
    detail: [" "],
    image:
      "/image/public/general/project.jpg",
    expand: true,
  },
  {
    id: "p2",
    title: "Delivery drone",
    introduction:
    'This project was undertaken as part of participation in PIMNAS 21, '+
    'which took place in Bali in 2019. The project comprises three key '+
    'components: drones, Android applications, and servers. The drone\'s '+
    'role is to transport goods from the delivery point to the destination, '+
    'with information sourced from the server. The Android application provides '+
    'details on the drone\'s path, and this information is subsequently stored on '+
    'the server.',
    detail: [],
    image:
      "/image/project/drone/prototype_drone.jpg",
    expand: false,
    ready: false
  },
  {
    id: "p3",
    title: "Dicoding Android Assignment",
    introduction:
    'In this project, I developed an application to showcase a list of '+
    'dishes along with their corresponding recipes. I utilized '+
    'RecyclerView to efficiently display and manage the list of items. I '+
    'developed this application using Kotlin programming language. ',
    detail: [],
    image:
      "/image/project/dicoding/project_dicoding_1.jpg",
    expand: false,
    ready: false
  },
  {
    id: "p4",
    title: "Rental Online Application",
    introduction:
    'In this project, I developed an application designed for renting vehicles for specified '+
    'durations. The motivation behind creating this application stemmed from the observed shortage '+
    'of service providers in this particular field. The programming language employed for this project '+
    'is React. The technologies integrated into this application include GPS, Directions API, Places API, '+
    'Geolocation API, a payment gateway, and Firebase database.',
    detail: [],
    image:
      "/image/public/general/not_found.jpg",
    expand: false,
    ready: false
  },
  {
    id: "p5",
    title: "Attendance Application",
    introduction:
    'This application serves the purpose of recording attendance, generating leave '+
    'documents, and handling other documentation, along with logging daily tasks. It '+
    'utilizes HTTP responses to store data in the hosting database and it\'s developed using '+
    'the Flutter programming language.',
    detail: [],
    image:
      "/image/project/attendance/project_absen_1.jpg",
    images:[
      "/image/project/attendance/project_absen_1.jpg",
      "/image/project/attendance/project_absen_2.jpg",
      "/image/project/attendance/project_absen_3.jpg",
      "/image/project/attendance/project_absen_4.jpg",
      "/image/project/attendance/project_absen_5.jpg",
      "/image/project/attendance/project_absen_6.jpg",
      "/image/project/attendance/project_absen_7.jpg",
      "/image/project/attendance/project_absen_8.jpg",
      "/image/project/attendance/project_absen_9.jpg"
    ],
    expand: false,
    ready: true
  },
  {
    id: "p6",
    title: "GCS for drone",
    introduction:
    'This application was developed to participate in the national-level KRTI competition. '+
    'GCS is a desktop application designed for monitoring the movement and sensors of drones. '+
    'The project was implemented using the C# programming language, with data retrieval methods '+
    'employing both USB and wireless communication.',
    detail: [],
    image:
      "/image/project/gcs/GCS.jpg",
    expand: false,
    ready: false
  },
  {
    id: "p7",
    title: "Appointment Hospital Application",
    introduction:
    'This application was developed to participate in the national-level KRTI competition. '+
    'GCS is a desktop application designed for monitoring the movement and sensors of drones. '+
    'The project was implemented using the C# programming language, with data retrieval methods '+
    'employing both USB and wireless communication.',
    detail: [],
    image:
      "/image/public/general/not_found.jpg",
    expand: false,
    ready: false
  },
];
const Contact={
  id: "c1",
  title: "Contact",
  introduction: "If you are interested in knowing more about me, feel free to contact me via the social media links in My Profile page.",
  detail:[],
  image:
      "/image/public/general/sosmed.jpg",
  expand: false,
}
const Experience=[
  {
  id: "e1",
  title: "Experience",
  introduction: "In the following, here is my experience for now.",
  detail:[],
  image:
      "",
  expand: false,
},
{
  id: "e2",
  title: "PT.TEC Indonesia",
  introduction: "Position : Software Engineering, February 2022 - now",
  detail:["While working here, my duties include maintaining software that has been released to production and developing new programs for a new feature added to the product. The skills I apply in this job include C# and Python for desktop applications, and Kotlin for Android applications."],
  image:
      "/image/public/general/ptTEC.jpg",
  expand: false,
}
]

export { Biodata, Project, Contact, Experience };
