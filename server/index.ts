import app from './app'
import { startConnection } from './database'

startConnection()
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log( `Server is running! http://localhost:${PORT}` )
})