import express from "express"
import {
  playersCreatePost,
  playersDelete,
  playersDetailsGet,
  playersListGet,
  playersUpdatePut,
} from "../controllers/playersControllers.js"

const playersRouter = express.Router()

playersRouter.get("/", playersListGet)
playersRouter.get("/:id", playersDetailsGet)

// POST REQUEST FOR INSERTING PLAYER
playersRouter.post("/", playersCreatePost)
// PUT REQUEST FOR UPDATING PLAYER
playersRouter.put("/:id", playersUpdatePut)
// DELETE REQUEST FOR DELETING PLAYER
playersRouter.delete("/:id", playersDelete)
export default playersRouter
