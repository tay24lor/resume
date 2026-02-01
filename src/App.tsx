import { EnvelopeIcon, PhoneIcon, MapPinIcon, SunIcon, MoonIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Chatbot from './components/Chatbot';
import CustomBackground from './components/CustomBackground';

function App() {
  const [isDark, setIsDark] = useState(false)
  const [backgroundStyle, setBackgroundStyle] = useState<'gradient' | 'particles' | 'waves'>('gradient')

  useEffect(() => {
    // Check if user has a theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <div className="background-wrapper">
      <CustomBackground style={backgroundStyle as 'gradient' | 'particles' | 'waves'} isDark={isDark} />
      <div className="container">
        <div className="background-controls">
          <button
            type="button"
            className={`bg-style-btn ${backgroundStyle === 'gradient' ? 'active' : ''}`}
            onClick={() => setBackgroundStyle('gradient')}
          >
            Gradient
          </button>
          <button
            type="button"
            className={`bg-style-btn ${backgroundStyle === 'particles' ? 'active' : ''}`}
            onClick={() => setBackgroundStyle('particles')}
          >
            Particles
          </button>
          <button
            type="button"
            className={`bg-style-btn ${backgroundStyle === 'waves' ? 'active' : ''}`}
            onClick={() => setBackgroundStyle('waves')}
          >
            Waves
          </button>
        </div>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <>
              <SunIcon /> Light
            </>
          ) : (
            <>
              <MoonIcon /> Dark
            </>
          )}
        </button>

        <main>
          {/* Header/Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section"
          >
            <h1>Taylor Aubrey</h1>
            <h2>Software Developer</h2>

            <div className="contact-info">

              <div className="contact-item">
                <EnvelopeIcon />
                <a href="mailto:taylor.aubrey507@gmail.com">
                  taylor.aubrey507@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <PhoneIcon />
                <span>817-876-8799</span>
              </div>
              <div className="contact-item">
                <MapPinIcon />
                <span>Lewisville, TX</span>
              </div>
              <div className="contact-item">
                <a href="https://www.linkedin.com/in/taylor-aubrey-7a18bb1b3">
                Visit my LinkedIn {'>>'}
                </a>
              </div>
            </div>

            <p>
              Recent Software Development graduate with a strong foundation in Java, web technologies, and programming fundamentals.
              Transitioning from customer service and warehouse operations with excellent attention to detail and team collaboration skills.
              Eager to apply my technical education and problem-solving abilities to create efficient, user-friendly applications.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section"
          >
            <h2 className="section-title">Education</h2>

            <div className="education-item">
              <h3 className="education-title">Bachelor of Science in Software Development</h3>
              <div className="education-school">Western Governor's University • 2022 - 2024</div>
              <p className="education-description">
                Specialized in Software Engineering and Java Development.
              </p>
            </div>
            <br></br>
            <div className="education-item">
              <h3 className="education-title">Associates of Science in IT-Programming</h3>
              <div className="education-school">Tarrant County College • 2020 - 2022</div>
              <p className="education-description">
                Graduated with 4.0 GPA.
              </p>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section"
          >
            <h2 className="section-title">Projects</h2>

            <div className="projects-grid">
              <div className="project-card">
                <h3 className="project-title">Java Inventory Management System</h3>
                <div className="project-tags">
                  <span className="project-tag">Java</span>
                  <span className="project-tag">JavaFX</span>
                  <span className="project-tag">MySQL</span>
                  <span className="project-tag">JDBC</span>
                </div>
                <p className="project-description">
                  Capstone project for WGU Software Development program. Built a desktop application for managing product inventory
                  with JavaFX GUI. Implemented features like part management, product assembly, and inventory alerts. Used MySQL
                  for data persistence and JDBC for database connectivity.
                </p>
                <div className="project-links">
                  <a href="https://github.com/tay24lor/Capstone_Project.git" className="project-link">
                    <CodeBracketIcon /> View Code
                  </a>
                </div>
              </div>

              <div className="project-card">
                <h3 className="project-title">Academic Schedule Planner</h3>
                <div className="project-tags">
                  <span className="project-tag">Java</span>
                  <span className="project-tag">Android</span>
                  <span className="project-tag">MySQL</span>
                </div>
                <p className="project-description">
                  Android project for Mobile Programming course at WGU. Created a mobile application for academic advisors
                  to manage student schedules. Features include shareable course notes via text or email, professor contact information,
                  assessment scheduling.
                </p>
                <div className="project-links">
                  <a href="https://github.com/tay24lor/StudentTrackingApp.git" className="project-link">
                    <CodeBracketIcon /> View Code
                  </a>
                </div>
              </div>

              <div className="project-card">
                <h3 className="project-title">Interactive Resume Website</h3>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">CSS</span>
                  <span className="project-tag">Framer Motion</span>
                </div>
                <p className="project-description">
                  Personal project hosted on Vercel. Built a modern, responsive resume website using React
                  and TypeScript. Implemented features like dark mode, smooth animations with Framer Motion, and a clean,
                  professional design using pure CSS.
                </p>
                <div className="project-links">
                  <a href="https://github.com/tay24lor/resume.git" className="project-link">
                    <CodeBracketIcon /> View Code
                  </a>
                </div>
              </div>

              <div className="project-card">
                <h3 className="project-title">My Flower Store</h3>
                <div className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">TypeScript</span>
                  <span className="project-tag">CSS</span>
                </div>
                <p className="project-description">
                  An e-commerce application for managing flower sales. Users can browse products, add them to their cart, and complete purchases. Implemented features include user authentication, product filtering, and a responsive design.
                </p>
                <div className="project-links">
                  <a href="https://github.com/tay24lor/my-flower-store" className="project-link">
                    <CodeBracketIcon /> View Code
                  </a>
                  <a href="https://mkflowers.netlify.app/">Visit Site `&gt;`</a>
                </div>
              </div>

            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="section"
          >
            <h2 className="section-title">Experience</h2>

            <div>
                <div className="experience-item">
                <h3 className="experience-title">IT Service Desk Agent</h3>
                <div className="experience-company">Parsons Corporation • Sept - Nov 2025</div>
                <ul className="experience-list">
                  <li>Ran BIOS updates on over 100 work laptops</li>
                  <li>Created an Excel spreadsheet with automated color-coding to maintain a record of progress</li>
                </ul>
              </div>
              <div className="experience-item">
                <h3 className="experience-title">Warehouse Associate/Forklift Driver</h3>
                <div className="experience-company">Amazon • 2020 - 2021</div>
                <ul className="experience-list">
                  <li>Operated powered industrial equipment to efficiently move and organize inventory</li>
                  <li>Maintained accurate inventory records and achieved 99.9% accuracy in picking and stowing</li>
                  <li>Collaborated with team members to meet daily productivity goals and shipping deadlines</li>
                </ul>
              </div>

              <div className="experience-item">
                <h3 className="experience-title">Customer Service Representative</h3>
                <div className="experience-company">Voss Lighting • 2018 - 2020</div>
                <ul className="experience-list">
                  <li>Provided exceptional customer service and technical support for lighting products</li>
                  <li>Processed orders and maintained customer accounts with high attention to detail</li>
                  <li>Assisted customers in selecting appropriate lighting solutions for their needs</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="section"
          >
            <h2 className="section-title">Skills</h2>

            <div className="skills-container">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Object-Oriented Programming</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Team Collaboration</span>
            </div>
          </motion.section>
        </main>

        <Chatbot />

        <footer className="footer">
          {new Date().getFullYear()} Taylor Aubrey. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default App

