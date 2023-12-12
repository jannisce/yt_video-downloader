import cors from 'cors'
import express from 'express'
import youtubeRoutes from './routes/youtube.js'

const app = express()
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!')
})

app.use('/youtube', youtubeRoutes)

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n\nServidor escuchando en http://localhost:${PORT}\n\n`)
})
