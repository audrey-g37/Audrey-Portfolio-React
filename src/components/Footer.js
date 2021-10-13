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
      <a href="mailto:audrey.gillies@gmail.com"
              >audrey.gillies@gmail.com
            </a>
      </li>
      <li className="link-info">
        <a
          href="https://www.linkedin.com/in/audreygillies37/"
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
