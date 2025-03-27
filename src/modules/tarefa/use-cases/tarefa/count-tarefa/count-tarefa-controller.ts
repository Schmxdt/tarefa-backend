import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CountTarefaUseCase } from './count-tarefa-use-case'
import { ok } from '@shared/helpers'

class CountTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search
    } = request.body


    const countTarefaUseCase = container.resolve(CountTarefaUseCase)

    const result = await countTarefaUseCase.execute({
        search: search as string
      })
      .then(tarefasCountResult => {
        return ok(tarefasCountResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}

export { CountTarefaController }
