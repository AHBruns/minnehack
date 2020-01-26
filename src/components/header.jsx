import React from "react";
import Link from "next/link";

export const Header = ({}) => {
  return (
    <div className="wrapper">
      <nav>
        <Link href="/">
          <a className="logo">🌚</a>
        </Link>
        <div className="spacer" />
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
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
          font-size: 5vh;
        }
        .wrapper {
          border-bottom: 1px solid black;
        }
        nav {
          display: flex;
          align-items: center;
          padding: 10px;
        }
        .spacer {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Header;
