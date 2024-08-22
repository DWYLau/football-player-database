import express from "express"
import { serverPort } from "./config.js"
import playersRouter from "./routes/playersRouter.js"

const app = express()
const PORT = serverPort || 4000

// Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/players", playersRouter)

app.get("/", (request, response) => {
  return response.status(234).send("Football Player Database Server")
})

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`))
