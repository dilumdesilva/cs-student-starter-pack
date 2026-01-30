// ─── Resource Data ───────────────────────────────────────────────────────────
const RESOURCES = [
  // ── Ambassadorship Programs ───────────────────────────────────────────────
  { name: "GitHub Campus Experts", url: "https://education.github.com/students/experts", description: "Program by GitHub Education for student community leaders", category: "Ambassadorship Programs", subcategory: "", tags: ["github", "education", "community", "leadership"] },
  { name: "AWS Student Ambassador", url: "https://aws.amazon.com/education/awseducate/student-ambassador-program/", description: "Amazon Web Services student ambassador program", category: "Ambassadorship Programs", subcategory: "", tags: ["aws", "amazon", "cloud"] },
  { name: "Campus Ambassador at Coding Ninjas", url: "https://www.codingninjas.com/blog/tag/campus-ambassador/", description: "Campus ambassador program by Coding Ninjas", category: "Ambassadorship Programs", subcategory: "", tags: ["coding", "campus"] },
  { name: "HackerEarth University Ambassador", url: "https://www.hackerearth.com/university/", description: "University ambassador program by HackerEarth", category: "Ambassadorship Programs", subcategory: "", tags: ["hackerearth", "competitive programming"] },
  { name: "OnePlus Student Ambassador", url: "https://www.oneplus.in/campus", description: "Student ambassador program by OnePlus", category: "Ambassadorship Programs", subcategory: "", tags: ["oneplus", "campus"] },
  { name: "Graduate Programme Advisor at Shell", url: "https://www.shell.com/careers/about-careers-at-shell/shell-graduate-programme.html", description: "Shell graduate programme and advisory roles", category: "Ambassadorship Programs", subcategory: "", tags: ["shell", "graduate", "career"] },
  { name: "TechGig Campus Ambassador", url: "https://www.techgig.com/campus-ambassador", description: "Campus ambassador program by TechGig", category: "Ambassadorship Programs", subcategory: "", tags: ["techgig", "campus"] },
  { name: "Cisco DevNet Student Ambassador", url: "https://developer.cisco.com/site/student/", description: "Student ambassador program by Cisco DevNet", category: "Ambassadorship Programs", subcategory: "", tags: ["cisco", "networking", "devnet"] },
  { name: "Microsoft Student Partners", url: "https://studentambassadors.microsoft.com/en-us", description: "Microsoft student partnership and ambassador program", category: "Ambassadorship Programs", subcategory: "", tags: ["microsoft", "student"] },
  { name: "Mozilla Campus Club", url: "https://campus.mozilla.community", description: "Mozilla campus community clubs for students", category: "Ambassadorship Programs", subcategory: "", tags: ["mozilla", "open source", "community"] },
  { name: "Student Ambassador by IBM", url: "https://www.ibm.com/developerworks/champion/students.html", description: "IBM student ambassador and champion program", category: "Ambassadorship Programs", subcategory: "", tags: ["ibm", "cloud", "enterprise"] },
  { name: "Postman Student Leader", url: "https://www.postman.com/company/student-program/", description: "Postman student leader program for API advocacy", category: "Ambassadorship Programs", subcategory: "", tags: ["postman", "api", "testing"] },
  { name: "Twilio Field Operators", url: "https://airtable.com/shrNjeti4pr5ALdTg", description: "Twilio field operators student program", category: "Ambassadorship Programs", subcategory: "", tags: ["twilio", "communication", "api"] },
  { name: "GeeksforGeeks Campus Ambassador", url: "https://www.geeksforgeeks.org/campus-ambassador-program-by-geeksforgeeks/", description: "Campus ambassador program by GeeksforGeeks", category: "Ambassadorship Programs", subcategory: "", tags: ["geeksforgeeks", "programming", "campus"] },
  { name: "Microsoft Learn Student Ambassadors", url: "https://studentambassadors.microsoft.com/", description: "Microsoft Learn student ambassador community", category: "Ambassadorship Programs", subcategory: "", tags: ["microsoft", "learning", "community"] },
  { name: "Developer Circle (Meta)", url: "https://developers.facebook.com/developercircles/", description: "Meta Developer Circles community program", category: "Ambassadorship Programs", subcategory: "", tags: ["meta", "facebook", "community"] },
  { name: "Developer Student Clubs (Google)", url: "https://developers.google.com/community/gdsc", description: "Google Developer Student Clubs for university students", category: "Ambassadorship Programs", subcategory: "", tags: ["google", "gdsc", "community"] },
  { name: "Intel Student Ambassador", url: "https://devmesh.intel.com/member-programs/intel-student-ambassador-program/", description: "Intel student ambassador program for tech advocates", category: "Ambassadorship Programs", subcategory: "", tags: ["intel", "hardware", "community"] },
  { name: "AWS Educate", url: "https://aws.amazon.com/education/awseducate/", description: "AWS program providing cloud learning resources for students", category: "Ambassadorship Programs", subcategory: "", tags: ["aws", "cloud", "education"] },

  // ── Books ─────────────────────────────────────────────────────────────────
  { name: "Free Programming Books", url: "https://github.com/EbookFoundation/free-programming-books", description: "Freely available programming books in many languages", category: "Books", subcategory: "Free Book Collections", tags: ["books", "free", "programming", "multilingual"] },
  { name: "GoBooks", url: "https://github.com/dariubs/GoBooks", description: "List of Go programming books", category: "Books", subcategory: "Free Book Collections", tags: ["go", "golang", "books"] },
  { name: "Free Security eBooks", url: "https://github.com/Hack-with-Github/Free-Security-eBooks", description: "Free security and hacking eBooks", category: "Books", subcategory: "Free Book Collections", tags: ["security", "hacking", "free", "ebooks"] },
  { name: "Open Source CS Degree", url: "https://github.com/ForrestKnight/open-source-cs", description: "Free courses from top universities for a complete CS curriculum", category: "Books", subcategory: "CS Fundamentals", tags: ["computer science", "curriculum", "free", "university"] },
  { name: "Teach Yourself Computer Science", url: "https://teachyourselfcs.com/", description: "Guide to self-studying computer science", category: "Books", subcategory: "CS Fundamentals", tags: ["computer science", "self-study", "guide"] },
  { name: "Computer Science from the Bottom Up", url: "https://www.bottomupcs.com/", description: "Understanding computers from low-level to high-level", category: "Books", subcategory: "CS Fundamentals", tags: ["computer science", "low-level", "hardware"] },
  { name: "Clean Code JavaScript", url: "https://github.com/ryanmcdermott/clean-code-javascript", description: "Clean Code concepts adapted for JavaScript", category: "Books", subcategory: "Software Engineering", tags: ["javascript", "clean code", "best practices"] },
  { name: "Design Patterns for Humans", url: "https://github.com/kamranahmedse/design-patterns-for-humans", description: "Ultra-simplified explanation of design patterns", category: "Books", subcategory: "Software Engineering", tags: ["design patterns", "software engineering", "oop"] },
  { name: "Refactoring Guru", url: "https://refactoring.guru/", description: "Design patterns and refactoring techniques", category: "Books", subcategory: "Software Engineering", tags: ["design patterns", "refactoring", "software engineering"] },
  { name: "The Algorithm Design Manual", url: "http://www.algorist.com/", description: "Steven Skiena's Algorithm Design Manual", category: "Books", subcategory: "Algorithms", tags: ["algorithms", "data structures", "textbook"] },
  { name: "Competitive Programmer's Handbook", url: "https://cses.fi/book/book.pdf", description: "Free book on competitive programming by Antti Laaksonen", category: "Books", subcategory: "Algorithms", tags: ["competitive programming", "algorithms", "free"] },
  { name: "You Don't Know JS", url: "https://github.com/getify/You-Dont-Know-JS", description: "Deep dive into JavaScript book series", category: "Books", subcategory: "Web Development", tags: ["javascript", "deep dive", "book series"] },
  { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/", description: "Modern introduction to programming with JavaScript", category: "Books", subcategory: "Web Development", tags: ["javascript", "programming", "beginner"] },

  // ── Communities ────────────────────────────────────────────────────────────
  { name: "GitHub Community Sri Lanka", url: "https://m.facebook.com/GitHubCommunityLK/", description: "GitHub community in Sri Lanka", category: "Communities", subcategory: "Sri Lanka", tags: ["github", "sri lanka", "community"] },
  { name: "Colombo Flutter Community", url: "https://m.facebook.com/flutterCMB/", description: "Flutter developer community in Colombo", category: "Communities", subcategory: "Sri Lanka", tags: ["flutter", "mobile", "sri lanka"] },
  { name: "Stackoverflowers Sri Lanka", url: "https://www.facebook.com/groups/879149618935395/", description: "Stack Overflow community group in Sri Lanka", category: "Communities", subcategory: "Sri Lanka", tags: ["stackoverflow", "sri lanka", "q&a"] },
  { name: "Google Developer Group Sri Lanka", url: "https://www.facebook.com/GDGSriLanka/", description: "Google Developer Group in Sri Lanka", category: "Communities", subcategory: "Sri Lanka", tags: ["google", "gdg", "sri lanka"] },
  { name: "Mozilla Sri Lanka", url: "https://www.facebook.com/mozillalk/", description: "Mozilla community in Sri Lanka", category: "Communities", subcategory: "Sri Lanka", tags: ["mozilla", "open source", "sri lanka"] },
  { name: "NASA Space Apps Sri Lanka", url: "https://discord.gg/e2KhFHTdzM", description: "NASA Space Apps community in Sri Lanka", category: "Communities", subcategory: "Sri Lanka", tags: ["nasa", "space", "hackathon", "sri lanka"] },
  { name: "Girls In Tech", url: "https://girlsintech.org/", description: "Nonprofit dedicated to eliminating the gender gap in tech", category: "Communities", subcategory: "Women in Tech", tags: ["women", "diversity", "tech"] },
  { name: "Girls Teaching Girls to Code", url: "https://www.girlsteachinggirlstocode.org/", description: "Program empowering girls to learn computer science", category: "Communities", subcategory: "Women in Tech", tags: ["women", "education", "coding"] },
  { name: "Girls Who Code", url: "https://girlswhocode.com/", description: "International nonprofit closing the gender gap in tech", category: "Communities", subcategory: "Women in Tech", tags: ["women", "coding", "nonprofit"] },
  { name: "Women Who Code", url: "https://www.womenwhocode.com/", description: "Global nonprofit inspiring women to excel in tech careers", category: "Communities", subcategory: "Women in Tech", tags: ["women", "career", "tech"] },
  { name: "Women in Computer Science", url: "https://www.stanfordwomenincomputerscience.com/", description: "Stanford Women in Computer Science community", category: "Communities", subcategory: "Women in Tech", tags: ["women", "stanford", "computer science"] },
  { name: "Built by Girls", url: "https://www.builtbygirls.com/", description: "Preparing the next generation of women in tech", category: "Communities", subcategory: "Women in Tech", tags: ["women", "mentorship", "tech"] },

  // ── Competitions & Hackathons ──────────────────────────────────────────────
  { name: "Season of KDE", url: "https://season.kde.org/", description: "KDE community outreach program for open-source contributors", category: "Competitions & Hackathons", subcategory: "General", tags: ["kde", "open source", "mentorship"] },
  { name: "Major League Hacking", url: "https://mlh.io/", description: "Official student hackathon league", category: "Competitions & Hackathons", subcategory: "General", tags: ["hackathon", "mlh", "student"] },
  { name: "Google Code Jam", url: "https://codingcompetitions.withgoogle.com/codejam", description: "Google's coding competition for programmers worldwide", category: "Competitions & Hackathons", subcategory: "General", tags: ["google", "competitive programming", "contest"] },
  { name: "CodeAgon", url: "https://www.interviewbit.com/contest/codeagon-2021-106e/", description: "Coding competition by InterviewBit", category: "Competitions & Hackathons", subcategory: "General", tags: ["contest", "coding", "interviewbit"] },
  { name: "Google Summer of Code", url: "https://summerofcode.withgoogle.com/", description: "Global program for new open-source contributors", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["google", "open source", "summer", "stipend"] },
  { name: "Google Season of Docs", url: "https://developers.google.com/season-of-docs", description: "Program for technical writers to contribute to open source", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["google", "documentation", "open source", "writing"] },
  { name: "Fossasia Codeheat", url: "https://codeheat.org/", description: "Coding contest for Fossasia open-source projects", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["fossasia", "open source", "contest"] },
  { name: "Hacktoberfest", url: "https://hacktoberfest.digitalocean.com/", description: "Month-long celebration of open-source software", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["hacktoberfest", "open source", "digitalocean", "october"] },
  { name: "MLH Fellowship", url: "https://fellowship.mlh.io/", description: "Internship alternative for aspiring software engineers", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["mlh", "fellowship", "open source", "internship"] },
  { name: "Open Mainframe Project Mentorship", url: "https://www.openmainframeproject.org/all-projects/mentorship-program", description: "Mentorship program for mainframe open-source projects", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["mainframe", "linux foundation", "mentorship"] },
  { name: "Linux Kernel Mentorship", url: "https://wiki.linuxfoundation.org/lkmp", description: "Linux Foundation kernel mentorship program", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["linux", "kernel", "mentorship"] },
  { name: "Redox OS Summer of Code", url: "https://www.redox-os.org/rsoc/", description: "Summer of Code for the Redox operating system", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["redox", "os", "rust", "open source"] },
  { name: "Hyperledger Mentorship", url: "https://wiki.hyperledger.org/display/INTERN", description: "Mentorship program for Hyperledger blockchain projects", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["hyperledger", "blockchain", "mentorship"] },
  { name: "Open Summer of Code", url: "https://osoc.be/", description: "Summer programme for students to build open-source projects", category: "Competitions & Hackathons", subcategory: "Open Source", tags: ["summer", "open source", "belgium"] },
  { name: "GirlScript Summer of Code", url: "https://gssoc.girlscript.tech/", description: "Open-source program by GirlScript Foundation", category: "Competitions & Hackathons", subcategory: "Women in Tech", tags: ["women", "open source", "girlscript"] },
  { name: "Rails Girls Summer of Code", url: "https://railsgirlssummerofcode.org/", description: "Global fellowship for women and non-binary coders", category: "Competitions & Hackathons", subcategory: "Women in Tech", tags: ["women", "rails", "fellowship", "open source"] },
  { name: "Blackhoodie", url: "https://blackhoodie.re/", description: "Reverse engineering workshops for women", category: "Competitions & Hackathons", subcategory: "Women in Tech", tags: ["women", "reverse engineering", "security"] },
  { name: "Microsoft DigiGirlz", url: "https://www.microsoft.com/en-us/diversity/programs/digigirlz/default.aspx", description: "Microsoft program giving girls opportunities in tech", category: "Competitions & Hackathons", subcategory: "Women in Tech", tags: ["microsoft", "women", "diversity"] },
  { name: "Women's Technology Program (MIT)", url: "http://wtp.mit.edu/", description: "MIT summer program for high school women in STEM", category: "Competitions & Hackathons", subcategory: "Women in Tech", tags: ["mit", "women", "stem", "summer"] },

  // ── Courses & Tutorials ────────────────────────────────────────────────────
  { name: "freeCodeCamp", url: "https://github.com/freeCodeCamp/freeCodeCamp", description: "Full-stack web development and machine learning curriculum with certifications", category: "Courses & Tutorials", subcategory: "Full Curricula", tags: ["web development", "full stack", "certification", "free"] },
  { name: "OSSU Computer Science", url: "https://github.com/ossu/computer-science", description: "Path to a free self-taught education in Computer Science", category: "Courses & Tutorials", subcategory: "Full Curricula", tags: ["computer science", "curriculum", "self-taught", "free"] },
  { name: "The Odin Project", url: "https://www.theodinproject.com/", description: "Free full-stack curriculum using Ruby on Rails and JavaScript", category: "Courses & Tutorials", subcategory: "Full Curricula", tags: ["web development", "full stack", "ruby", "javascript", "free"] },
  { name: "Khan Academy Computing", url: "https://www.khanacademy.org/computing", description: "Free computing courses from basics to advanced topics", category: "Courses & Tutorials", subcategory: "Full Curricula", tags: ["computing", "beginner", "free", "khan academy"] },
  { name: "Web Dev for Beginners (Microsoft)", url: "https://github.com/microsoft/Web-Dev-For-Beginners", description: "24 lessons on JavaScript, CSS, and HTML by Microsoft", category: "Courses & Tutorials", subcategory: "Web Development", tags: ["web development", "microsoft", "javascript", "html", "css"] },
  { name: "Full Stack Open", url: "https://fullstackopen.com/en/", description: "Deep dive into modern web development by University of Helsinki", category: "Courses & Tutorials", subcategory: "Web Development", tags: ["full stack", "react", "node", "helsinki"] },
  { name: "CSS-Tricks", url: "https://css-tricks.com/", description: "Tips, tricks, and techniques on using CSS", category: "Courses & Tutorials", subcategory: "Web Development", tags: ["css", "web design", "frontend"] },
  { name: "ML for Beginners (Microsoft)", url: "https://github.com/microsoft/ML-For-Beginners", description: "26 lessons on classical machine learning by Microsoft", category: "Courses & Tutorials", subcategory: "Data Science & ML", tags: ["machine learning", "microsoft", "beginner", "python"] },
  { name: "AI for Beginners (Microsoft)", url: "https://github.com/microsoft/AI-For-Beginners", description: "24 lessons on artificial intelligence by Microsoft", category: "Courses & Tutorials", subcategory: "Data Science & ML", tags: ["ai", "artificial intelligence", "microsoft", "beginner"] },
  { name: "Data Science for Beginners (Microsoft)", url: "https://github.com/microsoft/Data-Science-For-Beginners", description: "20 lessons on data science by Microsoft", category: "Courses & Tutorials", subcategory: "Data Science & ML", tags: ["data science", "microsoft", "beginner", "python"] },
  { name: "Fast.ai", url: "https://www.fast.ai/", description: "Making deep learning accessible to all", category: "Courses & Tutorials", subcategory: "Data Science & ML", tags: ["deep learning", "machine learning", "python", "free"] },
  { name: "Andrew Ng's Machine Learning", url: "https://www.coursera.org/learn/machine-learning", description: "Foundational ML course on Coursera by Andrew Ng", category: "Courses & Tutorials", subcategory: "Data Science & ML", tags: ["machine learning", "coursera", "stanford", "andrew ng"] },
  { name: "Exercism", url: "https://exercism.org/", description: "Code practice and mentorship in 70+ programming languages", category: "Courses & Tutorials", subcategory: "Programming Languages", tags: ["practice", "mentorship", "polyglot", "free"] },
  { name: "Rust by Example", url: "https://doc.rust-lang.org/rust-by-example/", description: "Learn Rust through annotated example programs", category: "Courses & Tutorials", subcategory: "Programming Languages", tags: ["rust", "examples", "systems programming"] },
  { name: "Go by Example", url: "https://gobyexample.com/", description: "Hands-on introduction to Go", category: "Courses & Tutorials", subcategory: "Programming Languages", tags: ["go", "golang", "examples"] },
  { name: "Learn Python the Hard Way", url: "https://learnpythonthehardway.org/", description: "Structured approach to learning Python", category: "Courses & Tutorials", subcategory: "Programming Languages", tags: ["python", "beginner", "structured"] },
  { name: "90 Days of DevOps", url: "https://github.com/MichaelCade/90DaysOfDevOps", description: "Documenting the learning journey of DevOps", category: "Courses & Tutorials", subcategory: "DevOps & Cloud", tags: ["devops", "cloud", "learning", "90 days"] },
  { name: "AWS Training and Certification", url: "https://aws.amazon.com/training/", description: "Free digital training from Amazon Web Services", category: "Courses & Tutorials", subcategory: "DevOps & Cloud", tags: ["aws", "cloud", "certification", "free"] },
  { name: "Kubernetes the Hard Way", url: "https://github.com/kelseyhightower/kubernetes-the-hard-way", description: "Bootstrap Kubernetes the hard way from scratch", category: "Courses & Tutorials", subcategory: "DevOps & Cloud", tags: ["kubernetes", "devops", "cloud", "containers"] },
  { name: "MIT OpenCourseWare CS", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/", description: "Free lecture notes, exams, and videos from MIT", category: "Courses & Tutorials", subcategory: "CS Theory", tags: ["mit", "university", "lectures", "free"] },
  { name: "Stanford CS Courses", url: "https://online.stanford.edu/free-courses", description: "Free courses from Stanford University", category: "Courses & Tutorials", subcategory: "CS Theory", tags: ["stanford", "university", "free", "online"] },
  { name: "Nand2Tetris", url: "https://www.nand2tetris.org/", description: "Build a modern computer system from the ground up", category: "Courses & Tutorials", subcategory: "CS Theory", tags: ["hardware", "computer architecture", "from scratch"] },

  // ── Internships ────────────────────────────────────────────────────────────
  { name: "TCS CodeVita", url: "https://www.geeksforgeeks.org/tcs-codevita-2020-important-dates-eligibility-how-to-apply/", description: "TCS CodeVita coding competition and internship pathway", category: "Internships", subcategory: "", tags: ["tcs", "coding contest", "internship"] },
  { name: "Outreachy", url: "https://www.outreachy.org/", description: "Internships in open source and open science for underrepresented groups", category: "Internships", subcategory: "Open Source", tags: ["open source", "diversity", "internship", "paid"] },
  { name: "FSF Internship Program", url: "https://www.fsf.org/volunteer/internships", description: "Free Software Foundation internship program", category: "Internships", subcategory: "Open Source", tags: ["free software", "fsf", "gnu", "internship"] },
  { name: "Ada Developers Academy", url: "https://adadevelopersacademy.org/", description: "Tuition-free coding school for women and gender-diverse people", category: "Internships", subcategory: "Women in Tech", tags: ["women", "coding", "bootcamp", "free"] },

  // ── Job Opportunities ──────────────────────────────────────────────────────
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", description: "Professional networking and job search platform", category: "Job Opportunities", subcategory: "Job Search Platforms", tags: ["jobs", "networking", "professional"] },
  { name: "Indeed", url: "https://www.indeed.com/", description: "Job search engine with millions of listings", category: "Job Opportunities", subcategory: "Job Search Platforms", tags: ["jobs", "search engine"] },
  { name: "Glassdoor", url: "https://www.glassdoor.com/", description: "Job listings with company reviews and salary data", category: "Job Opportunities", subcategory: "Job Search Platforms", tags: ["jobs", "reviews", "salary"] },
  { name: "AngelList", url: "https://angel.co/", description: "Startup job board and investment platform", category: "Job Opportunities", subcategory: "Job Search Platforms", tags: ["startups", "jobs", "venture capital"] },
  { name: "We Work Remotely", url: "https://weworkremotely.com/", description: "Remote job listings across tech and design", category: "Job Opportunities", subcategory: "Job Search Platforms", tags: ["remote", "jobs", "work from home"] },
  { name: "Remote OK", url: "https://remoteok.com/", description: "Remote job aggregator for tech positions", category: "Job Opportunities", subcategory: "Job Search Platforms", tags: ["remote", "jobs", "aggregator"] },
  { name: "Hacker News: Who's Hiring", url: "https://news.ycombinator.com/ask", description: "Monthly job threads on Hacker News", category: "Job Opportunities", subcategory: "Tech Job Boards", tags: ["hacker news", "startups", "monthly"] },
  { name: "Stack Overflow Jobs", url: "https://stackoverflow.com/jobs", description: "Developer job listings on Stack Overflow", category: "Job Opportunities", subcategory: "Tech Job Boards", tags: ["stackoverflow", "developer", "jobs"] },
  { name: "GitHub Jobs", url: "https://github.com/about/careers", description: "Jobs at GitHub and open-source-friendly companies", category: "Job Opportunities", subcategory: "Tech Job Boards", tags: ["github", "open source", "careers"] },
  { name: "Key Values", url: "https://www.keyvalues.com/", description: "Find engineering teams that share your values", category: "Job Opportunities", subcategory: "Tech Job Boards", tags: ["culture", "values", "engineering teams"] },
  { name: "Remote Jobs", url: "https://github.com/remoteintech/remote-jobs", description: "List of semi to fully remote-friendly companies in tech", category: "Job Opportunities", subcategory: "Open Source Resources", tags: ["remote", "companies", "list"] },
  { name: "Easy Application", url: "https://github.com/j-delaney/easy-application", description: "Software engineering companies with easy application processes", category: "Job Opportunities", subcategory: "Open Source Resources", tags: ["application", "software engineering", "easy"] },
  { name: "Awesome Remote Job", url: "https://github.com/lukasz-madon/awesome-remote-job", description: "Curated list of remote working resources", category: "Job Opportunities", subcategory: "Open Source Resources", tags: ["remote", "awesome list", "resources"] },
  { name: "Tech Interview Handbook", url: "https://github.com/yangshun/tech-interview-handbook", description: "Curated coding interview preparation materials", category: "Job Opportunities", subcategory: "Interview Preparation", tags: ["interview", "coding", "preparation", "handbook"] },
  { name: "Coding Interview University", url: "https://github.com/jwasham/coding-interview-university", description: "Complete study plan to become a software engineer", category: "Job Opportunities", subcategory: "Interview Preparation", tags: ["interview", "study plan", "software engineer"] },
  { name: "Awesome Interview Questions", url: "https://github.com/DopplerHQ/awesome-interview-questions", description: "Curated list of interview questions across many technologies", category: "Job Opportunities", subcategory: "Interview Preparation", tags: ["interview", "questions", "awesome list"] },

  // ── Awesome Repositories ───────────────────────────────────────────────────
  { name: "scrcpy (Screen Sharing)", url: "https://github.com/Genymobile/scrcpy", description: "Display and control Android devices from your computer", category: "Awesome Repositories", subcategory: "Productivity", tags: ["android", "screen sharing", "mobile"] },
  { name: "Spectacle", url: "https://github.com/eczarny/spectacle", description: "Window management tool for macOS", category: "Awesome Repositories", subcategory: "Productivity", tags: ["macos", "window manager", "productivity"] },
  { name: "Proxy Toggle", url: "https://github.com/theappbusiness/android-proxy-toggle", description: "Easily toggle proxy settings on Android devices", category: "Awesome Repositories", subcategory: "Productivity", tags: ["android", "proxy", "development"] },
  { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", description: "Learn how to design large-scale systems", category: "Awesome Repositories", subcategory: "System Design", tags: ["system design", "architecture", "scalability", "interview"] },
  { name: "Developer Roadmaps", url: "https://github.com/kamranahmedse/developer-roadmap", description: "Community-driven roadmaps, guides, and articles for developers", category: "Awesome Repositories", subcategory: "System Design", tags: ["roadmap", "career", "learning path"] },
  { name: "Every Programmer Should Know", url: "https://github.com/mtdvio/every-programmer-should-know", description: "Technical things every software developer should know", category: "Awesome Repositories", subcategory: "System Design", tags: ["fundamentals", "best practices", "knowledge"] },
  { name: "The Book of Secret Knowledge", url: "https://github.com/trimstray/the-book-of-secret-knowledge", description: "Collection of lists, manuals, cheatsheets for networking, DevOps, and security", category: "Awesome Repositories", subcategory: "System Design", tags: ["devops", "security", "networking", "cheatsheets"] },
  { name: "Reverse Interview", url: "https://github.com/viraptor/reverse-interview", description: "Questions to ask the company during your interview", category: "Awesome Repositories", subcategory: "Interview Preparation", tags: ["interview", "questions", "career"] },
  { name: "JavaScript Questions", url: "https://github.com/lydiahallie/javascript-questions", description: "Advanced JavaScript questions with explanations", category: "Awesome Repositories", subcategory: "Interview Preparation", tags: ["javascript", "interview", "advanced"] },
  { name: "JavaScript Algorithms", url: "https://github.com/trekhleb/javascript-algorithms", description: "Algorithms and data structures implemented in JavaScript", category: "Awesome Repositories", subcategory: "Algorithms & Data Structures", tags: ["javascript", "algorithms", "data structures"] },
  { name: "The Algorithms - Python", url: "https://github.com/TheAlgorithms/Python", description: "All algorithms implemented in Python", category: "Awesome Repositories", subcategory: "Algorithms & Data Structures", tags: ["python", "algorithms", "reference"] },
  { name: "LeetCode Patterns", url: "https://github.com/seanprashad/leetcode-patterns", description: "Curated LeetCode questions grouped by common patterns", category: "Awesome Repositories", subcategory: "Algorithms & Data Structures", tags: ["leetcode", "patterns", "interview", "algorithms"] },
  { name: "Algo Deck", url: "https://github.com/teivah/algodeck", description: "Collection of algorithm flashcards", category: "Awesome Repositories", subcategory: "Algorithms & Data Structures", tags: ["algorithms", "flashcards", "study"] },
  { name: "Build Your Own X", url: "https://github.com/codecrafters-io/build-your-own-x", description: "Master programming by recreating your favorite technologies from scratch", category: "Awesome Repositories", subcategory: "Learning & Practice", tags: ["projects", "from scratch", "learning by doing"] },
  { name: "Project Based Learning", url: "https://github.com/practical-tutorials/project-based-learning", description: "Curated list of project-based tutorials", category: "Awesome Repositories", subcategory: "Learning & Practice", tags: ["projects", "tutorials", "hands-on"] },
  { name: "The Art of Command Line", url: "https://github.com/jlevy/the-art-of-command-line", description: "Master the command line in one page", category: "Awesome Repositories", subcategory: "Learning & Practice", tags: ["command line", "terminal", "linux", "unix"] },
  { name: "30 Seconds of Code", url: "https://github.com/Chalarangelo/30-seconds-of-code", description: "Short code snippets for all your development needs", category: "Awesome Repositories", subcategory: "Learning & Practice", tags: ["snippets", "javascript", "python", "css"] },
  { name: "Vision Agent", url: "https://github.com/landing-ai/vision-agent", description: "Framework for using vision models to solve real-world problems", category: "Awesome Repositories", subcategory: "AI & Machine Learning", tags: ["computer vision", "ai", "framework"] },
  { name: "Papers With Code", url: "https://github.com/paperswithcode/paperswithcode-data", description: "Free resource for ML papers, code, and evaluation tables", category: "Awesome Repositories", subcategory: "AI & Machine Learning", tags: ["machine learning", "research", "papers"] },
  { name: "Awesome Machine Learning", url: "https://github.com/josephmisiti/awesome-machine-learning", description: "Curated list of ML frameworks, libraries, and software", category: "Awesome Repositories", subcategory: "AI & Machine Learning", tags: ["machine learning", "frameworks", "awesome list"] },
  { name: "Awesome Lists", url: "https://github.com/sindresorhus/awesome", description: "Curated list of all kinds of awesome topics", category: "Awesome Repositories", subcategory: "Curated Collections", tags: ["awesome", "meta list", "curated"] },
  { name: "Public APIs", url: "https://github.com/public-apis/public-apis", description: "Collective list of free APIs for use in development", category: "Awesome Repositories", subcategory: "Curated Collections", tags: ["api", "free", "development", "list"] },
  { name: "Free for Dev", url: "https://github.com/ripienaar/free-for-dev", description: "List of software and services with free tiers for developers", category: "Awesome Repositories", subcategory: "Curated Collections", tags: ["free", "saas", "developer tools"] },
  { name: "Design Resources for Developers", url: "https://github.com/bradtraversy/design-resources-for-developers", description: "Curated list of design and UI resources", category: "Awesome Repositories", subcategory: "Curated Collections", tags: ["design", "ui", "resources", "frontend"] },
  { name: "Awesome First PR Opportunities", url: "https://github.com/MunGell/awesome-for-beginners", description: "Beginner-friendly projects to start contributing to open source", category: "Awesome Repositories", subcategory: "Curated Collections", tags: ["open source", "beginner", "first contribution"] },
  { name: "Best Websites for Programmers", url: "https://github.com/sdmg15/Best-websites-a-programmer-should-visit", description: "Useful websites every programmer should visit", category: "Awesome Repositories", subcategory: "Curated Collections", tags: ["websites", "resources", "bookmarks"] },
  { name: "Path to Senior Engineer Handbook", url: "https://github.com/jordan-cutler/path-to-senior-engineer-handbook", description: "Guide to reaching senior engineer and beyond", category: "Awesome Repositories", subcategory: "Career Growth", tags: ["career", "senior engineer", "growth"] },
  { name: "Engineering Leadership", url: "https://github.com/gregorojstersek/resources-to-become-a-great-engineering-leader", description: "Resources to become a great engineering leader", category: "Awesome Repositories", subcategory: "Career Growth", tags: ["leadership", "management", "engineering"] },
  { name: "Professional Programming", url: "https://github.com/charlax/professional-programming", description: "Collection of learning resources for curious software engineers", category: "Awesome Repositories", subcategory: "Career Growth", tags: ["professional", "software engineering", "resources"] },
  { name: "awesome4girls", url: "https://github.com/cristianoliveira/awesome4girls", description: "Curated list of inclusive events and resources for women in tech", category: "Awesome Repositories", subcategory: "Women in Tech", tags: ["women", "diversity", "awesome list"] },

  // ── Cheat Sheets ───────────────────────────────────────────────────────────
  { name: "Git Aliases (Oh My Zsh)", url: "https://github.com/ohmyzsh/ohmyzsh/wiki/Cheatsheet", description: "Git aliases cheatsheet from Oh My Zsh", category: "Cheat Sheets", subcategory: "Git", tags: ["git", "aliases", "zsh", "oh my zsh"] },
  { name: "GitHub Cheat Sheet", url: "https://github.com/tiimgreen/github-cheat-sheet", description: "Hidden features and tips for Git and GitHub", category: "Cheat Sheets", subcategory: "Git", tags: ["github", "git", "tips", "tricks"] },
  { name: "Git Tips", url: "https://github.com/git-tips/tips", description: "Most commonly used Git tips and tricks", category: "Cheat Sheets", subcategory: "Git", tags: ["git", "tips", "tricks"] },
  { name: "Mac Terminal Cheatsheet", url: "https://github.com/0nn0/terminal-mac-cheatsheet", description: "Cheatsheet for Mac terminal commands", category: "Cheat Sheets", subcategory: "Terminal", tags: ["mac", "terminal", "commands"] },
  { name: "Bash Guide", url: "https://github.com/Idnan/bash-guide", description: "Guide to learn Bash scripting", category: "Cheat Sheets", subcategory: "Terminal", tags: ["bash", "scripting", "guide"] },
  { name: "Awesome Cheatsheets", url: "https://github.com/LeCoupa/awesome-cheatsheets", description: "Cheatsheets for popular languages, frameworks, and tools", category: "Cheat Sheets", subcategory: "Programming Languages", tags: ["cheatsheets", "languages", "frameworks"] },
  { name: "Modern JavaScript Cheatsheet", url: "https://github.com/mbeaudru/modern-js-cheatsheet", description: "Cheatsheet for modern JavaScript concepts", category: "Cheat Sheets", subcategory: "Programming Languages", tags: ["javascript", "modern", "es6"] },
  { name: "Docker Cheat Sheet", url: "https://github.com/wsargent/docker-cheat-sheet", description: "Quick reference for Docker commands", category: "Cheat Sheets", subcategory: "DevOps & Cloud", tags: ["docker", "containers", "devops"] },
  { name: "Kubernetes Cheat Sheet", url: "https://kubernetes.io/docs/reference/kubectl/cheatsheet/", description: "kubectl quick reference guide", category: "Cheat Sheets", subcategory: "DevOps & Cloud", tags: ["kubernetes", "kubectl", "devops"] },

  // ── Scholarships ───────────────────────────────────────────────────────────
  { name: "Twilio SIGNAL Scholarship", url: "https://www.twilio.com/blog/signal-2021-scholarship-program", description: "Scholarship program by Twilio for SIGNAL conference", category: "Scholarships", subcategory: "", tags: ["twilio", "conference", "scholarship"] },
  { name: "CMMRS Pre-doctoral Research School", url: "https://cmmrs.mpi-sws.org/", description: "Cornell, Maryland, Max Planck pre-doctoral research school", category: "Scholarships", subcategory: "", tags: ["research", "pre-doctoral", "cornell", "max planck"] },

  // ── Tech Events ────────────────────────────────────────────────────────────
  { name: "Twilio SIGNAL", url: "https://signal.twilio.com/", description: "Twilio's annual developer conference", category: "Tech Events", subcategory: "", tags: ["twilio", "conference", "developer"] },
  { name: "Postman Student Summit", url: "https://www.postman.com/company/student-program/student-summit/", description: "Student-focused API summit by Postman", category: "Tech Events", subcategory: "", tags: ["postman", "api", "student", "summit"] },
  { name: "WSO2 Summit APAC", url: "https://wso2.com/summit-2021/apac/", description: "WSO2 integration and API summit for Asia Pacific", category: "Tech Events", subcategory: "", tags: ["wso2", "integration", "api", "apac"] },
  { name: "Jamstack Conference", url: "https://jamstackconf.com/", description: "Conference for the Jamstack web development community", category: "Tech Events", subcategory: "", tags: ["jamstack", "web development", "conference"] },
  { name: "DigitalOcean Deploy", url: "https://deploy.digitalocean.com/", description: "DigitalOcean's annual developer conference", category: "Tech Events", subcategory: "", tags: ["digitalocean", "cloud", "conference"] },

  // ── Terminal Tools ─────────────────────────────────────────────────────────
  // Shell Frameworks & Prompts
  { name: "Oh My Zsh", url: "https://github.com/ohmyzsh/ohmyzsh", description: "Framework for managing your Zsh configuration with plugins and themes", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["zsh", "shell", "framework", "plugins"] },
  { name: "Oh My Zsh Themes", url: "https://github.com/ohmyzsh/ohmyzsh/wiki/Themes", description: "Collection of themes for Oh My Zsh", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["zsh", "themes", "customization"] },
  { name: "Powerlevel10k", url: "https://github.com/romkatv/powerlevel10k", description: "Fast and flexible Zsh theme with instant prompt", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["zsh", "theme", "prompt", "fast"] },
  { name: "Oh My Bash", url: "https://github.com/ohmybash/oh-my-bash", description: "Framework for managing your Bash configuration", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["bash", "shell", "framework"] },
  { name: "Fish Shell", url: "https://github.com/fish-shell/fish-shell", description: "Smart and user-friendly command line shell with autosuggestions", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["fish", "shell", "autosuggestions"] },
  { name: "Oh My Fish", url: "https://github.com/oh-my-fish/oh-my-fish", description: "Plugin framework for Fish shell", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["fish", "plugins", "framework"] },
  { name: "Starship", url: "https://github.com/starship/starship", description: "Minimal, blazing-fast, cross-shell prompt written in Rust", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["prompt", "rust", "cross-shell", "minimal"] },
  { name: "Zsh Autosuggestions", url: "https://github.com/zsh-users/zsh-autosuggestions", description: "Fish-like autosuggestions for Zsh", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["zsh", "autosuggestions", "plugin"] },
  { name: "Zsh Syntax Highlighting", url: "https://github.com/zsh-users/zsh-syntax-highlighting", description: "Syntax highlighting for the Zsh shell", category: "Terminal Tools", subcategory: "Shell Frameworks", tags: ["zsh", "syntax highlighting", "plugin"] },
  // Terminal Emulators
  { name: "iTerm2", url: "https://iterm2.com/", description: "macOS terminal replacement with GPU rendering, split panes, and search", category: "Terminal Tools", subcategory: "Terminal Emulators", tags: ["macos", "terminal", "gpu", "emulator"] },
  { name: "Alacritty", url: "https://github.com/alacritty/alacritty", description: "GPU-accelerated terminal emulator, cross-platform", category: "Terminal Tools", subcategory: "Terminal Emulators", tags: ["gpu", "terminal", "rust", "cross-platform"] },
  { name: "Kitty", url: "https://github.com/kovidgoyal/kitty", description: "Fast, feature-rich, GPU-based terminal emulator", category: "Terminal Tools", subcategory: "Terminal Emulators", tags: ["gpu", "terminal", "feature-rich"] },
  { name: "Warp", url: "https://www.warp.dev/", description: "Modern terminal with AI command search and IDE-like editing", category: "Terminal Tools", subcategory: "Terminal Emulators", tags: ["ai", "modern", "terminal", "ide"] },
  { name: "Windows Terminal", url: "https://github.com/microsoft/terminal", description: "Modern terminal for Windows with tabs, themes, and GPU rendering", category: "Terminal Tools", subcategory: "Terminal Emulators", tags: ["windows", "microsoft", "terminal", "tabs"] },
  { name: "Hyper", url: "https://github.com/vercel/hyper", description: "Electron-based terminal built on web technologies", category: "Terminal Tools", subcategory: "Terminal Emulators", tags: ["electron", "web", "terminal", "vercel"] },
  // Terminal Multiplexers
  { name: "Tmux", url: "https://github.com/tmux/tmux", description: "Terminal multiplexer for managing multiple sessions, windows, and panes", category: "Terminal Tools", subcategory: "Multiplexers", tags: ["multiplexer", "sessions", "terminal"] },
  { name: "Tmux Plugin Manager", url: "https://github.com/tmux-plugins/tpm", description: "Plugin manager for Tmux", category: "Terminal Tools", subcategory: "Multiplexers", tags: ["tmux", "plugins", "manager"] },
  { name: "Oh My Tmux", url: "https://github.com/gpakosz/.tmux", description: "Self-contained, pretty, and versatile Tmux configuration", category: "Terminal Tools", subcategory: "Multiplexers", tags: ["tmux", "config", "pretty"] },
  { name: "Zellij", url: "https://github.com/zellij-org/zellij", description: "Modern terminal multiplexer written in Rust with a layout system", category: "Terminal Tools", subcategory: "Multiplexers", tags: ["multiplexer", "rust", "layouts"] },
  { name: "GNU Screen", url: "https://www.gnu.org/software/screen/", description: "Classic terminal multiplexer", category: "Terminal Tools", subcategory: "Multiplexers", tags: ["multiplexer", "gnu", "classic"] },
  // File Navigation & Search
  { name: "fzf", url: "https://github.com/junegunn/fzf", description: "General-purpose command-line fuzzy finder", category: "Terminal Tools", subcategory: "File Navigation", tags: ["fuzzy finder", "search", "cli"] },
  { name: "ripgrep", url: "https://github.com/BurntSushi/ripgrep", description: "Extremely fast text search tool (grep replacement)", category: "Terminal Tools", subcategory: "File Navigation", tags: ["search", "grep", "fast", "rust"] },
  { name: "fd", url: "https://github.com/sharkdp/fd", description: "Simple, fast, and user-friendly alternative to find", category: "Terminal Tools", subcategory: "File Navigation", tags: ["find", "search", "fast", "rust"] },
  { name: "zoxide", url: "https://github.com/ajeetdsouza/zoxide", description: "Smarter cd command that learns your most used directories", category: "Terminal Tools", subcategory: "File Navigation", tags: ["cd", "navigation", "smart", "rust"] },
  { name: "ranger", url: "https://github.com/ranger/ranger", description: "Console file manager with Vi keybindings", category: "Terminal Tools", subcategory: "File Navigation", tags: ["file manager", "vi", "console"] },
  { name: "nnn", url: "https://github.com/jarun/nnn", description: "Blazing-fast terminal file manager", category: "Terminal Tools", subcategory: "File Navigation", tags: ["file manager", "fast", "minimal"] },
  { name: "broot", url: "https://github.com/Canop/broot", description: "Interactive tree view for navigating directories", category: "Terminal Tools", subcategory: "File Navigation", tags: ["tree", "navigation", "interactive"] },
  // Better Defaults
  { name: "bat", url: "https://github.com/sharkdp/bat", description: "A cat clone with syntax highlighting and Git integration", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["cat", "syntax highlighting", "rust"] },
  { name: "eza", url: "https://github.com/eza-community/eza", description: "Modern replacement for ls with colors, icons, and Git status", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["ls", "colors", "icons", "rust"] },
  { name: "delta", url: "https://github.com/dandavison/delta", description: "Syntax-highlighting pager for git diff output", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["git", "diff", "syntax highlighting"] },
  { name: "dust", url: "https://github.com/bootandy/dust", description: "More intuitive version of du (disk usage)", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["disk usage", "du", "rust"] },
  { name: "duf", url: "https://github.com/muesli/duf", description: "Better df alternative for disk usage/free", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["disk", "df", "go"] },
  { name: "htop", url: "https://github.com/htop-dev/htop", description: "Interactive process viewer (better top)", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["process viewer", "monitoring", "top"] },
  { name: "btop", url: "https://github.com/aristocratos/btop", description: "Resource monitor with a rich UI", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["monitoring", "resources", "ui"] },
  { name: "tldr", url: "https://github.com/tldr-pages/tldr", description: "Simplified and community-driven man pages", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["man pages", "documentation", "simplified"] },
  { name: "HTTPie", url: "https://github.com/httpie/cli", description: "Human-friendly HTTP client (better curl for APIs)", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["http", "curl", "api", "cli"] },
  { name: "jq", url: "https://github.com/jqlang/jq", description: "Lightweight command-line JSON processor", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["json", "processor", "cli"] },
  { name: "procs", url: "https://github.com/dalance/procs", description: "Modern replacement for ps", category: "Terminal Tools", subcategory: "Better Defaults", tags: ["ps", "process", "rust"] },
  // Git CLI Tools
  { name: "lazygit", url: "https://github.com/jesseduffield/lazygit", description: "Simple terminal UI for Git commands", category: "Terminal Tools", subcategory: "Git CLI Tools", tags: ["git", "tui", "terminal ui"] },
  { name: "tig", url: "https://github.com/jonas/tig", description: "Text-mode interface for Git", category: "Terminal Tools", subcategory: "Git CLI Tools", tags: ["git", "tui", "viewer"] },
  { name: "GitHub CLI (gh)", url: "https://github.com/cli/cli", description: "GitHub's official command-line tool", category: "Terminal Tools", subcategory: "Git CLI Tools", tags: ["github", "cli", "official"] },
  { name: "git-extras", url: "https://github.com/tj/git-extras", description: "Useful extra Git commands (summary, changelog, etc.)", category: "Terminal Tools", subcategory: "Git CLI Tools", tags: ["git", "extras", "commands"] },
  { name: "diff-so-fancy", url: "https://github.com/so-fancy/diff-so-fancy", description: "Better-looking diffs for Git", category: "Terminal Tools", subcategory: "Git CLI Tools", tags: ["git", "diff", "fancy"] },
  // Text Editors
  { name: "Neovim", url: "https://github.com/neovim/neovim", description: "Hyperextensible Vim-based text editor", category: "Terminal Tools", subcategory: "Text Editors", tags: ["vim", "editor", "extensible", "lua"] },
  { name: "NvChad", url: "https://github.com/NvChad/NvChad", description: "Blazing fast Neovim config providing solid defaults and a beautiful UI", category: "Terminal Tools", subcategory: "Text Editors", tags: ["neovim", "config", "lua", "ui"] },
  { name: "LazyVim", url: "https://github.com/LazyVim/LazyVim", description: "Neovim setup with sensible defaults and easy customization", category: "Terminal Tools", subcategory: "Text Editors", tags: ["neovim", "config", "lazy", "defaults"] },
  { name: "Helix", url: "https://github.com/helix-editor/helix", description: "Post-modern text editor with built-in LSP support", category: "Terminal Tools", subcategory: "Text Editors", tags: ["editor", "lsp", "rust", "modal"] },
  { name: "Micro", url: "https://github.com/zyedidia/micro", description: "Modern and intuitive terminal-based text editor", category: "Terminal Tools", subcategory: "Text Editors", tags: ["editor", "terminal", "intuitive", "go"] },
  // Productivity & Utilities
  { name: "thefuck", url: "https://github.com/nvbn/thefuck", description: "Corrects your previous console command automatically", category: "Terminal Tools", subcategory: "Productivity", tags: ["correction", "command", "automatic"] },
  { name: "direnv", url: "https://github.com/direnv/direnv", description: "Load/unload environment variables based on directory", category: "Terminal Tools", subcategory: "Productivity", tags: ["env", "environment", "directory"] },
  { name: "asdf", url: "https://github.com/asdf-vm/asdf", description: "Manage multiple runtime versions with a single CLI tool", category: "Terminal Tools", subcategory: "Productivity", tags: ["version manager", "runtime", "polyglot"] },
  { name: "ncdu", url: "https://dev.yorhel.nl/ncdu", description: "NCurses disk usage analyzer", category: "Terminal Tools", subcategory: "Productivity", tags: ["disk usage", "ncurses", "analyzer"] },
  { name: "figlet", url: "https://github.com/cmatsuoka/figlet", description: "Generate text banners in the terminal", category: "Terminal Tools", subcategory: "Productivity", tags: ["ascii art", "banner", "text"] },
  { name: "neofetch", url: "https://github.com/dylanaraps/neofetch", description: "Display system information in the terminal", category: "Terminal Tools", subcategory: "Productivity", tags: ["system info", "display", "ascii"] },
  // Dotfile Management
  { name: "chezmoi", url: "https://github.com/twpayne/chezmoi", description: "Manage your dotfiles across multiple machines securely", category: "Terminal Tools", subcategory: "Dotfile Management", tags: ["dotfiles", "config", "multi-machine"] },
  { name: "GNU Stow", url: "https://www.gnu.org/software/stow/", description: "Symlink farm manager for organizing dotfiles", category: "Terminal Tools", subcategory: "Dotfile Management", tags: ["dotfiles", "symlink", "gnu"] },
  { name: "yadm", url: "https://github.com/yadm-dev/yadm", description: "Yet Another Dotfiles Manager using Git", category: "Terminal Tools", subcategory: "Dotfile Management", tags: ["dotfiles", "git", "manager"] },
  // Package Managers
  { name: "Homebrew", url: "https://github.com/Homebrew/brew", description: "The missing package manager for macOS and Linux", category: "Terminal Tools", subcategory: "Package Managers", tags: ["package manager", "macos", "linux"] },
  { name: "Nix", url: "https://github.com/NixOS/nix", description: "Reproducible, declarative package manager", category: "Terminal Tools", subcategory: "Package Managers", tags: ["package manager", "reproducible", "declarative"] },
  { name: "Scoop", url: "https://github.com/ScoopInstaller/Scoop", description: "Command-line installer for Windows", category: "Terminal Tools", subcategory: "Package Managers", tags: ["package manager", "windows", "installer"] },
];

// ─── Category Order ──────────────────────────────────────────────────────────
const CATEGORY_ORDER = [
  "Courses & Tutorials",
  "Books",
  "Awesome Repositories",
  "Terminal Tools",
  "Competitions & Hackathons",
  "Job Opportunities",
  "Cheat Sheets",
  "Communities",
  "Ambassadorship Programs",
  "Internships",
  "Tech Events",
  "Scholarships",
];

// ─── DOM References ──────────────────────────────────────────────────────────
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const chipsContainer = document.getElementById("chips");
const resultsContainer = document.getElementById("results");
const emptyState = document.getElementById("empty-state");
const shortcutHint = document.querySelector(".search-bar__shortcut");

// ─── State ───────────────────────────────────────────────────────────────────
let activeCategory = null;
let debounceTimer = null;

// ─── Initialize ──────────────────────────────────────────────────────────────
function init() {
  renderChips();
  render();
  bindEvents();
}

// ─── Chips ───────────────────────────────────────────────────────────────────
function renderChips() {
  const frag = document.createDocumentFragment();
  CATEGORY_ORDER.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = cat;
    btn.setAttribute("data-category", cat);
    btn.addEventListener("click", function () {
      if (activeCategory === cat) {
        activeCategory = null;
        btn.classList.remove("chip--active");
      } else {
        activeCategory = cat;
        document.querySelectorAll(".chip").forEach(function (c) {
          c.classList.remove("chip--active");
        });
        btn.classList.add("chip--active");
      }
      render();
    });
    frag.appendChild(btn);
  });
  chipsContainer.appendChild(frag);
}

// ─── Events ──────────────────────────────────────────────────────────────────
function bindEvents() {
  searchInput.addEventListener("input", function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(render, 150);
    clearBtn.hidden = !searchInput.value;
    shortcutHint.hidden = !!searchInput.value;
  });

  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    clearBtn.hidden = true;
    shortcutHint.hidden = false;
    searchInput.focus();
    render();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === "Escape") {
      searchInput.blur();
    }
  });
}

// ─── Fuzzy Scoring ───────────────────────────────────────────────────────────
function scoreMatch(text, query) {
  if (!text) return 0;
  var lower = text.toLowerCase();
  var q = query.toLowerCase();

  // Exact substring
  if (lower.indexOf(q) !== -1) {
    // Bonus for match at start
    if (lower.indexOf(q) === 0) return 110;
    return 100;
  }

  // Word-start match: each query word starts a word in text
  var queryWords = q.split(/\s+/);
  var textWords = lower.split(/\s+/);
  var wordMatches = 0;
  queryWords.forEach(function (qw) {
    textWords.forEach(function (tw) {
      if (tw.indexOf(qw) === 0) wordMatches++;
    });
  });
  if (wordMatches === queryWords.length) return 80;

  // Fuzzy character match
  var qi = 0;
  var score = 0;
  for (var ti = 0; ti < lower.length && qi < q.length; ti++) {
    if (lower[ti] === q[qi]) {
      score += 10;
      // Bonus for consecutive
      if (ti > 0 && lower[ti - 1] === (qi > 0 ? q[qi - 1] : "")) score += 5;
      qi++;
    }
  }
  if (qi === q.length) return Math.min(score, 70);

  return 0;
}

function getResourceScore(resource, query) {
  var nameScore = scoreMatch(resource.name, query) * 3;
  var descScore = scoreMatch(resource.description, query) * 1.5;
  var catScore = scoreMatch(resource.category, query);
  var subScore = scoreMatch(resource.subcategory, query);
  var tagScore = 0;
  resource.tags.forEach(function (tag) {
    var s = scoreMatch(tag, query) * 1.2;
    if (s > tagScore) tagScore = s;
  });
  return nameScore + descScore + catScore + subScore + tagScore;
}

// ─── Highlight ───────────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function highlightMatch(text, query) {
  if (!query || !text) return escapeHtml(text);
  var escaped = escapeHtml(text);
  var lower = text.toLowerCase();
  var q = query.toLowerCase();
  var idx = lower.indexOf(q);
  if (idx !== -1) {
    var before = escapeHtml(text.slice(0, idx));
    var match = escapeHtml(text.slice(idx, idx + query.length));
    var after = escapeHtml(text.slice(idx + query.length));
    return before + "<mark>" + match + "</mark>" + after;
  }
  return escaped;
}

// ─── Render ──────────────────────────────────────────────────────────────────
function render() {
  var query = searchInput.value.trim();
  var filtered = RESOURCES;

  // Category filter
  if (activeCategory) {
    filtered = filtered.filter(function (r) {
      return r.category === activeCategory;
    });
  }

  var isSearchMode = query.length > 0;

  if (isSearchMode) {
    // Score and filter
    var scored = [];
    filtered.forEach(function (r) {
      var s = getResourceScore(r, query);
      if (s > 0) scored.push({ resource: r, score: s });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    renderSearchResults(scored, query);
  } else {
    renderBrowseMode(filtered);
  }
}

function renderSearchResults(scored, query) {
  if (scored.length === 0) {
    resultsContainer.innerHTML = "";
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  var html = '<p class="results__count">' + scored.length + " resource" + (scored.length !== 1 ? "s" : "") + " found</p>";
  html += '<div class="card-grid">';
  scored.forEach(function (item) {
    html += renderCard(item.resource, query);
  });
  html += "</div>";
  resultsContainer.innerHTML = html;
}

function renderBrowseMode(resources) {
  if (resources.length === 0) {
    resultsContainer.innerHTML = "";
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  // Group by category
  var grouped = {};
  CATEGORY_ORDER.forEach(function (cat) { grouped[cat] = []; });
  resources.forEach(function (r) {
    if (!grouped[r.category]) grouped[r.category] = [];
    grouped[r.category].push(r);
  });

  var html = "";
  CATEGORY_ORDER.forEach(function (cat) {
    var items = grouped[cat];
    if (!items || items.length === 0) return;
    html += '<h2 class="section-header">' + escapeHtml(cat) + " (" + items.length + ")</h2>";
    html += '<div class="card-grid">';
    items.forEach(function (r) {
      html += renderCard(r, "");
    });
    html += "</div>";
  });
  resultsContainer.innerHTML = html;
}

function renderCard(resource, query) {
  var name = query ? highlightMatch(resource.name, query) : escapeHtml(resource.name);
  var desc = query ? highlightMatch(resource.description, query) : escapeHtml(resource.description);

  var tags = '<span class="card__tag card__tag--category">' + escapeHtml(resource.category) + "</span>";
  if (resource.subcategory) {
    tags += '<span class="card__tag">' + escapeHtml(resource.subcategory) + "</span>";
  }

  return (
    '<div class="card">' +
    '<div class="card__name"><a href="' + escapeHtml(resource.url) + '" target="_blank" rel="noopener noreferrer">' + name + "</a></div>" +
    '<div class="card__desc">' + desc + "</div>" +
    '<div class="card__tags">' + tags + "</div>" +
    "</div>"
  );
}

// ─── Start ───────────────────────────────────────────────────────────────────
init();
