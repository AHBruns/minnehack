import React from "react";
import Link from "next/link";

export const Footer = ({}) => {
  return (
    <div className="wrapper">
      <nav>
        <div className="spacer" />
        <Link href="/">
          <a className="logo">🌚</a>
        </Link>
        <Link href="/">
          <a className="text">Team Moon Emoji FTW</a>
        </Link>
        <div className="spacer" />
      </nav>
      <style jsx>{`
        a {
          display: inline-block;
          margin: 10px;
          text-decoration: none;
          color: black;
          font-size: 2vh;
        }
        .logo {
          font-size: 3vh;
          filter: drop-shadow(0 0 10px white) drop-shadow(0 0 10px white);
        }
        .wrapper {
          border-top: 2px solid black;
          z-index: 1;
        }
        nav {
          display: flex;
          align-items: center;
          padding: 10px;
          background-color: rgba(0, 150, 0, 0.5);
        }
        .spacer {
          flex: 2;
        }
      `}</style>
    </div>
  );
};

export default Footer;
