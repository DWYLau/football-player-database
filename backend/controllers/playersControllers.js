import db from "../db/queries.js"
import asyncHandler from "express-async-handler"

const playersListGet = asyncHandler(async (request, response) => {
  const players = await db.getAllPlayers()

  if (!players) {
    response.status(404).send("Players not found!")
    return
  } else {
    response.status(200).json({ count: players.length, players: players })
  }
})

const playersDetailsGet = asyncHandler(async (request, response) => {
  const { id } = request.params
  const player = await db.getPlayerById(id)

  if (!player) {
    response.status(404).send("Player not found!")
    return
  } else {
    response.status(200).json(player)
  }
})

// post request for creating a club

// PUT REQUEST FOR UPDATING PLAYER

// DELETE REQUEST FOR DELETING PLAYER

export { playersListGet, playersDetailsGet }
