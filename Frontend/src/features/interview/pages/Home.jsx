import { useState, useRef } from 'react'
import "../style/home.scss"
import { useInterview } from "../hooks/useInterview"
import { useNavigate } from "react-router"

const Home = () => {

  const { loading, generateReport, reports } = useInterview()
  const [jobDescription, setJobDescription] = useState("")
  const [selfDescription, setSelfDescription] = useState("")
  const resumeInputRef = useRef()
  const navigate = useNavigate()

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0]
    const data = await generateReport({ jobDescription, selfDescription, resumeFile })
    navigate(`/interview/${data._id}`)
  }

  if(loading) {
    return (
      <main className='loading-screen'>
        <h1>Loading your interview plan...</h1>
      </main>
    )
  }

  return (
    <main className='home'>

      {/* ── Welcome Section ── */}
      <div className="welcome-section">
        <h1 className="welcome-title">Create Your Interview Plan</h1>
        <p className="welcome-subtitle">Enter job details and let AI generate a personalized interview roadmap</p>
      </div>

      {/* ── Main Card ── */}
      <div className="interview-input-group">
        <div className="left">
          <span className="panel-label">Job Description</span>
          <textarea
            onChange={(e) => setJobDescription(e.target.value)}
            name="jobDescription"
            id="jobDescription"
            placeholder="Enter the job description here..."
          />
        </div>

        <div className="right">
          <span className="panel-label">Your Details</span>

          <div className="input-group">
            <label htmlFor="resume">Resume — <small>Use Resume and self description for best results (PDF Only)</small></label>
            <input ref={resumeInputRef} type="file" name="resume" id="resume" accept=".pdf" />
          </div>

          <div className="input-group" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="selfDescription">Self Description</label>
            <textarea
              onChange={(e) => setSelfDescription(e.target.value)}
              name="selfDescription"
              id="selfDescription"
              placeholder="Briefly describe your background and skills..."
            />
          </div>

          <button onClick={handleGenerateReport} className='generate-btn'>Generate Interview Report →</button>
        </div>
      </div>

      {/* Recent Reports List */}
      {reports.length > 0 && (
        <section className='recent-reports'>
          <h2>My Recent Interview Plans</h2>
          <ul className='report-list'>
            {reports.map(report => (
              <li key={report._id} className='report-item' onClick={() => navigate(`/interview/${report._id}`)}>
                <h3>{report.title || "Untitled Report"}</h3>
                <p className='report-meta'>Generate on { new Date(report.createdAt).toLocaleDateString() }</p>
                <p className={`match-score ${report.matchScore >= 80 ? 'score--high' : report.matchScore >= 60 ? 'score--mid' : 'score--low'}`}>Match Score: {report.matchScore}%</p>
              </li>
            ))}
          </ul>
        </section>
      )}



      {/* ── Footer ── */}
      <footer className="home-footer">
        <p>AI-Powered Interview Preparation · © {new Date().getFullYear()} InterviewAI</p>
      </footer>

    </main>
  )
}

export default Home