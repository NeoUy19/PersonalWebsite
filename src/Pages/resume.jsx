import "./resume.css";
export function Resume() {
  return (
    <div className="ResumePage">
      <h1>My Resume</h1>
      <iframe src="/resume.pdf" title="Neo Uy resume" className="ResumeFrame" />
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="links"
      >
        Open in a new tab
      </a>
    </div>
  );
}
