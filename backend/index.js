import express from "express"
import { serverPort } from "./config.js"

const app = express()
const PORT = serverPort || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
  return response.status(234).send("Football Player Database Server")
})

app.listen(PORT, () => console.log(`Express app listening on ${PORT}`))
