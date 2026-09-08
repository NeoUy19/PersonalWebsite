import "./home.css";
export function Home() {
  return (
    <>
      <div className="background">
        <div className="greeting">
          <h1>Hi, I'm Neo Uy</h1>
          <h2>Computer Science Student @ UIC</h2>
          <p></p>
          <hr />
          <a
            href="https://www.linkedin.com/in/neouy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./linkedin.png" alt="LinkedIn" width={20} height={20} />
          </a>
          <a
            href="https://github.com/NeoUy19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./github.png" alt="GitHub" width={20} height={20} />
          </a>
        </div>
      </div>
    </>
  );
}
