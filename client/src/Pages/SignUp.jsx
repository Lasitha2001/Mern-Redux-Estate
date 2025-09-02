import { Link } from "react-router-dom"
import bgImg from "../assets/1.jpg"

function SignUp() {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="p-4 sm:p-6 max-w-full sm:max-w-lg w-full mx-auto bg-stone-50/80 rounded-xl shadow-lg border border-stone-200" style={{ opacity: 0.92 }}>
                <h1 className="text-2xl sm:text-3xl text-center font-semibold my-4 sm:my-6 text-slate-800">Sign Up</h1>
                <form className="flex flex-col gap-3 sm:gap-4 mx-auto">
                    <input type="text" placeholder="Username" className="border border-slate-300 p-2 sm:p-3 rounded-lg bg-white text-zinc-700 focus:border-orange-500 focus:outline-none w-full" id="username" />
                    <input type="email" placeholder="Email" className="border border-slate-300 p-2 sm:p-3 rounded-lg bg-white text-zinc-700 focus:border-orange-500 focus:outline-none w-full" id="email" />
                    <input type="password" placeholder="Password" className="border border-slate-300 p-2 sm:p-3 rounded-lg bg-white text-zinc-700 focus:border-orange-500 focus:outline-none w-full" id="password" />
                    <button className="bg-amber-400 text-white p-2 sm:p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 cursor-pointer w-full">Sign Up</button>
                    <button className="bg-orange-500 text-white p-2 sm:p-3 rounded-lg uppercase hover:text-white cursor-pointer w-full">Continue With Google</button>
                </form>
                <div className="flex gap-2 mt-5">
                    <p className="text-zinc-700">Have an account? <Link to="/signin"><span className="text-orange-700 hover:underline">Sign in</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
