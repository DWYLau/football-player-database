import dotenv from "dotenv"

dotenv.config()
console.log("Loaded Environment Variables:")
console.log("HOST:", process.env.HOST)
console.log("USER:", process.env.USER)
console.log("DATABASE:", process.env.DATABASE)
console.log("PASSWORD:", process.env.PASSWORD)
console.log("PORT:", process.env.PORT)

export const host = process.env.HOST
export const user = process.env.USER
export const db = process.env.DATABASE
export const password = process.env.PASSWORD
export const port = process.env.PORT
export const serverPort = process.env.SERVER_PORT
