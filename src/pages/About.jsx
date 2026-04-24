import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import { Link } from "react-router";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data));
  }, []);

  console.log(aboutData);
  return (
    <Section className={"py-20"}>
      <Container>
        <div className="flex gap-3 items-center">
          <p>
            <Link to="/">Home</Link> / About
          </p>
        </div>

        <div className="mt-10">
          <div>
            <h1 className="text-3xl font-bold mb-4">{aboutData?.title}</h1>
            <p className="text-gray-600">{aboutData?.description} </p>
          </div>
          <div>
            <img src={aboutData?.image} alt="image" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
