// Home.jsx
import Navbar from "./Navbar.jsx";
import "./style.css";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Service from "./service.jsx";
import Portfolio from "./Portfolio.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import $ from 'jquery'
import {React,useEffect} from 'react'



export default function Home() {
   useEffect(() => {
    $('#btn').on('click', function () {
      $('#btn01').removeClass('hide').addClass('btn01');
      console.log("home click call to function")
    });
  }, []);

  return (
    <>
      <main>
        <div className="hero-img relative">
          <div id='btn01' className="hide">
            <Navbar />
          </div>
          <HomeContent />
        </div>

        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Service />
        <Contact />
      </main>

      <footer className="mt-3">
        <p className="text-center">
          &copy; copyright <strong>iportfolio</strong> all rights reserved{" "}
          <small>
            designed by <a href="">bootstrapMade</a>
          </small>
        </p>
      </footer>
    </>
  );
}

function HomeContent() {



  return (
    <section className="home-section">
      <button id='btn'  className="md:hidden float-right mr-10 mt-10 bg-slate-200 px-3 py-1 rounded-full text-4xl hover:bg-indigo-600 duration-200">
        =
      </button>
      <div className="absolute bottom-[50%] left-[10%] md:left-[45%] md:bottom-[40%]">
        <h1 className="text-3xl text-white uppercase font-extrabold  ">alex smith</h1>
        <p className="text-white text-xl float-right">welcome ....</p>
      </div>
    </section>
  );
}
