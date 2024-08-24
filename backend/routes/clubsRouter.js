import express from "express"
import {
  clubsCreatePost,
  clubsDetailsGet,
  clubsListGet,
  clubsUpdatePut,
} from "../controllers/clubsControllers.js"

const clubsRouter = express.Router()

clubsRouter.get("/", clubsListGet)
clubsRouter.get("/:id", clubsDetailsGet)

clubsRouter.post("/", clubsCreatePost)

clubsRouter.put("/:id", clubsUpdatePut)

export default clubsRouter
