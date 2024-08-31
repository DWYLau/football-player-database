import pool from "./pool.js"

// players table queries
async function getAllPlayers() {
  const { rows } = await pool.query(
    "SELECT * FROM players AS p INNER JOIN clubs AS c ON p.club = c.id INNER JOIN leagues AS l ON c.league = l.id"
  )
  return rows
}

async function getPlayerById(id) {
  const { rows } = await pool.query("SELECT * FROM players WHERE id = $1", [id])
  return rows
}

async function getPlayersByPosition(position) {
  const { rows } = await pool.query(
    "SELECT * FROM players WHERE position = $1",
    [position]
  )
  return rows
}

async function getPlayersByCountry(country) {
  const { rows } = await pool.query(
    "SELECT * FROM players WHERE country = $1",
    [country]
  )
  return rows
}

async function insertPlayer(player, age, country, position, club) {
  const result = await pool.query(
    "INSERT INTO players (player, age, country, position, club) VALUES ($1, $2, $3, $4, $5)",
    [player, age, country, position, club]
  )
  return result.rowCount
}

async function updatePlayer(id, player, age, country, position, club) {
  const result = await pool.query(
    "UPDATE players SET player = $2, age = $3, country = $4, position = $5, club = $6 WHERE id = $1",
    [id, player, age, country, position, club]
  )
  return result.rowCount
}

async function deletePlayer(id) {
  const result = await pool.query("DELETE FROM players WHERE id = $1", [id])
  return result.rowCount
}

// clubs table queries

async function getAllClubs() {
  const { rows } = await pool.query("SELECT * FROM clubs")
  return rows
}

async function getClubById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM clubs AS c INNER JOIN leagues AS l ON c.league = l.id WHERE l.id = $1",
    [id]
  )
  return rows
}

async function insertClub(club, league) {
  const result = await pool.query(
    "INSERT INTO clubs (club, league) VALUES ($1, $2)",
    [club, league]
  )
  return result.rowCount
}

async function updateClub(id, club, league) {
  const result = await pool.query(
    "UPDATE clubs SET club = $2, league = $3 WHERE id = $1",
    [id, club, league]
  )
  return result.rowCount
}

async function deleteClub(id) {
  const result = await pool.query("DELETE FROM clubs WHERE id = $1", [id])
  return result.rowCount
}

// league table queries

async function getAllLeagues() {
  const { rows } = await pool.query("SELECT league FROM leagues")
  return rows
}

async function getClubsByLeague(id) {
  const { rows } = await pool.query("SELECT * FROM clubs WHERE league = $1", [
    id,
  ])
  return rows
}

export default {
  getAllClubs,
  getClubById,
  getAllLeagues,
  getClubsByLeague,
  insertClub,
  updateClub,
  deleteClub,
  getAllPlayers,
  getPlayerById,
  getPlayersByPosition,
  getPlayersByCountry,
  insertPlayer,
  updatePlayer,
  deletePlayer,
}
