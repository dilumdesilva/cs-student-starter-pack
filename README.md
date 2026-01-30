# cs-student-starter-pack

[![Visit Website](https://img.shields.io/badge/Browse%20Resources-Visit%20Website-1a73e8?style=for-the-badge)](https://dilumdesilva.github.io/cs-student-starter-pack/)

**Computer science student starter pack** is a repository which contains all the free and open source resources which can be helpful to any computer science or IT student.

### This starter pack is a collection of,

- [Events and conferences :tickets: :airplane: :calendar:](events/README.md)
- [Ambassadorships / Outreach programs :mortar_board: :school_satchel:](ambassadorship_programs/README.md)
- [Scholarships](scholarships/README.md)
- [Competitions, mentorship programs and hackathons :triangular_flag_on_post: :trophy:](competitions/README.md)
- [Open source tools and APIs :wrench: :computer: :cd:](tools/README.md)
- [Awsome repositories :file_folder: :open_file_folder:](repo_collection/README.md)
- [Free books :closed_book: :books: :book:](books/README.md)
- [Free courses and tutorials :computer:](courses/README.md)
- [Internships :mag_right:](internships/README.md)
- [Job opportunities :mag_right:](job_opportunities/README.md)
- [Communities](communities/README.md)
- [Terminal tools and environment configs :wrench: :desktop_computer:](terminal_tools/README.md)
- [AI resources :robot: :brain:](ai_resources/README.md)

### Contribution Guidelines :eyes: :warning: :white_check_mark:

This repositories is open to anyone for contributions. So, feel free to share the awsome resoucers that you have utilized or experinced during your time as a computer science or IT stdent. Let's help the others to make thier **#UniLife** remarkable.

Please follow the following guidelines if you want to add something to the **cs-student-starter-pack**

**Let's say that you want to add a conference to the pack**

1. Fork this repository to make sure you have your own version of this collection.
2. Validate that your contibution belongs to one of the items/sections from the above list (_ex: conference_).
3. Find the related directory for your contribution (_ex: events/_).
4. Add the name of the contribution to the README of that directory (_events/README.md_) using the markdown link format: `- [Resource Name](https://link) - Short description`.
5. **Add the resource to the website** by editing `docs/app.js`. Find the `RESOURCES` array and add a new entry under the matching category section:
   ```js
   { name: "Resource Name", url: "https://link", description: "Short description", category: "Tech Events", subcategory: "", tags: ["relevant", "tags"] },
   ```
   Use one of the existing categories: `AI Resources`, `Ambassadorship Programs`, `Books`, `Communities`, `Competitions & Hackathons`, `Courses & Tutorials`, `Internships`, `Job Opportunities`, `Awesome Repositories`, `Cheat Sheets`, `Scholarships`, `Tech Events`, or `Terminal Tools`. Add a `subcategory` if the section in the markdown file has a subheading (e.g. `"Women in Tech"`, `"Open Source"`). Add a few lowercase `tags` to help with search.
6. Once both files are updated, make a PR.

**Let's say, you can't find a relavan catageory for your contribution**

_Ex: if the internship category wasn't there in the list_

1. Create an issue in the repository with the category name you want to add to the pack/collection as `Add: internship category`.
2. Explain the advantage of adding this to the collection in the issue body/description.
3. Let's add relevant labels 🏷 (Ex: new-category, need-review)
4. Tag myself or any of the maintanier of the repo.
5. Wait for the confirmation/acceptance from one of the maintainers to make a PR.
6. When making the PR, add the new category to both the markdown directory **and** the `RESOURCES` array and `CATEGORY_ORDER` array in `docs/app.js` so it appears on the website.

**Note - each category might have its own set of guidelines for contributions please refer them before you submit your contributions.**
