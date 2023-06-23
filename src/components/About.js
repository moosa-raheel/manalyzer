import React from "react";
import mypic from "../Images/pic.jpeg";
export default function About() {
  return (
    <>
      <div className="container about">
        <h1 className="about-head">About Me</h1>
        <div className="about-sec">
          <div className="about-img">
            <img src={mypic} alt="My Pic" />
            <div className="img-cont">
              <h3>Follow Me</h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-follow"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="about-cont">
            <h1>About Myself</h1>
            <p>
              Hey there. I am called by Moosa Raheel. I am from Karachi in
              Pakistan. My mother language is Urdu. My hobby is Programming,
              listening songs and watching movies and web series. My favourite
              singer is Justin Bieber. My favourite programming language is
              JavaScript. My favourite personality is Linus Torvalds. I am 17
              years old .I start programming and web development when I was 16
              years old. For now I am a student of DAE 1<sup>st</sup> Year in
              CIT I want to become a full stack web developer and computer
              genius. That's what I've been working on lately. I learning React
              which is a JavaScript library. Next I will learn NextJs which is
              the framework of React. I make this website just for practicing
              react then I realize that it will helpfull some people who want to
              manipulate a text like convert text uppercase to lowercase or
              lowercase to uppercase etc. If you wanna get the source code of
              this Website so it is freely available in{" "}
              <a
                href="https://github.com/moosa-bhai13/Manalyzer"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>{" "}
              you can easily clone or download it.Well I know HTML, CSS, Git,
              Linux, Mark down, Tailwind CSS which is utility-first CSS
              framework and JavaScript in great detail like Object Oriented
              Programming and prototypal inheritance closure etc . I also know
              little bit Python , PHP ,SQL, C,and java.I learn all these things
              from watching Youtube videos reading Blogs, Books and
              documentations. In other words you can say that this is the result
              of my own hard work. If you want chat with me so you can do it
              easily using{" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                instaram
              </a>{" "}
              and kindly follow me on{" "}
              <a
                href="https://github.com/moosa-bhai13"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>{" "}
              to show yopur support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
