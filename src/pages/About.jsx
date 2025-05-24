import SimleImg from "../assets/smile.png";

var bath = [
  { type: "Brithday", c: "1 may 1995" },
  { type: "website", c: "www.example.com" },
  { type: "phone", c: "+1 234 567 890" },
  { type: "city", c: "new york, USA" },
  { type: "age", c: "30" },
  { type: "Degree", c: "master" },
  { type: "email", c: "email@gmail.com" },
  { type: "freelance", c: "avaible" },
];

export default function About() {
  return (
    <section className="w-full h-auto my-5">
      <h2 className="text-2xl font-bold text-center">About</h2>
      <p className="my-8 text-base text-center ">
        Magnam dolores commodi suscipit. ciis commodi quidem hic quas.
      </p>
      <img
        src="https://bootstrapmade.com/content/demo/iPortfolio/assets/img/my-profile-img.jpg"
        alt=""
        className="object-cover w-40 h-40 rounded-full border-4 shadow-2xl mx-auto "
      />
      <div className="my-5">
        <h3 className="mb-4 text-2xl font-bold text-center text-gray-800 capitalize shadow-2xl">ui/ux desinger & web develpor.</h3>
        <p className="text-center text-base">
          Lorem ipsum dolor sit amet, consectetur abore et dolore magna aliqua.
        </p>
        <div className='flex items-center justify-start '>
          
        <hr className=' rotate-90 border-4 w-60 mr-[1%]  border-blue-600 '/>
        <div className="my-7 -ml-[20%]   grid grid-cols-1 gap-4  ">
          {bath.map((list) => (
            <>
            <p className="  font-bold text-sm  text-gray-800 capitalize ">
              <b className=""
              >{list.type}:</b> {list.c}
            </p>
            </>
          ))}
        </div>
        </div>

      </div>
      <p className="text-base text-center px-3">
        Officiis eligendi itaque labore et dolor qui quia repellendus itaque neque.
      </p>
      <div className="grid grid-cols-2 gap-5 items-center justify-center my-5">
        <ReponsiveItem img={SimleImg} number={232} details="happy clients consequuntur quae" />
        <ReponsiveItem img={SimleImg} number={521} details="happy clients consequuntur quae" />
        <ReponsiveItem img={SimleImg} number={1453} details="happy clients consequuntur quae" />
        <ReponsiveItem img={SimleImg} number={32} details="happy clients consequuntur quae" />
      </div>
    </section>
  );
}

function ReponsiveItem(props) {
  return (
    <div className=" text-center">
      <div>
        <img src={props.img} alt="" className="w-10 h-10 mx-auto mb-2" />
      </div>
      <div>
        <h4 className="font-bold text-md text-gray-600  ">{props.number}</h4>
        <p className="text-xs capitalize">{props.details}</p>
      </div>
    </div>
  );
}