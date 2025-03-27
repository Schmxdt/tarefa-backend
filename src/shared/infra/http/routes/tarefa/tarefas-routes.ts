import { Router } from 'express'
import { CreateTarefaController } from '@modules/tarefa/use-cases/tarefa/create-tarefa/create-tarefa-controller'
import { ListTarefaController } from '@modules/tarefa/use-cases/tarefa/list-tarefa/list-tarefa-controller'
import { CountTarefaController } from '@modules/tarefa/use-cases/tarefa/count-tarefa/count-tarefa-controller'
import { SelectTarefaController } from '@modules/tarefa/use-cases/tarefa/select-tarefa/select-tarefa-controller'
import { GetTarefaController } from '@modules/tarefa/use-cases/tarefa/get-tarefa/get-tarefa-controller'
import { UpdateTarefaController } from '@modules/tarefa/use-cases/tarefa/update-tarefa/update-tarefa-controller'
import { DeleteTarefaController } from '@modules/tarefa/use-cases/tarefa/delete-tarefa/delete-tarefa-controller'

const tarefasRoutes = Router()

const createTarefaController = new CreateTarefaController()
const listTarefaController = new ListTarefaController()
const countTarefaController = new CountTarefaController()
const selectTarefaController = new SelectTarefaController()
const getTarefaController = new GetTarefaController()
const updateTarefaController = new UpdateTarefaController()
const deleteTarefaController = new DeleteTarefaController()

tarefasRoutes.post('/', createTarefaController.handle)
tarefasRoutes.post('/list', listTarefaController.handle)
tarefasRoutes.post('/count', countTarefaController.handle)
tarefasRoutes.post('/select', selectTarefaController.handle)
tarefasRoutes.get('/:id', getTarefaController.handle)
tarefasRoutes.put('/', updateTarefaController.handle)
tarefasRoutes.delete('/:id', deleteTarefaController.handle)

export { tarefasRoutes }
