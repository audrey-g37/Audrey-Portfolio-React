import React from "react";
import "../styles/about.css";
import Self from "../images/Self.png";

export default function About() {
  return (
    <div className = ".about-me">
      <h1 className="page-todo">About Me</h1>
      <img
        className="about-me-img"
        src={Self}
        alt="Headshot of Audrey Gillies"
      />
      <p className="about-me-p">
       Motivated to solve problems, I enjoy a challenge, striving to learn new ways to enhance my code and become more efficient. I enjoy working with a client to help them get the functionality they want, while keeping in mind the 'customer' who will visit their website. I get phone calls from my flustered grandma when she is unable to figure out how to use an application. Yes, younger generations are growing up with more access to technology, but all users should feel at ease when navigating through a site. I am always trying to consider what adjustments could enhance user-experience. As a former secondary math teacher of six years, I enjoy working with co-workers in a collaborative environment. There are always new ways to approach a solution, and sometimes, merging those ideas can lead to the best result.
      </p>
    </div>
  );
}
