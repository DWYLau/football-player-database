import pkg from "pg"
import { host, user, db, password, port } from "../config.js"

const { Client } = pkg

const SQL = `
CREATE TABLE IF NOT EXISTS leagues (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  league VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS clubs (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  club VARCHAR(50) NOT NULL UNIQUE,
  league INTEGER REFERENCES leagues(id),
  club_image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  player VARCHAR(50) NOT NULL UNIQUE,
  age INTEGER NOT NULL,
  country VARCHAR(50) NOT NULL,
  position VARCHAR(50) NOT NULL,
  club INTEGER REFERENCES clubs(id),
  player_image VARCHAR(255) UNIQUE,
  country_image VARCHAR(255)
);

INSERT INTO leagues (league)
VALUES
  ('Premier League'),
  ('La Liga'),
  ('Bundesliga'),
  ('Serie A'),
  ('Ligue 1'),
  ('Eredivisie');

INSERT INTO clubs (club, league)
VALUES 
  ('Brighton', 1),
  ('Arsenal', 1),
  ('Real Madrid', 2),
  ('Borussia Dortmund', 3),
  ('Inter Milan', 4);

INSERT INTO players (player, age, country, position, club)
VALUES
  ('Kaoru Mitoma', 27, 'Japan', 'Winger', 1),
  ('Kai Havertz', 25, 'Germany', 'Striker', 2),
  ('Jude Bellingham', 21, 'England', 'Midfielder', 3),
  ('Pascal Gross', 33, 'Germany', 'Midfielder', 4),
  ('Federico Dimarco', 26, 'Italy', 'Defender', 5);
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
