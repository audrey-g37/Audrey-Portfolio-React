import React from "react";
import "../../styles/about.css";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img
        className="about-me-img"
        src="./images/Self.png"
        alt="Headshot of Audrey Gillies"
      />
      <p>
        I am a former secondary math teacher of six years. Growing up in Bailey,
        Colorado instilled that appreciation of small hometowns, but I have
        enjoyed all of the places I've been able to travel. I love watching
        Nuggets games, in-person preferrably, but I'm looking forward to a trend
        where the fourth quarter isn't a fight to catch up. The motivation to
        problem-solve is one of my more apparent traits. I'm constantly using
        code to make sites user-friendly. I know how frustrated my grandma gets
        when she doesn't understand 'why' a page isn't doing what she wants it
        to. Yes, younger generations are growing up with more access to
        technology, but it doesn't hurt to alert a user what might be causing
        the error.
      </p>
    </div>
  );
}
