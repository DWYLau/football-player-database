import { Outlet } from "react-router-dom"
import { FiMenu } from "react-icons/fi"
import { useState } from "react"

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>
      <header className="bg-violet-700 p-3 flex justify-between items-center h-[8vh]">
        <FiMenu className="rounded-2xl p-2 text-6xl cursor-pointer hover:text-white hover:bg-black hover:shadow-lg transition ease-in-out delay-300" />
        <h1 className="text-white text-4xl p-2">Football Player Database</h1>
        <form
          className="flex gap-2 mr-24"
          action="http://localhost:4000/players/"
          method="GET"
        >
          <input
            className="rounded-2xl p-2 border-4 border-violet-700 hover:border-slate-700 hover:shadow-md transition ease-in-out delay-100"
            type="text"
            name="value"
            id="value"
            placeholder="Search for a player..."
          />
          <button
            className="bg-emerald-500 rounded-2xl p-2 border-4 border-violet-700 hover:border-slate-700 hover:shadow-md transition ease-in-out delay-100"
            type="submit"
          >
            Submit
          </button>
        </form>
      </header>

      <Outlet />
    </div>
  )
}

export default Home
