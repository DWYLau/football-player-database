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
  await pool.query("INSERT INTO clubs (club, league) VALUES ($1, $2)", [
    club,
    league,
  ])
}

async function updateClub(id, club, league) {
  await pool.query("UPDATE clubs SET club = $2, league = $3 WHERE id = $1", [
    id,
    club,
    league,
  ])
}

// FUNCTION UPDATE PLAYER WHERE ID = ?

// FUNCTION DELETE PLAYER WHERE ID = ?

export default {
  getAllClubs,
  getClubById,
  insertClub,
  updateClub,
  getAllPlayers,
  getPlayerById,
}
