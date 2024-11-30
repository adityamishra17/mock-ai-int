const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Job Position: Full Stack Developer, Job Description: React, Nodejs MySql , Years of Experience: 6 , Depends on this information\nplease give me 5 Interview question with Answered in Json Format, Give Question and Answered as field in JSON"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"Question\": \"Describe your experience with React.js, focusing on specific projects where you utilized its key features (e.g., components, state management, hooks).  Provide examples of challenges you faced and how you overcame them.\",\n    \"Answer\": \"In my six years of experience, I've extensively used React.js in various projects, including a large-scale e-commerce platform where I built reusable components for product listings and shopping carts using functional components and hooks like `useState` and `useEffect`.  One challenge was optimizing performance for a product catalog with thousands of items.  To address this, I implemented pagination and lazy loading, significantly improving the user experience.  I also leveraged React's Context API for managing global state, avoiding prop drilling and enhancing maintainability.  In another project, a single-page application for data visualization, I utilized Redux for more complex state management, particularly helpful in handling asynchronous operations and data updates.\"\n  },\n  {\n    \"Question\": \"Explain your understanding of Node.js and its role in building scalable backend systems.  Give an example of a project where you used Node.js and highlight its advantages and disadvantages compared to other backend technologies you've worked with.\",\n    \"Answer\": \"Node.js's non-blocking, event-driven architecture makes it ideal for building scalable and real-time applications.  I've used it extensively in building RESTful APIs for several projects, including the aforementioned e-commerce platform.  Its asynchronous nature allowed me to handle numerous concurrent requests efficiently.  I chose Node.js over other options like Java or Python for this project because of its speed of development and its large and active community support.  However, its single-threaded nature can present challenges when dealing with CPU-intensive tasks. In such cases, I would leverage techniques like worker threads or cluster modules to distribute the workload effectively.\"\n  },\n  {\n    \"Question\": \"How do you handle database interactions in your applications using MySQL? Describe your experience with designing database schemas, writing efficient queries, and ensuring data integrity.\",\n    \"Answer\": \"My experience with MySQL includes designing normalized database schemas, writing optimized SQL queries, and implementing data validation to ensure data integrity.  I commonly use Object-Relational Mappers (ORMs) like Sequelize or TypeORM to interact with the database, which simplifies database operations and improves code readability. I'm proficient in writing complex queries involving joins, subqueries, and aggregate functions.  For instance, in the e-commerce platform, I optimized query performance by using appropriate indexing strategies and caching mechanisms.  I also have experience with database transactions to maintain consistency and data integrity, especially crucial during operations like order processing and user account updates.\"\n  },\n  {\n    \"Question\": \"Describe your approach to testing in a full-stack development environment.  What types of tests do you typically write, and what tools or frameworks do you prefer?\",\n    \"Answer\": \"I follow a comprehensive testing strategy that includes unit, integration, and end-to-end testing. For unit testing in React, I use Jest and React Testing Library, focusing on testing individual components in isolation.  For backend testing with Node.js and Express, I use Jest and Supertest to test API endpoints and their responses.  I also perform integration tests to verify the interaction between different parts of the application, and end-to-end tests using Cypress or Selenium to ensure the entire system works as expected from the user's perspective.  My testing approach is crucial in ensuring code quality, preventing regressions, and facilitating continuous integration and continuous delivery (CI/CD).\"\n  },\n  {\n    \"Question\": \"Describe a challenging technical problem you encountered in a past project and how you approached solving it.  What did you learn from this experience?\",\n    \"Answer\": \"In one project involving a high-traffic social media application, we experienced performance bottlenecks due to inefficient database queries and slow API responses.  My approach involved profiling the application to pinpoint performance hotspots.  I discovered several poorly optimized queries that were causing excessive database load.  To solve this, I optimized these queries using appropriate indexing and query rewriting techniques.  I also implemented caching strategies using Redis to reduce database load further.  This experience taught me the importance of proactive performance monitoring and optimization, and the value of using profiling tools to identify and resolve performance bottlenecks.  I learned the significance of choosing appropriate data structures and algorithms for optimal performance.\"\n  }\n]\n```\n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}


     export const chatSession = model.startChat({
      generationConfig,
      
    });
  
   
  