import { Router } from 'express'
import { tarefasRoutes } from './tarefa/tarefas-routes'

const router = Router()

router.use('/tarefas', tarefasRoutes)

export { router }
