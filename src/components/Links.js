import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="wrapper">
      <a
        href="https://twitter.com/salawekesa"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Twitter Link
      </a>
      <a
        href="https://training.zuri.team/"
        id="btn__zuri"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Zuri Team
      </a>
      <a
        href="http://books.zuri.team"
        id="books"
        data-info="Zuri books and kickstart your career in coding and designing"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=salathielwekesa"
        id="book__python"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Python Books
      </a>
      <a
        href="https://background.zuri.team"
        id="pitch"
        data-info="Get at a discounted price the cheetsheet for great developers"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book__design"
        data-info="Get free beginner to intermeditate designers coursebooks"
        className="link"
        target="_blank"
        rel="noreferrer"
      >
        Design Books
      </a>
    </div>
  );
};

export default Links;
