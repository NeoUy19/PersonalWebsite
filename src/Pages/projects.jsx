import "./projects.css";
export function Projects() {
  const PROJECTS = [
    {
        title: "Personal Website",
        date: "Fall 2026",
        tags: ["React","Vite", "JavaScript", "CSS", "AWS Services"],
        desc: "Personal Website to showcase my projects, resume, and show who I am. Also made to get me hands on experience with react and AWS services",
        status: "WIP"

    },
    {
      title: "Barcode Scanner for IBD",
      date: "Fall 2026",
      tags: ["Python", "REST APIs", "AWS Services"],
      desc:"A web-app that takes in barcodes of food and gives a rating on how inflammatory it is, and giving reasons why it is inflammatory. (Maybe adding a feature where it gives healthier substitute",
      status:"WIP",
    },
    {
      title: "Checkers App",
      date: "Spring 2026",
      tags: ["Java", "JavaFX", "Sockets"],
      desc:"A checker app created for a class project. My introduction to networking and the client-server model. Users are able to challenge other available players to a game of checkers",
      status: "Complete",
    },
    {
      title: "Weather App",
      date: "Spring 2026",
      tags: ["Java", "JavaFX"],
      desc: "Consumes the National Weather Service API for live forecasts, with deserialization built to survive differing JSON schemas across endpoints.",
      status: "Complete"
        
    },
    {
      title: "Discord Homework Bot",
      date: "Winter 2025",
      tags: ["Python", "SQLite"],
      desc: "Lets users create and join classes, track assignments, and get deadline notifications.",
      status: "Complete"
    },
  ];
  return (
    <>
      <div className="projectspage">
        <h1>Projects</h1>
        <div className="grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-head">
                <h2>{p.title}</h2>
                <span className="project-date">{p.date}</span>
              </div>

              <p>{p.desc}</p>

              <ul className="project-tags">
                {p.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            <span className="project-status">{p.status}</span>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
