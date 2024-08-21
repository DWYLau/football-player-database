import pkg from "pg"
import { host, user, db, password, port } from "../config.js"

const { Client } = pkg

const SQL = `
CREATE TABLE IF NOT EXISTS clubs (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(50) NOT NULL,
  league VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(50) NOT NULL,
  country VARCHAR(50) NOT NULL,
  position VARCHAR(50) NOT NULL,
  club INTEGER REFERENCES clubs(id)
);

INSERT INTO clubs (name, league)
VALUES 
  ('Brighton', 'Premier League'),
  ('Arsenal', 'Premier League'),
  ('Real Madrid', 'La Liga'),
  ('Borussia Dortmund', 'Bundesliga'),
  ('Inter Milan', 'Serie A');

INSERT INTO players (name, country, position, club)
VALUES
  ('Kaoru Mitoma', 'Japan', 'Winger', 1),
  ('Kai Havertz', 'Germany', 'Striker', 2),
  ('Jude Bellingham', 'England', 'Midfielder', 3),
  ('Pascal Gross', 'Germany', 'Midfielder', 4),
  ('Federico Dimarco', 'Italy', 'Defender', 5);
`

async function main() {
  console.log("Seeding...")
  console.log("User: ", user)
  console.log("Password ", password)
  const client = new Client({
    connectionString: `postgresql://${user}:${password}@${host}:${port}/${db}`,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log("Finished populating database")
}

main()
