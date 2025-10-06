import NavBar from "../components/NavBar";
import loader_01 from "../assets/loader_01.png";

export default function About() {
  const ac = { color: "yellow" };

  return (
    <>
      <NavBar ac={ac} />
      <div className="flex items-start justify-center mt-50 gap-70 px-10">
        <div className="text-white text-center">
          <h1 style={{ fontFamily: "Lora" }} className="text-3xl font-semibold">
            About me
          </h1>
          <br />
          <div className=" mt-10">
            <img className="w-48 mx-auto rounded-full" src={loader_01} alt="profile" />
          </div>
        </div>

        <div className="text-white max-w-md break-words leading-relaxed" >
          <h1 style={{ fontFamily: "Lora" }}>
            Hi, I'm Bom SAU. A passionate Front-end
          </h1 > 
          <h1 style={{ fontFamily: "Lora" }}>
            Web Developer based in Thailand
            </h1>
          <br />
          <span className="text-gray-500 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat, aspernatur accusamus incidunt rem animi est, corrupti, sunt voluptates soluta cumque voluptatem. Ex laborum temporibus odio animi sint debitis voluptates ducimus obcaecati vitae exercitationem veritatis eos, explicabo necessitatibus quia! Rerum architecto veritatis incidunt, deleniti earum sint, commodi rem fuga quisquam natus aspernatur? Nulla excepturi perspiciatis odio ex cupiditate praesentium autem.
          </span>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button className="border-2 border-white py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition duration-300">
          Download CV
        </button>
      </div>
    </>
  );
}
