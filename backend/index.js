import express from "express"
import { serverPort } from "./config.js"
import playersRouter from "./routes/playersRouter.js"
import clubsRouter from "./routes/clubsRouter.js"
import leaguesRouter from "./routes/leaguesRouter.js"

const app = express()
const PORT = serverPort || 4000

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/players", playersRouter)
app.use("/clubs", clubsRouter)
app.use("/leagues", leaguesRouter)

app.use((error, request, response, next) => {
  console.log(error)
  response.status(500).send(error)
})

app.get("/", (request, response) => {
  return response.status(234).send("Football Player Database Server")
})

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`))
