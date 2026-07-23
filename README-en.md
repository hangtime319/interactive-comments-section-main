# Interactive Comments Section

👀 **[Live Preview (Access the online project here)](https://hangtime319.github.io/interactive-comments-section-main/)**

An interactive and fully responsive comments section application. This project simulates a real discussion environment, allowing user interaction through comments, replies, and a voting system.

## 🚀 Features

- **Comment CRUD:** Create, read, update (edit), and delete comments.
- **Reply System (Threads):** Ability to reply directly to specific comments, with a visual indent (side border) for easy identification.
- **Voting System:** Interactive upvote and downvote buttons to change the comment score (preventing negative values).
- **Data Persistence:** Integration with the browser's `localStorage` to ensure comments, edits, and votes are kept even after reloading the page.
- **Deletion Validation:** Confirmation modal (Overlay) before deleting a comment to prevent accidental actions.
- **100% Responsive Design:** Mobile First approach ensuring the interface adapts perfectly to smartphones, tablets, and large desktop screens.
- **Animations and Transitions:** Smooth hover effects on buttons and an elegant slide-down transition on the reply form using CSS Grid manipulation.

## 🛠️ Technologies Used

- **[React JS](https://react.dev/)** (Initialized via Vite for better development performance)
- **[Tailwind CSS](https://tailwindcss.com/)** (Utility-first styling and responsive layout construction)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

## 🧠 Learnings and Project Focus

This project was built focusing on the practical application of React JS fundamentals and scalable front-end application architecture. The main concepts covered include:

- **Smart Componentization:** Breaking down the interface into highly reusable components with single responsibilities (e.g., `ScoreBox`, `Avatar`, `DeleteModal`).
- **Essential React Hooks:**
  - `useState`: Dynamic interface management (Edit Mode, Modal Opening, Reply Expansion) and input control (Controlled Components).
  - `useContext`: Implementation of the Context API (`UserContext`) to manage and distribute active user data (`currentUser`) throughout the component tree, solving the Prop Drilling problem.
  - `useEffect`: Continuous synchronization of the application state with the native `localStorage` API.
- **Lifting State Up:** Efficient communication between child and parent components by passing functions through props.
- **Data Structures:** Advanced manipulation of arrays and objects using native JavaScript methods (such as `.map()` and `.filter()`) to update and delete specific nodes within a nested structure of comments and replies.
- **CSS Grid & Flexbox:** Mastery of two-dimensional and one-dimensional layouts to completely reorganize the structure of comment cards between mobile and desktop versions without needing to duplicate HTML code.

