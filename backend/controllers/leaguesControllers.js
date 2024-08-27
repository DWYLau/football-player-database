import db from "../db/queries.js"
import asyncHandler from "express-async-handler"

const leaguesListGet = asyncHandler(async (request, response) => {
  const leagues = await db.getAllLeagues()

  if (!leagues) {
    response.status(404).send("Leagues not found!")
    return
  } else {
    console.log("Found leagues, sending data.")
    response.status(200).json({ count: leagues.length, leagues: leagues })
  }
})

const getClubsByLeague = asyncHandler(async (request, response) => {
  const { id } = request.params

  const clubs = await db.getClubsByLeague(id)

  if (!clubs) {
    response.status(404).send("Clubs by league not found!")
    return
  } else {
    console.log("Found clubs by league, sending data.")
    response.status(200).json({ count: clubs.length, clubs: clubs })
  }
})

export { leaguesListGet, getClubsByLeague }
