export const timeAns = 20;

export const initialState = [

  // Questions pour la catégorie "frontend"
  {
    category: "frontend",
    question: "Which CSS property is used to create a flexible box layout?",
    options: ["flex-direction", "box-sizing", "flex-wrap", "display"],
    ans: "display",
  },
  {
    category: "frontend",
    question: "What is the purpose of 'useState' hook in React?",
    options: [
      "To perform side effects",
      "To manage state in functional components",
      "To define routes in React Router",
      "To handle HTTP requests",
    ],
    ans: "To manage state in functional components",
  },
  {
    category: "frontend",
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onHover", "onSubmit", "onFocus", "onClick"],
    ans: "onClick",
  },
  {
    category: "frontend",
    question:
      "Which JavaScript method is used to add new items to the end of an array?",
    options: ["push()", "join()", "splice()", "concat()"],
    ans: "push()",
  },
  {
    category: "frontend",
    question: "What is the purpose of 'localStorage' in web development?",
    options: [
      "To style HTML elements",
      "To manage cookies",
      "To store data locally in the browser",
      "To handle server-side routing",
    ],
    ans: "To store data locally in the browser",
  },
  // Questions supplémentaires pour la catégorie "frontend"
  {
    category: "frontend",
    question: "What is the purpose of 'CSS Grid' in web layout design?",
    options: [
      "To create responsive web designs",
      "To manage database connections",
      "To handle server-side routing",
      "To style HTML elements in columns and rows",
    ],
    ans: "To style HTML elements in columns and rows",
  },
  {
    category: "frontend",
    question:
      "Which method is used to perform animations in modern web development?",
    options: ["transition()", "animate()", "change()", "transform()"],
    ans: "animate()",
  },
  {
    category: "frontend",
    question: "What does 'DOM' stand for in web development?",
    options: [
      "Document Object Model",
      "Dynamic Object Model",
      "Data Object Model",
      "Display Object Model",
    ],
    ans: "Document Object Model",
  },
  {
    category: "frontend",
    question: "Which HTML tag is used to link an external JavaScript file?",
    options: ["<link>", "<script>", "<href>", "<js>"],
    ans: "<script>",
  },
  {
    category: "frontend",
    question: "What is the purpose of 'AJAX' in web development?",
    options: [
      "To validate forms",
      "To handle asynchronous HTTP requests",
      "To compress image files",
      "To encrypt data transmissions",
    ],
    ans: "To handle asynchronous HTTP requests",
  },

  // Questions supplémentaires pour la catégorie "backend"
  {
    category: "backend",
    question:
      "Which language is commonly used for server-side scripting in web development?",
    options: ["HTML", "JavaScript", "Python", "CSS"],
    ans: "JavaScript",
  },
  {
    category: "backend",
    question: "What is the purpose of 'Express' in Node.js development?",
    options: [
      "To manage database connections",
      "To handle server-side routing",
      "To create authentication tokens",
      "To handle frontend layout",
    ],
    ans: "To handle server-side routing",
  },
  {
    category: "backend",
    question:
      "Which type of databases use tables and SQL for data storage and retrieval?",
    options: [
      "NoSQL databases",
      "Relational databases",
      "Document-oriented databases",
      "Graph databases",
    ],
    ans: "Relational databases",
  },
  {
    category: "backend",
    question: "What does 'CRUD' stand for in database operations?",
    options: [
      "Create, Read, Update, Delete",
      "Compile, Run, Undo, Debug",
      "Copy, Reset, Upload, Deploy",
      "Compute, Render, Utilize, Deploy",
    ],
    ans: "Create, Read, Update, Delete",
  },
  {
    category: "backend",
    question:
      "Which HTTP method is commonly used to delete a resource on the server?",
    options: ["POST", "PUT", "GET", "DELETE"],
    ans: "DELETE",
  },
  {
    category: "backend",
    question: "What does 'SQL' stand for in database management?",
    options: [
      "Simple Query Language",
      "Structured Question Language",
      "Structured Query Language",
      "Sequential Question Language",
    ],
    ans: "Structured Query Language",
  },
  {
    category: "backend",
    question:
      "Which software is commonly used as a database management system in web development?",
    options: ["Microsoft Word", "Postman", "Oracle", "MySQL"],
    ans: "MySQL",
  },
  {
    category: "backend",
    question: "Which method is used to handle HTTP requests in Node.js?",
    options: ["get()", "request()", "handle()", "send()"],
    ans: "get()",
  },
  {
    category: "backend",
    question: "What is the primary role of a 'server' in web development?",
    options: [
      "To manage frontend layouts",
      "To handle client-side scripting",
      "To store session data",
      "To process and respond to client requests",
    ],
    ans: "To process and respond to client requests",
  },
  {
    category: "backend",
    question: "What is the purpose of 'bcrypt' in web security?",
    options: [
      "To encrypt data transmissions",
      "To hash passwords",
      "To validate forms",
      "To compress files",
    ],
    ans: "To hash passwords",
  },
  // Questions supplémentaires pour la catégorie "fullstack"
  {
    category: "fullstack",
    question: "What is the purpose of 'JWT' in web development?",
    options: [
      "To store session data in cookies",
      "To create database tables",
      "To handle authentication and authorization",
      "To manage frontend layout",
    ],
    ans: "To handle authentication and authorization",
  },
  {
    category: "fullstack",
    question:
      "Which method is used to make asynchronous HTTP requests in JavaScript?",
    options: ["fetch()", "get()", "request()", "send()"],
    ans: "fetch()",
  },
  {
    category: "fullstack",
    question: "What is the purpose of 'CORS' in web development?",
    options: [
      "To improve SEO",
      "To restrict access to specific routes",
      "To prevent Cross-Site Scripting (XSS) attacks",
      "To allow or restrict resource access from different origins",
    ],
    ans: "To allow or restrict resource access from different origins",
  },
  {
    category: "fullstack",
    question: "Which tool is used to inspect and debug JavaScript code?",
    options: [
      "Visual Studio Code",
      "Chrome DevTools",
      "Eclipse",
      "Sublime Text",
    ],
    ans: "Chrome DevTools",
  },
  {
    category: "fullstack",
    question: "What is the purpose of a 'favicon' in web development?",
    options: [
      "To secure APIs",
      "To store user preferences",
      "To display an icon for a website",
      "To manage session data",
    ],
    ans: "To display an icon for a website",
  },
  {
    category: "fullstack",
    question:
      "What is the purpose of 'webpack' in Full Stack JavaScript development?",
    options: [
      "To manage database schemas",
      "To handle frontend assets bundling",
      "To perform backend load balancing",
      "To create authentication tokens",
    ],
    ans: "To handle frontend assets bundling",
  },
  {
    category: "fullstack",
    question:
      "Which architectural pattern is commonly used for building scalable web applications?",
    options: [
      "MVC (Model-View-Controller)",
      "CRUD (Create, Read, Update, Delete)",
      "DOM (Document Object Model)",
      "SQL (Structured Query Language)",
    ],
    ans: "MVC (Model-View-Controller)",
  },
  {
    category: "fullstack",
    question:
      "What is the purpose of 'Babel' in modern JavaScript development?",
    options: [
      "To test and debug JavaScript code",
      "To transpile newer JavaScript code to older versions",
      "To manage CSS styling",
      "To handle server-side routing",
    ],
    ans: "To transpile newer JavaScript code to older versions",
  },
  {
    category: "fullstack",
    question:
      "Which protocol is commonly used for real-time communication between a web client and server?",
    options: ["HTTP", "FTP", "WebSocket", "SSH"],
    ans: "WebSocket",
  },
  {
    category: "fullstack",
    question: "What is the purpose of 'middleware' in Node.js development?",
    options: [
      "To render frontend components",
      "To handle asynchronous operations",
      "To manage database connections",
      "To encrypt data transmissions",
    ],
    ans: "To handle asynchronous operations",
  }, 
];


