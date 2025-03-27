import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { SelectTarefaUseCase } from './select-tarefa-use-case'
import { ok } from '@shared/helpers'

class SelectTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {

    const selectTarefaUseCase = container.resolve(SelectTarefaUseCase)

    const result = await selectTarefaUseCase.execute()
      .then(tarefasResult => {
        return ok(tarefasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}

export { SelectTarefaController }
