import express from 'express'
import cors from 'cors'
import tasksRoutes from './routes/tasksRoutes'
import sequelize from './database/db'
import Task from './models/Task'

const app = express()

// Middlewares
app.use(express.json())

const PORT = process.env.PORT ?? 3000

app.use(cors({
  origin: '*', // Configura el origen permitido
  allowedHeaders: ['X-Requested-With'] // Especifica los encabezados permitidos
}))

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/tasks', tasksRoutes)

async function main (): Promise<void> { // Especifica el tipo de retorno como void
  try {
    await sequelize.sync({ alter: false })

    await Task.sync({ alter: false })

    console.log(`Server running on port ${PORT}`)
    console.log('Connection has been established successfully.')
    app.listen(PORT)
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

main().catch(error => { // Maneja cualquier posible error
  console.error('Error in main function:', error)
})
