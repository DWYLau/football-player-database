import db from "../db/queries.js"
import asyncHandler from "express-async-handler"

const clubsListGet = asyncHandler(async (request, response) => {
  const clubs = await db.getAllClubs()

  if (!clubs) {
    return response.status(404).send("Clubs not found!")
  } else {
    console.log("Found clubs, sending data.")
    return response.status(200).json({ count: clubs.length, clubs: clubs })
  }
})

const clubsDetailsGet = asyncHandler(async (request, response) => {
  const { id } = request.params

  const club = await db.getClubById(id)

  if (!club) {
    return response.status(404).send("Club not found!")
  } else {
    console.log("Found club by ID, sending club details.")
    return response.status(200).json(club)
  }
})

const clubsCreatePost = asyncHandler(async (request, response) => {
  if (!request.body.club || !request.body.league) {
    return response.status(400).send({ message: "Send all required fields." })
  } else {
    const { club, league } = request.body
    const rowsInserted = await db.insertClub(club, league)

    if (rowsInserted > 0) {
      return response.status(200).send({ message: "New club created!" })
    } else {
      return response
        .status(500)
        .send({ message: "Club could not be inserted" })
    }
  }
})

const clubsUpdatePut = asyncHandler(async (request, response) => {
  if (!request.body.club || !request.body.league) {
    return response.status(400).send({ message: "Send all required fields." })
  } else {
    const { id } = request.params
    const { club, league } = request.body
    const rowsUpdated = await db.updateClub(id, club, league)
    console.log(rowsUpdated)

    if (rowsUpdated > 0) {
      return response.status(200).send({ message: "Club updated succesfully!" })
    } else {
      return response.status(404).json({ message: "Club not found!" })
    }
  }
})

const clubsDelete = asyncHandler(async (request, response) => {
  const { id } = request.params

  const rowsDeleted = await db.deleteClub(id)

  if (rowsDeleted > 0) {
    return response.status(200).send({ message: "Club deleted successfully" })
  } else {
    return response
      .status(400)
      .json({ message: "Club could not be deleted, check again." })
  }
})

export {
  clubsListGet,
  clubsDetailsGet,
  clubsCreatePost,
  clubsUpdatePut,
  clubsDelete,
}
