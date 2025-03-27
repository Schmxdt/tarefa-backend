import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { GetTarefaUseCase } from './get-tarefa-use-case'
import { ok } from '@shared/helpers'

class GetTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const getTarefaUseCase = container.resolve(GetTarefaUseCase)

    const result = await getTarefaUseCase.execute(id)
      .then(tarefaResult => {
        return ok(tarefaResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}

export { GetTarefaController }
