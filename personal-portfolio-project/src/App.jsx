import "./App.css";
import Information from "./Content.json";
import GitHubGraph from "./github-cont";
import Contactformpart from "./contacts";
import { useDarkMode } from "./DarkModeContext";
const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`app-container min-h-screen p-8 flex flex-col items-center gap-16 font-sans transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div
        className={`app-container absolute min-h-screen transition-colors duration-700 ${
          darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
      >
        {/* Hidden Text */}

        {darkMode && (
          <div className="absolute bottom-128 left-128 select-none pointer-events-none">
            <span
              className="text-[4rem] font-extrabold tracking-wider text-pink-500 opacity-90
             drop-shadow-[0_0_15px_rgba(255,20,147,0.8)]
             [text-shadow:_0_0_25px_rgba(255,20,147,0.6),_0_0_40px_rgba(255,0,255,0.5)]
             transform rotate-[-8deg] animate-[tagPulse_3s_infinite]"
              style={{
                fontFamily: "Rock Salt",
                cursive: "cursive",
              }}
            >
              I did that!
            </span>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`fixed bottom-6 right-6 px-4 py-2 rounded-full shadow-md transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-yellow-300" : "bg-gray-200 text-gray-800"
        }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Header Section */}
      <header
        className={`header w-full max-w-4xl rounded-lg p-8 text-center shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-4xl font-bold mb-2 text-blue-500">
          {Information?.name}
        </h1>
        <h3 className="text-xl font-semibold mb-4 text-gray-400">
          {Information?.experience[0].title}
        </h3>
        <p className="text-sm tracking-wide mb-6 text-gray-500">
          Harunrad0919@gmail.com |
          <a
            href="https://github.com/HarunRad0919"
            target="_blank"
            rel="noreferrer"
            className="underline ml-1 mr-1 text-green-500 hover:text-green-700"
          >
            github.com/HarunRad0919
          </a>{" "}
          |
          <a
            href="https://linkedin.com/in/harun-radoncic"
            target="_blank"
            rel="noreferrer"
            className="underline ml-1 text-green-500 hover:text-green-700"
          >
            linkedin.com/in/harun-radoncic
          </a>
        </p>
        <GitHubGraph username="HarunRad0919" />
      </header>

      {/* Experience Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-500">
          Experience
        </h2>
        <div className="experience-list flex flex-col gap-4">
          {Information?.experience.map((exp, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${
                darkMode ? "bg-gray-800" : "bg-blue-50"
              }`}
            >
              <h3 className="job-title text-xl font-semibold">{exp.title}</h3>
              <p className="job-duration text-sm italic text-gray-400">
                {exp.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-500">
          Education
        </h2>
        <div className="education-list flex flex-col gap-4">
          {Information?.education.map((edu, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm ${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-green-50 text-gray-800"
              }`}
            >
              <h3 className="degree text-xl font-semibold">{edu.title}</h3>
              <p className="institution text-sm">
                {edu.desc} | {edu.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-500">
          Projects
        </h2>
        <div className="projects-list flex flex-wrap gap-6">
          {Information?.projects.map((proj, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 w-full md:w-[48%] shadow-sm hover:shadow-md transition-shadow ${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-blue-50 text-gray-800"
              }`}
            >
              <h3 className="project-name text-lg font-semibold mb-2">
                {proj.title}
              </h3>
              <p className="project-desc">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-500">
          Skills
        </h2>
        <div className="skills-list flex flex-wrap gap-4">
          {Information?.skills.map((skill, index) => (
            <span
              key={index}
              className={`rounded-full px-4 py-2 font-semibold shadow-sm ${
                darkMode
                  ? "bg-gray-700 text-green-300"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <div
        className={`app-container absolute min-h-screen transition-colors duration-700 ${
          darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
      >
        {/* Hidden Text */}

        {darkMode && (
          <div className="absolute top-475 right-128 select-none pointer-events-none">
            <span
              className="text-[4rem] font-extrabold tracking-wider text-pink-500 opacity-90
             drop-shadow-[0_0_15px_rgba(255,20,147,0.8)]
             [text-shadow:_0_0_25px_rgba(255,20,147,0.6),_0_0_40px_rgba(255,0,255,0.5)]
             transform rotate-[-8deg] animate-[tagPulse_3s_infinite]"
              style={{
                fontFamily: "Rock Salt",
                cursive: "cursive",
              }}
            >
              Don't be shy
            </span>
          </div>
        )}
      </div>

      {/* Contact Form Section */}
      <section
        className={`section w-full max-w-2xl rounded-lg p-8 shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="section-title mb-4 text-3xl font-semibold text-blue-500">
          Contact Me
        </h2>
        <Contactformpart />
      </section>
    </div>
  );
}

export default App;
