import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <ul>
      <li className="link-info">
        <a
          href="https://github.com/audrey-g37"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </li>
      <li className="link-info">
        <a
          href="https://www.linkedin.com/in/audrey-gillies-2764341a1"
          target="no_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
}

export default Footer;
