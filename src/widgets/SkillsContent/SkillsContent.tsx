import React from "react";

const SkillsContent: React.FC = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Skills</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, HTML, CSS</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>NodeJS, SQL (Postgres, Mongo, Microsoft)</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Other</h2>
                        <p>Bash, C# (OOP), Java, Algorithms and data structures</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default SkillsContent;