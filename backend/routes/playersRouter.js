import express from "express"
import {
  playersCountryGet,
  playersCreatePost,
  playersDelete,
  playersDetailsGet,
  playersListGet,
  playersPositionGet,
  playersSearchGet,
  playersUpdatePut,
} from "../controllers/playersControllers.js"

const playersRouter = express.Router()

// CHECK LATER
playersRouter.get("/", async (request, response) => {
  if (request.query.value) {
    await playersSearchGet(request, response)
  } else {
    await playersListGet(request, response)
  }
})

playersRouter.get("/position/:position", playersPositionGet)
playersRouter.get("/country/:country", playersCountryGet)

playersRouter.get("/:id", playersDetailsGet)

playersRouter.post("/", playersCreatePost)
playersRouter.put("/:id", playersUpdatePut)
playersRouter.delete("/:id", playersDelete)

export default playersRouter
