import { Link } from "react-router-dom";


export default function NavBar({ hc, ac, pc, cc }) {
  return (
    <div className="flex justify-around items-center bg-black text-white py-6">
        
        <h1 className="text-3xl font-bold">BomBay</h1>
        <Link style={hc} to="/" className="text-white hover:text-yellow-200 transition duration-300"> Home </Link>
        <Link style={ac} to="/about" className="text-white hover:text-yellow-200 transition duration-300"> About </Link>
        <Link style={pc} to="/portfolio" className="text-white hover:text-yellow-200 transition duration-300"> Portfolio </Link>
        <Link style={cc} to="/contact" className="border-2 border-white py-2 px-6 rounded-3xl text-white hover:bg-white hover:text-black transition duration-300"> Let's talk </Link>

    </div>
  )
}
