import React from "react";
import styles from "./header.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <h2>Dishly</h2>
      <div className={styles.social_links}>
        <a
          href="https://linkedin.com/in/emmanuelobi20"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <LinkedInIcon className={styles.headerIcon} sx={{ fontSize: 30 }} />
        </a>
        <a
          href="https://github.com/emmanuelobi"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <GitHubIcon className={styles.headerIcon} sx={{ fontSize: 30 }} />
        </a>
        <a
          href="https://instagram.com/koliko_official"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <InstagramIcon className={styles.headerIcon} sx={{ fontSize: 30 }} />
        </a>
        <a
          href="https://twitter.com/koliko_man"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <TwitterIcon className={styles.headerIcon} sx={{ fontSize: 30 }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
