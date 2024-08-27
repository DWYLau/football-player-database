import express from "express"
import {
  getClubsByLeague,
  leaguesListGet,
} from "../controllers/leaguesControllers.js"

const leaguesRouter = express.Router()

leaguesRouter.get("/", leaguesListGet)

leaguesRouter.get("/:id", getClubsByLeague)

export default leaguesRouter
