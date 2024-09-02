import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <header>
        <div className="bg-violet-950 p-3 flex justify-evenly items-center h-[8vh]">
          <h1 className="text-white p-2">Football Player Database</h1>

          <input
            type="text"
            name="value"
            id="value"
            placeholder="Search for a player..."
          />
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Home
