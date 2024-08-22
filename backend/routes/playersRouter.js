import express from "express"
import {
  playersDetailsGet,
  playersListGet,
} from "../controllers/playersControllers.js"

const playersRouter = express.Router()

playersRouter.get("/", playersListGet)
playersRouter.get("/:id", playersDetailsGet)

// POST REQUEST FOR INSERTING PLAYER

// PUT REQUEST FOR UPDATING PLAYER

// DELETE REQUEST FOR DELETING PLAYER

export default playersRouter
