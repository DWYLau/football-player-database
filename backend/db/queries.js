import pool from "./pool.js"

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

// FUNCTION INSERT PLAYER INTO DATABASE

// FUNCTION UPDATE PLAYER WHERE ID = ?

// FUNCTION DELETE PLAYER WHERE ID = ?

export default { getAllPlayers, getPlayerById }
