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
       Motivated to solve problems, I enjoy a challenge and learning new ways to enhance my code and become more efficient.  I'm constantly considering how to make sites user-friendly. I get frustrated phone calls from my grandma when she is unable to figure out how to use an application. Yes, younger generations are growing up with more access to technology, but all users should feel at ease when navigating through a site. I am a former secondary math teacher of six years, so I enjoy working with coworkers in a collaborative environment. Having grown up in Bailey, Colorado, I do have that appreciation of small hometowns; but I have enjoyed all of the places I've been able to travel. I love watching Nuggets games, in-person preferrably, but I'm looking forward to the trend where the fourth quarter isn't a fight to catch up. 
      </p>
    </div>
  );
}
