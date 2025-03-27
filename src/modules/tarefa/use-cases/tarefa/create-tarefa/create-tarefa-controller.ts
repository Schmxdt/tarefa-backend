import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTarefaUseCase } from './create-tarefa-use-case'
import { ok } from '@shared/helpers'

class CreateTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      status
    } = request.body

    const createTarefaUseCase = container.resolve(CreateTarefaUseCase)

    const result = await createTarefaUseCase.execute({
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

export { CreateTarefaController }
