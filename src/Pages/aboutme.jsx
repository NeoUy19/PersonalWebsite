import "./aboutme.css";
export function AboutMe() {
  return (
    <>
      <div className="ampage">

        <div className="Main">
            <h1>About Me</h1>
          <p> Hi! My name is Neo Uy. I am a computer science major at the University of Illinois Chicago (UIC).
            I am interested in software engineering, cloud computing, machine learning, and data science.
            I love building projects that challenge my knowledge and help me improve as a programmer and problem solver. 
            
          </p>
             <p className="lowermain">
                Right now, I am aiming for an internship for summer 2027, ideally something backend or cloud-focused, which is why I have been building toward AWS. 
                First with the certificate and then deployment and practice with AWS tools.
                In the future I hope I will be able to build projects that will help other people, whether it be helping others grow their passions or improve their lives in general.
             </p>
        </div>
        <div className="secondary">
            <p>
                Other than computer science, one of my biggest hobbies has always been music. No matter what I do, music will always be a part of it, whether listening or playing.
                My home page is indicative of this lifelong interest. Each album is a reflection of who I am and my favorite genres of music.
                Many of the projects I want/plan to work on center around music or some kind of art.
            </p>
        </div>
      </div>
    </>
  );
}
