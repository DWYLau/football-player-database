import express from "express"
import {
  playersCountryGet,
  playersCreatePost,
  playersDelete,
  playersDetailsGet,
  playersListGet,
  playersPositionGet,
  playersUpdatePut,
} from "../controllers/playersControllers.js"

const playersRouter = express.Router()

playersRouter.get("/", playersListGet)
playersRouter.get("/position/:position", playersPositionGet)
playersRouter.get("/country/:country", playersCountryGet)

playersRouter.get("/:id", playersDetailsGet)

playersRouter.post("/", playersCreatePost)
playersRouter.put("/:id", playersUpdatePut)
playersRouter.delete("/:id", playersDelete)

export default playersRouter
