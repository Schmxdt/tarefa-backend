import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteTarefaUseCase } from './delete-tarefa-use-case'
import { ok } from '@shared/helpers'

class DeleteTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const deleteTarefaUseCase = container.resolve(DeleteTarefaUseCase)

    const result = await deleteTarefaUseCase.execute(id)
      .then(tarefasResult => {
        return ok(tarefasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}

export { DeleteTarefaController }
