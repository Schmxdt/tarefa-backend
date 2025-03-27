import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTarefaUseCase } from './update-tarefa-use-case'
import { ok } from '@shared/helpers'

class UpdateTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      name,
      description,
      status
    } = request.body


    const updateTarefaUseCase = container.resolve(UpdateTarefaUseCase)

    const result = await updateTarefaUseCase.execute({
        id,
        name,
        description,
        status
      })
      .then(tarefaResult => {
        return ok(tarefaResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}

export { UpdateTarefaController }
