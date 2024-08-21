import { Pool } from "pg"
import { host, user, db, password, port } from "../config.js"

const pool = new Pool({
  host: host,
  user: user,
  database: db,
  password: password,
  port: port,
})

export default pool
