import pool from "./pool.js"

// players table queries
async function getAllPlayers() {
  const { rows } = await pool.query(
    "SELECT * FROM players AS p INNER JOIN clubs AS c ON p.club = c.id"
  )
  return rows
}

async function getPlayerById(id) {
  const { rows } = await pool.query("SELECT * FROM players WHERE id = $1", [id])
  return rows
}

// IMPLEMENT DELETE AND UPDATE PLAYER

// clubs table queries

async function getAllClubs() {
  const { rows } = await pool.query("SELECT * FROM clubs")
  return rows
}

async function getClubById(id) {
  const { rows } = await pool.query("SELECT * FROM clubs WHERE id = $1", [id])
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

// league queries

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
}
