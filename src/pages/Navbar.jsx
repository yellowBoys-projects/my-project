// Navbar.jsx
import facebook from "../assets/facebook-logo.png";
import linkdin from "../assets/linkedin-logo.png";
import instagram from "../assets/instagram-logo.png";
import quora from "../assets/quora-logo.png";
import twitter from "../assets/twitter-logo.png";
import "./style.css";
import {useEffect} from 'react';
import $ from 'jquery'
const links = [
  { name: "home" },
  { name: "about" },
  { name: "Services" },
  { name: "contact" },
  { name: "resume" },
];

export default function Navbar() {
	useEffect(() => {
    $('#close-btn').on('click', function () {
      $('#demo').removeClass('btn01').addClass('hide');
      console.log("navabr click call to  function")
    });
  }, []);

  return (
    <div className="navbar-div " id='demo'>
      <nav className="bg-blue-600 w-[50%]  py-3  gap-3 h-screen flex flex-col items-center relative md:py-6 md:max-w-2/5 xl:max-w-sm ">
        <img
          className="w-32 h-32 rounded-full "
          src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/my-profile-img.jpg"
          alt=""
        />
        <button id="close-btn" className="md:hidden float-right absolute top-[4%] right-[10%] p-1 text-3xl">
          =
        </button>
        <h2 className="text-white uppercase font-bold text-3xl">alex smith</h2>

        <div className="flex gap-3">
          <FlatIcon link="" social={facebook} />
          <FlatIcon link="" social={linkdin} />
          <FlatIcon link="" social={instagram} />
          <FlatIcon link="" social={twitter} />
          <FlatIcon link="" social={quora} />
        </div>
        <div className="mt-5">
          <ul className="flex gap-5 flex-col">
            {links.map((link) => (
              <li
                key={link.name}
                className="ring-1 hover:ring-green-700 duration-200 ring-white hover:scale-110 px-8 py-2 rounded"
              >
                <a
                  href="#"
                  className="hover:text-green-700 text-white capitalize text-xl"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

function FlatIcon(props) {
  return (
    <div className="flaticon-div">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.social}
          className="size-8 ring-1 p-1 hover:ring-white hover:scale-125 duration-200 rounded-full"
          alt="Social icon"
          width="40"
          height="40"
        />
      </a>
    </div>
  );
}
