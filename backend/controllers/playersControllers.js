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

const playersPositionGet = asyncHandler(async (request, response) => {
  const { position } = request.params
  const players = await db.getPlayersByPosition(position)

  if (!players) {
    response.status(404).send("Players by position not found!")
  } else {
    response.status(200).json({ count: players.length, players: players })
  }
})

const playersCountryGet = asyncHandler(async (request, response) => {
  const { country } = request.params
  const players = await db.getPlayersByCountry(country)

  if (!players) {
    response.status(404).send("Players by country not found!")
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

const playersCreatePost = asyncHandler(async (request, response) => {
  if (
    !request.body.player ||
    !request.body.age ||
    !request.body.country ||
    !request.body.position ||
    !request.body.club
  ) {
    return response.status(404).send({ message: "Send all required fields!" })
  } else {
    const { player, age, country, position, club } = request.body
    const rowsInserted = await db.insertPlayer(
      player,
      age,
      country,
      position,
      club
    )

    if (rowsInserted > 0) {
      return response.status(200).send({ message: "New player created!" })
    } else {
      return response
        .status(404)
        .send({ message: "Player could not be created." })
    }
  }
})

const playersUpdatePut = asyncHandler(async (request, response) => {
  if (
    !request.body.player ||
    !request.body.age ||
    !request.body.country ||
    !request.body.position ||
    !request.body.club
  ) {
    return response.status(404).send({ message: "Send all required fields!" })
  } else {
    const { id } = request.params
    const { player, age, country, position, club } = request.body
    const rowsUpdated = await db.updatePlayer(
      id,
      player,
      age,
      country,
      position,
      club
    )

    if (rowsUpdated > 0) {
      return response.status(200).send({ message: "Player updated" })
    } else {
      return response
        .status(404)
        .send({ message: "Player could not be updated." })
    }
  }
})

const playersDelete = asyncHandler(async (request, response) => {
  const { id } = request.params
  const rowsDeleted = await db.deletePlayer(id)

  if (rowsDeleted > 0) {
    return response.status(200).send({ message: "Player deleted" })
  } else {
    return response.status(404).send({ message: "Player could not be deleted" })
  }
})

// CHECK LATER
const playersSearchGet = asyncHandler(async (request, response) => {
  let searchValue = request.query.value
  searchValue = typeof searchValue === "string" ? searchValue : ""
  const players = await db.searchPlayer(searchValue)

  if (!players) {
    response.status(404).send("Players by search not found!")
  } else {
    response.status(200).json({ count: players.length, players: players })
  }
})

export {
  playersListGet,
  playersPositionGet,
  playersCountryGet,
  playersDetailsGet,
  playersCreatePost,
  playersUpdatePut,
  playersDelete,
  playersSearchGet,
}
