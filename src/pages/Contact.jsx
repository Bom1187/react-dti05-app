import NavBar from "../components/NavBar";
import profile001 from "../assets/profile001.png";
import location from "../assets/location.png";
import workplace from "../assets/workplace.png";

export default function Contact() {
  const cc = { color: "yellow" };
  return (
    <>
      <NavBar cc={cc} />
      <div className="text-white mt-30 ml-50 px-10 text-3xl font-bold">
        <h1 style={{ fontFamily: "Lora" }}>
          Contact
        </h1>
      </div>
      <div className="text-white flex items-center justify-center mr-20 mt-10 text-2xl" style={{ fontFamily: "Lora" }} >
        Let's Connect
      </div>
      <div className="text-gray-400 flex items-center justify-center mr-20 mt-10 text-xl font-bold">
        Don't be stranger! Say hello and let's collaborate
      </div>
      <div className="flex items-center mt-50">
        <div className="ml-50">
          <img src={profile001} alt="profile" />
        </div >
        <div className="w-20 ml-140">
          <img src={location} alt="profile" />
        </div>
        <div className="ml-130">
          <img src={workplace} alt="profile" />
        </div>
      </div>
      <div className="text-gray-200 flex items-center ">
        <h1 className="ml-52">bombay@gmail.com</h1>
        <h1 className="ml-125">Thailand,Bangkok</h1>
        <h1 className="ml-135">Bom SAU</h1>
      </div>
    </>
  );
}
