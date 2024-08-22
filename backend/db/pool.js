import pkg from "pg"
import { host, user, db, password, port } from "../config.js"

const { Pool } = pkg

const pool = new Pool({
  host: host,
  user: user,
  database: db,
  password: password,
  port: port,
})

export default pool
