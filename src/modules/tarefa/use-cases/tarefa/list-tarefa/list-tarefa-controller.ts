import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTarefaUseCase } from './list-tarefa-use-case'
import { ok } from '@shared/helpers'

class ListTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search,
      page,
      rowsPerPage,
      columnOrder
    } = request.body


    const listTarefaUseCase = container.resolve(ListTarefaUseCase)

    const result = await listTarefaUseCase.execute({
        search: search as string,
        page: page as number,
        rowsPerPage: rowsPerPage as number,
        columnOrder: columnOrder as Array<'ASC' | 'DESC'>
      })
      .then(tarefasResult => {
        return ok(tarefasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).send(result)
  }
}

export { ListTarefaController }
