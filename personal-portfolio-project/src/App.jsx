import { useState } from 'react'
import './App.css'
import Information from './Content.json'
import GitHubGraph from './github-cont'
import Contactformpart from './contacts'

function App() {
  return (
    <div className="app-container bg-gray-50 text-gray-800 min-h-screen p-8 flex flex-col items-center gap-16 font-sans">

      {/* Header Section */}
      <header className="header w-full max-w-4xl bg-white rounded-lg p-8 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2 text-blue-600">{Information?.name}</h1>
        <h3 className="text-xl font-semibold mb-4 text-gray-600">{Information?.experience[0].title}</h3>
        <p className="text-sm tracking-wide mb-6 text-gray-500">
          Harunrad0919@gmail.com | 
          <a href="https://github.com/HarunRad0919" target="_blank" rel="noreferrer" className="underline ml-1 mr-1 text-green-500 hover:text-green-700">github.com/HarunRad0919</a> | 
          <a href="https://linkedin.com/in/harun-radoncic" target="_blank" rel="noreferrer" className="underline ml-1 text-green-500 hover:text-green-700">linkedin.com/in/harun-radoncic</a>
        </p>
        <GitHubGraph username="HarunRad0919" />
      </header>

      {/* Experience Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-600">Experience</h2>
        <div className="experience-list flex flex-col gap-4">
          {Information?.experience.map((exp, index) => (
            <div key={index} className="experience-item bg-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="job-title text-xl font-semibold">{exp.title}</h3>
              <p className="job-duration text-sm italic text-gray-600">{exp.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-600">Education</h2>
        <div className="education-list flex flex-col gap-4">
          {Information?.education.map((edu, index) => (
            <div key={index} className="education-item bg-green-50 p-4 rounded-lg shadow-sm">
              <h3 className="degree text-xl font-semibold">{edu.title}</h3>
              <p className="institution text-sm text-gray-600">{edu.desc} | {edu.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-600">Projects</h2>
        <div className="projects-list flex flex-wrap gap-6">
          {Information?.projects.map((proj, index) => (
            <div key={index} className="project-item bg-blue-50 rounded-lg p-6 w-full md:w-[48%] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="project-name text-lg font-semibold mb-2">{proj.title}</h3>
              <p className="project-desc text-gray-700">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section w-full max-w-4xl">
        <h2 className="section-title mb-6 border-b-2 border-green-500 pb-2 text-3xl font-semibold text-blue-600">Skills</h2>
        <div className="skills-list flex flex-wrap gap-4">
          {Information?.skills.map((skill, index) => (
            <span key={index} className="skill-item bg-green-100 text-green-800 rounded-full px-4 py-2 font-semibold shadow-sm">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section w-full max-w-2xl bg-white rounded-lg p-8 text-gray-800 shadow-md">
        <h2 className="section-title mb-4 text-3xl font-semibold text-blue-600">Contact Me</h2>
        <Contactformpart />
      </section>

    </div>
  )
}

export default App
