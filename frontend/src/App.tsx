import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import CreatePlayer from "./pages/CreatePlayer.tsx"
import ShowPlayer from "./pages/ShowPlayer.tsx"
import EditPlayer from "./pages/EditPlayer.tsx"
import DeletePlayer from "./pages/DeletePlayer.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="players/create" element={<CreatePlayer />} />
        <Route path="players/details/:id" element={<ShowPlayer />} />
        <Route path="players/edit/:id" element={<EditPlayer />} />
        <Route path="players/delete/:id" element={<DeletePlayer />} />
      </Route>
    </Routes>
  )
}

export default App
