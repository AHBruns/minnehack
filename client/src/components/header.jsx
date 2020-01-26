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
          <a className="link">Home</a>
        </Link>
        <Link href="/contact">
          <a className="link">Contact</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
      </nav>
      <style jsx>{`
        .link {
          display: inline-block;
          padding: 30px;
          text-decoration: none;
          color: black;
          font-size: 2vh;
        }
        .link:hover {
          background-color: rgba(0, 150, 0, 0.75);
        }
        .logo {
          display: inline-block;
          padding: 10px;
          text-decoration: none;
          color: black;
          font-size: 5vh;
          padding-left: 15px;
        }
        .wrapper {
          border-bottom: 2px solid black;
        }
        nav {
          display: flex;
          align-items: center;
          background-color: rgba(0, 150, 0, 0.5);
        }
        .spacer {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Header;
