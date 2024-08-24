import db from "../db/queries.js"
import asyncHandler from "express-async-handler"

// REFACTOR CODE TO NOT USE ASYNC HANDLER

const clubsListGet = asyncHandler(async (request, response) => {
  const clubs = await db.getAllClubs()

  if (!clubs) {
    response.status(404).send("Clubs not found!")
    return
  } else {
    response.status(200).json({ count: clubs.length, clubs: clubs })
  }
})

const clubsDetailsGet = asyncHandler(async (request, response) => {
  const { id } = request.params

  const club = await db.getClubById(id)

  if (!club) {
    response.status(404).send("Club not found!")
    return
  } else {
    response.status(200).json(club)
  }
})

const clubsCreatePost = asyncHandler(async (request, response) => {
  const { club, league } = request.body
  await db.insertClub(club, league)
  response.redirect("/")
})

const clubsUpdatePut = async (request, response) => {
  try {
    if (!request.body.club || !request.body.league) {
      return response.status(400).send({ message: "Send all required fields." })
    } else {
      const { id } = request.params
      const { club, league } = request.body
      const result = await db.updateClub(id, club, league)

      if (!result) {
        return response.status(404).json({ message: "Club not found!" })
      } else {
        return response
          .status(200)
          .send({ message: "Club updated succesfully!" })
      }
    }
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
}

export { clubsListGet, clubsDetailsGet, clubsCreatePost, clubsUpdatePut }
