import React from "react";
import ReactDOM from "react-dom/client";
import { skills } from "./data.ts";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Card className="card" />
    </div>
  );
}

function Card() {
  const content = `Full-stack Web developer and teacher at Udemy
  When not coding or preparing a course, I like to play board games, to cook(and eat),
  or to just enjoy the Portuguese sun at the beach.`;

  const imgUrl = "/assets/blank_profile.jpg";
  return (
    <div className="card">
      <img className="profile" src={imgUrl} alt="profile" />
      <NameTag name={"Jacob Johnas"} />
      <Introduce content={content} />
      <SkillTags skills={skills} />
    </div>
  );
}

function NameTag({ name }) {
  return (
    <>
      <h2>{name}</h2>
    </>
  );
}

function Introduce({ content }) {
  return (
    <>
      <p>{content}</p>
    </>
  );
}

function SkillTags({ skills }) {
  console.log("skills = ", skills);
  return (
    <>
      {skills.map((skill) => (
        <button className="skill-tag" style={{ backgroundColor: skill.color }}>
          {skill.tag}
          {skill.emoji}
        </button>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
