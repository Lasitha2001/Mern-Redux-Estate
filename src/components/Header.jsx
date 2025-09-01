import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="bg-stone-100 shadow-md">
            <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
                <Link to="/">
                    <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                        <span className="text-amber-400">Cinnamon</span>
                        <span className="text-slate-800">Estate</span>
                    </h1>
                </Link>
                <form className="bg-white p-3 rounded-lg flex items-center">
                    <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64 text-zinc-700 text-sm" />
                    <FaSearch className="text-orange-500" />
                </form>
                <ul className="flex gap-4 font-medium">
                    <Link to="/">
                        <li className="hidden sm:inline text-slate-800 hover:underline hover:text-orange-500 transition-colors">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="hidden sm:inline text-slate-800 hover:underline hover:text-orange-500 transition-colors">About</li>
                    </Link>
                    <Link to="/signin">
                        <li className="text-amber-400 hover:text-orange-500 transition-colors">Sign In</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
